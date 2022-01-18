import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import calculateFractionOfPrize from './calculateFractionOfPrize';
import calculateNumberOfPrizesForTierIndex from './calculateNumberOfPrizesForTierIndex';

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
