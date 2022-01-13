import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { sumBigNumbers } from './sumBigNumbers';

function isTiersValid(tiers: Array<BigNumberish>): boolean {
    const total = sumBigNumbers(tiers);
    /**
     * @dev The total of the tiers must be less than the max.
     * @dev Tiers are denominated in 1e9 and represented as a percentage (e.g. 0.1 = 10%).
     */
    if (BigNumber.from(total).gt(1000000000)) {
        return false;
    }
    return true;
}

export default isTiersValid;
