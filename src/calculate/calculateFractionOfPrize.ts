import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

function calculateFractionOfPrize(
    tierTotalPrizes: BigNumberish,
    tierValue: BigNumberish
): BigNumber {
    const value = tierValue ? tierValue.toString() : '0';
    const totalPrizes = tierTotalPrizes || '1';
    const valueAtTierIndexUnformatted = parseUnits(value, 9);
    return valueAtTierIndexUnformatted.div(totalPrizes);
}

export default calculateFractionOfPrize;
