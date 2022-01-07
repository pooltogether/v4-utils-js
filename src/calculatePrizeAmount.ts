import calculatePrizeForDistributionIndex from './calculatePrizeForDistributionIndex';
import { PrizeDistribution, PickPrize } from './types';

const debug = require('debug')('pt:v4-utils-js');

function calculatePrizeAmount(
  prizeDistribution: PrizeDistribution,
  matches: number
): PickPrize | undefined {
  // returns the prize you would receive for drawSettings and number of matches

  const distributionIndex = prizeDistribution.matchCardinality - matches;
  debug(
    `distributionIndex: ${distributionIndex}, : (${prizeDistribution.matchCardinality} - ${matches} )`
  );

  if (distributionIndex < prizeDistribution.tiers.length) {
    // user *may* be getting a prize
    const expectedPrizeAmount = calculatePrizeForDistributionIndex(
      distributionIndex,
      prizeDistribution
    );
    return {
      amount: expectedPrizeAmount,
      distributionIndex,
    };
  }
  // user did not qualify for a prize
  return undefined;
}

export default calculatePrizeAmount;
