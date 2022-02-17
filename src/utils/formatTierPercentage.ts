import { parseUnits } from '@ethersproject/units';

export const formatTierPercentage = (tier: string): number => {
    return parseUnits(tier, 9).toNumber();
};

export default formatTierPercentage;
