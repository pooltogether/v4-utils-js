import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import calculateNumberOfPrizesForTierIndex from './calculateNumberOfPrizesForTierIndex';

function calculateTierPercentageForPrize(
    tierIndex: number,
    tierPrize: BigNumberish,
    bitRangeSize: number,
    prizeAmount: BigNumber
): BigNumber {
    const numberOfPrizes = calculateNumberOfPrizesForTierIndex(
        bitRangeSize,
        tierIndex
    );
    const totalTierPrizes = parseUnits(tierPrize ? tierPrize.toString() : '0', 9).mul(numberOfPrizes);
    const tierPercentage: BigNumber = totalTierPrizes.div(prizeAmount);
    return tierPercentage;
}

export default calculateTierPercentageForPrize;