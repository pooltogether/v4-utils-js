// @ts-nocheck
import { BigNumber } from "@ethersproject/bignumber";
import { Draw, PrizeDistribution } from "@pooltogether/v4-ts-types";
import { ethers } from "ethers";
import { ContractAddressWithNetwork } from './types'
import { calculatePicks } from "./calculatePicks";
import { computeCardinality } from "./computeCardinality";
import { getContract } from "./utils/getContract";
import { sumBigNumbers } from "./utils/sumBigNumbers";
import { getProviderFromNetwork } from "./utils/getProviderFromNetwork";
import { getMultiTicketAverageTotalSuppliesBetween } from "./fetching/getMultiTicketAverageTotalSuppliesBetween";
import { getContractFromAddressAndName } from "./utils/getContractFromAddressAndName";
import { InterfaceTicket, InterfacePrizeTierHistory } from "./interfaces";
const debug = require("debug")("v4-js-core");

export async function computePrizeDistribution(
  draw: Draw,
  prizeTierHistory?: ContractAddressWithNetwork,
  ticketsToCalculate?: ContractAddressWithNetwork[]
): Promise<PrizeDistribution | undefined> {
  debug("computePrizeDistribution:entered");
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
  const { drawId, beaconPeriodSeconds } = draw
  debug("computePrizeDistribution:fetching-data")

  const prizeTier = await prizeTierHistoryContract.getPrizeTier(drawId);
  debug("computePrizeDistribution:prizeTier", prizeTier);

  const beaconPeriod = beaconPeriodSeconds;
  const startTimestampOffset = beaconPeriod;

  const decimals = await ticketL1.decimals();
  debug("computePrizeDistribution:decimals", decimals);

  const { endTimestampOffset } = prizeTier;
  const startTime = draw.timestamp - startTimestampOffset;
  const endTime = draw.timestamp - endTimestampOffset;

  const getAverageTotalSuppliesBetween = await getMultiTicketAverageTotalSuppliesBetween(ticketContracts, startTime, endTime)

  console.log(getAverageTotalSuppliesBetween, 'getAverageTotalSuppliesBetween')
  getAverageTotalSuppliesBetween.forEach((avg, idx) => debug("Ticket ${idx}: ", avg))

  const combinedTotalSupply = sumBigNumbers(getAverageTotalSuppliesBetween)
  console.log(combinedTotalSupply, 'combinedTotalSupply')

  const matchCardinality = computeCardinality(
    prizeTier.bitRangeSize,
    combinedTotalSupply,
    decimals
  );
  const { expiryDuration } = prizeTier;
  debug(`cardinality is ${matchCardinality}`);

  debug(
    `total supply (combined): ${ethers.utils.formatUnits(
      combinedTotalSupply,
      decimals
    )}`
  );
  debug(
    `total number of picks: ${(2 ** prizeTier.bitRangeSize) **
    matchCardinality}`
  );

  let numberOfPicks = 0;
  if (combinedTotalSupply.gt("0")) {
    numberOfPicks = await calculatePicks(
      prizeTier.bitRangeSize,
      matchCardinality,
      startTime,
      endTime,
      ticketL1,
      ticketL2
    );
  }
  debug(`number of picks is ${numberOfPicks}`);

  const prizeDistribution: PrizeDistribution = {
    bitRangeSize: prizeTier.bitRangeSize,
    matchCardinality,
    tiers: prizeTier.tiers,
    maxPicksPerUser: prizeTier.maxPicksPerUser,
    expiryDuration,
    numberOfPicks: BigNumber.from(numberOfPicks),
    startTimestampOffset,
    prize: prizeTier.prize,
    endTimestampOffset,
  };

  debug(`prizeDistribution: `, prizeDistribution);

  return prizeDistribution;
}

export default computePrizeDistribution;
