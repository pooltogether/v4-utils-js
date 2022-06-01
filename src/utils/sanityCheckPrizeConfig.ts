import { PrizeConfig } from '../types';
import isBitRangeSizeValid from './isBitRangeSizeValid';
import isTiersValid from './isTiersValid';

function sanityCheckPrizeConfig(prizeConfig: PrizeConfig): string {
    const validBitRangeSize = isBitRangeSizeValid(
        prizeConfig.bitRangeSize,
        prizeConfig.matchCardinality
    );
    if (!validBitRangeSize) return 'DrawCalc/bitRangeSize-too-large';
    const validTiers = isTiersValid(prizeConfig.tiers);
    if (!validTiers) return 'DrawCalc/tiers-gt-100%';
    return '';
}

export default sanityCheckPrizeConfig;
