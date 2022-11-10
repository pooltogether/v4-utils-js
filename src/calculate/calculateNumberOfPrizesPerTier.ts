import { PrizeTierConfig } from '../types';
import calculateNumberOfPrizesForTierIndex from './calculateNumberOfPrizesForTierIndex';

function calculateNumberOfPrizesPerTier(prizeTier: PrizeTierConfig) {
    return prizeTier.tiers.map((tier, index) =>
        !!tier
            ? calculateNumberOfPrizesForTierIndex(prizeTier.bitRangeSize, index)
            : 0
    );
}

export default calculateNumberOfPrizesPerTier;
