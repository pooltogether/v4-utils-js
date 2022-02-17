import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

export const parseTierPercentage = (tier: string): BigNumber => {
    return parseUnits(tier, 9);
};

export default parseTierPercentage;
