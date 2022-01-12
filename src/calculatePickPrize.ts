import { BigNumber } from '@ethersproject/bignumber';

import { PickPrize } from './types';
import calculatePrizeAmount from './calculatePrizeAmount';
import calculateNumberOfMatches from './calculateNumberOfMatches';
import calculateTierIndexFromMatches from './calculateTierIndexFromMatches';


// returns the fraction of the total prize that the user will win for this pick
function calculatePickPrize(
    randomNumberThisPick: string,
    winningRandomNumber: BigNumber,
    bitRangeSize: number,
    matchCardinality: number, 
    prize: BigNumber,
    tiers: Array<any>
): PickPrize {
    let numberOfMatches = calculateNumberOfMatches(
      randomNumberThisPick,
      winningRandomNumber,
      matchCardinality,
      bitRangeSize
    ) 
    const tierIndex = calculateTierIndexFromMatches(matchCardinality, numberOfMatches)
    const pickAmount = calculatePrizeAmount(
        tierIndex,
        tiers[tierIndex],
        bitRangeSize,
        prize
    );
    return pickAmount;
}

export default calculatePickPrize;
