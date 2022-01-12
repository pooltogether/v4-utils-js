import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { calculateNumberOfPrizesForTierIndex } from '.';
import calculateFractionOfPrize from './calculateFractionOfPrize';

function calculatePrizeForTierPercentage(
    tierIndex: number,
    tierValue: BigNumberish,
    bitRangeSize: number,
    prizeAmount: BigNumber
): BigNumber {
    const numberOfPrizes = calculateNumberOfPrizesForTierIndex(
        bitRangeSize,
        tierIndex
    );
    const fractionOfPrize = calculateFractionOfPrize(numberOfPrizes, tierValue);
    let expectedPrizeAmount: BigNumber = prizeAmount.mul(fractionOfPrize);
    expectedPrizeAmount = expectedPrizeAmount.div(
        BigNumber.from('1000000000000000000')
    );
    return expectedPrizeAmount;
}

export default calculatePrizeForTierPercentage;
