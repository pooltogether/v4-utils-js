// @ts-nocheck
import { BigNumber } from "@ethersproject/bignumber";
import { Draw, PrizeDistribution } from "@pooltogether/v4-ts-types";
import { ethers } from "ethers";
import { ContractAddressWithNetwork } from "./types";
import { calculatePicks } from "./calculatePicks";
import { computeCardinality } from "./computeCardinality";
import { getContract } from "./utils/getContract";
import { sumBigNumbers } from "./utils/sumBigNumbers";
import { getProviderFromNetwork } from "./utils/getProviderFromNetwork";
import { getMultiTicketAverageTotalSuppliesBetween } from "./fetching/getMultiTicketAverageTotalSuppliesBetween";
import { getContractFromAddressAndName } from "./utils/getContractFromAddressAndName";
import { InterfaceTicket, InterfacePrizeTierHistory } from "./interfaces";
import { PoolTogetherV4 } from "./PoolTogetherV4";
const debug = require("debug")("v4-js-core");

// draw, chainId, prizeTierHistoryAddress, ticketPrimary, ticketList[]

export async function computePrizeDistribution(
  draw: Draw,
  prizeTierHistory?: ContractAddressWithNetwork,
  ticketsToCalculate?: ContractAddressWithNetwork[]
): Promise<PrizeDistribution | undefined> {
  debug("computePrizeDistribution:entered");
  const poolTogetherV4 = new PoolTogetherV4();
  console.log(poolTogetherV4);

  if (!draw || !prizeTierHistory || !ticketsToCalculate) return undefined;

  // Get L1:PrizeTierHistory Contract
  const prizeTierHistoryContract = getContractFromAddressAndName(
    "PrizeTierHistory",
    prizeTierHistory.address,
    getProviderFromNetwork(prizeTierHistory.network)
  );

  debug(
    "computePrizeDistribution:prizeTierHistoryContract",
    !!prizeTierHistoryContract
  );
  if (!prizeTierHistoryContract) return;

  // Get MultiNetwork:Ticket Contracts
  const ticketContracts = ticketsToCalculate.map(ticketWithNetwork => {
    const { address, network } = ticketWithNetwork;
    return getContractFromAddressAndName(
      "Ticket",
      address,
      getProviderFromNetwork(network)
    );
  });
  const ticketL1 = ticketContracts[0];
  const ticketL2 = ticketContracts[1];

  // @TODO: handle case where ticketContracts is empty?
  if (!ticketContracts) return;
  const { drawId, beaconPeriodSeconds, beaconPeriodStartedAt } = draw;
  debug("computePrizeDistribution:fetching-data");

  const prizeTier = await prizeTierHistoryContract.getPrizeTier(drawId);
  const {
    bitRangeSize,
    expiryDuration,
    maxPicksPerUser,
    tiers,
    prize,
  } = prizeTier;
  debug("computePrizeDistribution:prizeTier", prizeTier);

  const decimals = await ticketL1.decimals();
  debug("computePrizeDistribution:decimals", decimals);

  const { endTimestampOffset } = prizeTier;
  const startTime = draw.timestamp - beaconPeriodSeconds;
  const endTime = draw.timestamp - endTimestampOffset;

  const getMultiTicketAverageTotalSupplies = await getMultiTicketAverageTotalSuppliesBetween(
    ticketContracts,
    startTime,
    endTime
  );
  const combinedTotalSupply = sumBigNumbers(getMultiTicketAverageTotalSupplies);
  getMultiTicketAverageTotalSupplies.forEach((avg, idx) =>
    debug("Ticket ${idx}: ", avg)
  );
  debug("computePrizeDistribution:combinedTotalSupply", combinedTotalSupply);

  const matchCardinality = computeCardinality(
    bitRangeSize,
    sumBigNumbers(getMultiTicketAverageTotalSupplies),
    decimals
  );
  debug(`cardinality is ${matchCardinality}`);

  debug(
    `total supply (combined): ${ethers.utils.formatUnits(
      combinedTotalSupply,
      decimals
    )}`
  );
  debug(`total number of picks: ${(2 ** bitRangeSize) ** matchCardinality}`);

  let numberOfPicks = 0;
  if (combinedTotalSupply.gt("0")) {
    numberOfPicks = await calculatePicks(
      bitRangeSize,
      matchCardinality,
      startTime,
      endTime,
      ticketL1,
      ticketL2
    );
  }
  debug(`number of picks is ${numberOfPicks}`);

  const prizeDistribution: PrizeDistribution = {
    bitRangeSize: bitRangeSize,
    matchCardinality,
    tiers: tiers,
    maxPicksPerUser: maxPicksPerUser,
    expiryDuration,
    numberOfPicks: BigNumber.from(numberOfPicks),
    startTimestampOffset: beaconPeriodSeconds,
    prize: prize,
    endTimestampOffset,
  };

  debug(`prizeDistribution: `, prizeDistribution);

  return prizeDistribution;
}

export default computePrizeDistribution;
