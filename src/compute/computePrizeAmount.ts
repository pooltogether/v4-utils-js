import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import calculatePrizeForTierPercentage from '../calculate/calculatePrizeForTierPercentage';
import { PickPrize } from '../types';

const MAXIUMUM_TIERS_LENGTH = 16;

function computePrizeAmount(
    tierIndex: number,
    tierValue: BigNumberish,
    bitRangeSize: number,
    prizeAmount: BigNumber
): PickPrize {
    if (tierIndex > MAXIUMUM_TIERS_LENGTH) {
        return {
            amount: BigNumber.from(0),
            distributionIndex: -1,
        };
    }

    const expectedPrizeAmount = calculatePrizeForTierPercentage(
        tierIndex,
        tierValue,
        bitRangeSize,
        prizeAmount
    );

    return {
        amount: expectedPrizeAmount,
        distributionIndex: tierIndex,
    };
}

export default computePrizeAmount;
