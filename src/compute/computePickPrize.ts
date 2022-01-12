import { BigNumber } from '@ethersproject/bignumber';

import calculateNumberOfMatches from '../calculate/calculateNumberOfMatches';
import calculateTierIndexFromMatches from '../calculate/calculateTierIndexFromMatches';
import { PickPrize } from '../types';
import computePrizeAmount from './computePrizeAmount';

function computePickPrize(
    pickHash: string,
    winningRandomNumber: BigNumber,
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): PickPrize {
    let numberOfMatches = calculateNumberOfMatches(
        pickHash,
        winningRandomNumber,
        matchCardinality,
        bitRangeSize
    );
    const tierIndex = calculateTierIndexFromMatches(
        matchCardinality,
        numberOfMatches
    );
    const pickAmount = computePrizeAmount(
        tierIndex,
        tiers[tierIndex],
        bitRangeSize,
        prize
    );
    return pickAmount;
}

export default computePickPrize;
