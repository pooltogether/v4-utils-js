import { PrizeDistribution } from '../types';
import isBitRangeSizeValid from './isBitRangeSizeValid';
import isTiersValid from './isTiersValid';

function sanityCheckPrizeDistribution(
  prizeDistribution: PrizeDistribution
): string {
  const validBitRangeSize = isBitRangeSizeValid(
    prizeDistribution.bitRangeSize,
    prizeDistribution.matchCardinality
  );
  if (!validBitRangeSize) return 'DrawCalc/bitRangeSize-too-large';
  const validTiers = isTiersValid(prizeDistribution.tiers);
  if (!validTiers) return 'DrawCalc/tiers-gt-100%';
  return '';
}

export default sanityCheckPrizeDistribution;
