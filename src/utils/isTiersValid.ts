import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { sumBigNumbers } from './sumBigNumbers';

function isTiersValid(tiers: Array<BigNumberish>): boolean {
    const total = sumBigNumbers(tiers);
    // @dev The tier total percentage must be less than 1e9
    // @dev Tiers are denominated in 1e9 and represented as a percentage (e.g. 0.1 = 10%).
    return !BigNumber.from(total).gt(1000000000);
}

export default isTiersValid;
