import { PrizeDistribution } from "../types";

// @TODO: Add more reasonable checks for validating the Draw object.
export function isPrizeDistributionStructSet(
  prizeDistribution: PrizeDistribution
): boolean {
  return (
    prizeDistribution &&
    prizeDistribution.bitRangeSize > 0 &&
    prizeDistribution.matchCardinality > 0
  );
}

export default isPrizeDistributionStructSet;
