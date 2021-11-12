import { BigNumber } from "@ethersproject/bignumber";
import { Draw, PrizeDistribution } from "./types";
import { ethers } from "ethers";
import {
  calculatePicksFromAverageTotalSuppliesBetween,
  computeCardinality,
} from "./index";
import { sumBigNumbers } from "./utils";
import { getMultiTicketAverageTotalSuppliesBetween } from "./fetching/getMultiTicketAverageTotalSuppliesBetween";
import { PoolTogetherV4 } from "./PoolTogetherV4";
import { validateContractListIsConnected } from "./utils";
const debug = require("debug")("v4-js-core");

export async function computePrizeDistribution(
  draw: Draw,
  prizeTierHistory?: string,
  ticketPrimaryAddress?: string,
  ticketSecondaryAddressList?: Array<string>
): Promise<PrizeDistribution | undefined> {
  debug("computePrizeDistribution:entered");
  const poolTogetherV4 = new PoolTogetherV4();
  if (!poolTogetherV4.isInitialized)
    throw new Error("PoolTogetherV4 is not initialized");
  if (
    !draw ||
    !prizeTierHistory ||
    !ticketPrimaryAddress ||
    !ticketSecondaryAddressList
  )
    return undefined;
  const prizeTierHistoryContract = poolTogetherV4.getContract(prizeTierHistory);
  const ticketPrimary = poolTogetherV4.getContract(ticketPrimaryAddress);
  const ticketsSecondary = ticketSecondaryAddressList.map(address => {
    return poolTogetherV4.getContract(address);
  });
  if (
    !prizeTierHistoryContract ||
    !ticketPrimary ||
    ticketsSecondary.length === 0
  )
    return undefined;
  debug(
    "computePrizeDistribution:prizeTierHistoryContract",
    !!prizeTierHistoryContract
  );
  const ticketL2 = ticketsSecondary[0];

  validateContractListIsConnected([
    prizeTierHistoryContract,
    ticketPrimary,
    ticketL2,
  ]);
  // @TODO: handle case where ticketContracts is empty?

  const { drawId, beaconPeriodSeconds } = draw;
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

  const decimals = await ticketPrimary.decimals();
  debug("computePrizeDistribution:decimals", decimals);

  const { endTimestampOffset } = prizeTier;
  const startTime = draw.timestamp - beaconPeriodSeconds;
  const endTime = draw.timestamp - endTimestampOffset;
  debug("computePrizeDistribution:startTime", startTime);
  debug("computePrizeDistribution:endTime", endTime);

  if (ticketsSecondary.length === 0) return undefined;
  const getMultiTicketAverageTotalSupplies = await getMultiTicketAverageTotalSuppliesBetween(
    [ticketPrimary, ...ticketsSecondary],
    startTime,
    endTime
  );
  if (!getMultiTicketAverageTotalSupplies) return undefined;
  debug(
    "computePrizeDistribution:getMultiTicketAverageTotalSupplies",
    getMultiTicketAverageTotalSupplies
  );

  const primaryTicketTotalSupply = getMultiTicketAverageTotalSupplies[0];
  const secondaryTicketSupplies = getMultiTicketAverageTotalSupplies.slice(1);

  const combinedTotalSupply = sumBigNumbers(getMultiTicketAverageTotalSupplies);
  const combinedTotalSupplySecondaryTickets = sumBigNumbers(
    secondaryTicketSupplies
  );
  debug("computePrizeDistribution:combinedTotalSupply", combinedTotalSupply);
  debug(
    "computePrizeDistribution:combinedTotalSupplySecondaryTickets",
    combinedTotalSupplySecondaryTickets
  );
  getMultiTicketAverageTotalSupplies.forEach(avg =>
    debug("Ticket ${idx}: ", avg)
  );

  const matchCardinality = computeCardinality(
    bitRangeSize,
    sumBigNumbers(getMultiTicketAverageTotalSupplies),
    decimals
  );
  debug(`computePrizeDistribution::matchCardinality ${matchCardinality}`);
  debug(
    `matchCardinality:totalSupply(combined) formated: ${ethers.utils.formatUnits(
      combinedTotalSupply,
      decimals
    )}`
  );
  debug(
    `computePrizeDistribution: total number of picks: ${(2 ** bitRangeSize) **
      matchCardinality}`
  );

  let numberOfPicks;
  const totalPicks = (2 ** bitRangeSize) ** matchCardinality;
  if (combinedTotalSupply.gt("0")) {
    numberOfPicks = calculatePicksFromAverageTotalSuppliesBetween(
      totalPicks,
      primaryTicketTotalSupply,
      combinedTotalSupplySecondaryTickets
    );
  }

  debug(`computePrizeDistribution: number of picks is ${numberOfPicks}`);

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
  debug(`computePrizeDistribution:prizeDistribution: `, prizeDistribution);

  return prizeDistribution;
}

export default computePrizeDistribution;
