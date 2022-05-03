import { PrizeTier } from '../types';
import isBitRangeSizeValid from './isBitRangeSizeValid';
import isTiersValid from './isTiersValid';

function sanityCheckPrizeTier(prizeTier: PrizeTier): string {
    const validBitRangeSize = isBitRangeSizeValid(
        prizeTier.bitRangeSize,
        prizeTier.matchCardinality
    );
    if (!validBitRangeSize) return 'DrawCalc/bitRangeSize-too-large';
    const validTiers = isTiersValid(prizeTier.tiers);
    if (!validTiers) return 'DrawCalc/tiers-gt-100%';
    return '';
}

export default sanityCheckPrizeTier;
