import { PrizeTier } from '../types';
import calculateNumberOfPrizesForTierIndex from './calculateNumberOfPrizesForTierIndex';

function calculateNumberOfPrizesPerTier(prizeTier: PrizeTier) {
    return prizeTier.tiers.map((tier, index) =>
        !!tier
            ? calculateNumberOfPrizesForTierIndex(prizeTier.bitRangeSize, index)
            : 0
    );
}

export default calculateNumberOfPrizesPerTier;
