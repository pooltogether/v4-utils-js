import { BigNumber } from '@ethersproject/bignumber';

import { TIER_DENOMINATION_BASE_MAX } from '../constants';
import { PrizeDistribution } from '../types';
import isTiersValid from './isTiersValid';

function sanityCheckPrizeDistribution(
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
    if (sum.gt(TIER_DENOMINATION_BASE_MAX)) {
      return 'DrawCalc/tiers-gt-100%';
    }
  }

  isTiersValid(prizeDistribution.tiers);

  return ''; // no error -> sane settings
}

export default sanityCheckPrizeDistribution;
