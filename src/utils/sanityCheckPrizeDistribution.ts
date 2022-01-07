import { BigNumber, ethers } from 'ethers';

import { PrizeDistribution } from '../types';

export function sanityCheckPrizeDistribution(
  prizeDistribution: PrizeDistribution
): string {
  if (
    prizeDistribution.bitRangeSize >=
    Math.floor(256 / prizeDistribution.matchCardinality)
  ) {
    return 'DrawCalc/bitRangeSize-too-large';
  } else {
    let sum = BigNumber.from(0);
    for (let i = 0; i < prizeDistribution.tiers.length; i++) {
      // Convert any BigNumberish to BigNumber
      let bn = BigNumber.from(prizeDistribution.tiers[i]);
      sum = sum.add(bn);
    }
    if (sum.gt(ethers.utils.parseEther('1'))) {
      return 'DrawCalc/tiers-gt-100%';
    }
  }
  return ''; // no error -> sane settings
}
