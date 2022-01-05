import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import calculatePicksFromAverageTotalSuppliesBetween from './calculatePicksFromAverageTotalSuppliesBetween';
import computeCardinality from './computeCardinality';
import { Draw, PrizeDistribution, PrizeTier } from './types';
import { sumBigNumbers } from './utils';

const debug = require('debug')('v4-js-core');

function createBigNumber(value: BigNumberish) {
  return BigNumber.from(value);
}

async function computePrizeDistributionFromTicketAverageTotalSupplies(
  draw: Draw,
  prizeTier?: PrizeTier,
  ticketPrimaryAverageTotalSupply?: BigNumberish,
  ticketSecondaryListAverageTotalSupply?: Array<BigNumberish>,
  decimals: BigNumberish = 18
): Promise<PrizeDistribution | undefined> {
  if (
    !draw ||
    !prizeTier ||
    !ticketPrimaryAverageTotalSupply ||
    !ticketSecondaryListAverageTotalSupply
  )
    return undefined;

  const { beaconPeriodSeconds } = draw;
  const {
    expiryDuration,
    bitRangeSize,
    maxPicksPerUser,
    endTimestampOffset,
    tiers,
    prize,
  } = prizeTier;

  const ticketPrimaryAverageTotalSupplyBigNumber = createBigNumber(
    ticketPrimaryAverageTotalSupply
  );
  const ticketSecondaryListAverageTotalSupplyBigNumber = ticketSecondaryListAverageTotalSupply.map(
    createBigNumber
  );

  // Sums the ALL ticket average total supplies.
  const totalAverageSupplies = sumBigNumbers([
    ticketPrimaryAverageTotalSupplyBigNumber,
    ...ticketSecondaryListAverageTotalSupplyBigNumber,
  ]);

  // Sums ALL SECONDARY ticket average total supplies.
  const secondaryTotalAverageSupplies = sumBigNumbers(
    ticketSecondaryListAverageTotalSupplyBigNumber
  );

  const matchCardinality = computeCardinality(
    BigNumber.from(bitRangeSize),
    totalAverageSupplies,
    BigNumber.from(decimals)
  );

  let numberOfPicks;
  const totalPicks = BigNumber.from(BigNumber.from(2).pow(bitRangeSize)).pow(
    matchCardinality
  );

  if (totalAverageSupplies.gt('0')) {
    numberOfPicks = calculatePicksFromAverageTotalSuppliesBetween(
      totalPicks.toNumber(),
      BigNumber.from(ticketPrimaryAverageTotalSupply),
      secondaryTotalAverageSupplies
    );
  }

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

export default computePrizeDistributionFromTicketAverageTotalSupplies;
