import { BigNumber } from '@ethersproject/bignumber';

import calculatePrizeAmount from './calculatePrizeAmount';
import { PrizeDistribution, PickPrize } from './types';
import { findBitMatchesAtIndex } from './utils';

const debug = require('debug')('pt:v4-utils-js:calculatePickPrize');

// returns the fraction of the total prize that the user will win for this pick
function calculatePickPrize(
  randomNumberThisPick: string,
  winningRandomNumber: BigNumber,
  prizeDistribution: PrizeDistribution
): PickPrize {
  let numberOfMatches = 0;
  let bigRando = BigNumber.from(randomNumberThisPick);

  for (
    let matchIndex = 0;
    matchIndex < prizeDistribution.matchCardinality;
    matchIndex++
  ) {
    debug('winningRandomNumber:', winningRandomNumber.toString());
    debug('randomNumberThisPick:', bigRando.toString());
    // attempt to match numbers
    if (
      !findBitMatchesAtIndex(
        bigRando,
        winningRandomNumber,
        matchIndex,
        prizeDistribution.bitRangeSize
      )
    ) {
      // no more continuous matches -- break out of matching loop
      break;
    }
    numberOfMatches++;
  }

  debug(`numberOfMatches: ${numberOfMatches}`);
  const tierIndex = prizeDistribution.matchCardinality - numberOfMatches;
  const pickAmount = calculatePrizeAmount(
    tierIndex,
    prizeDistribution.tiers[tierIndex],
    prizeDistribution.bitRangeSize,
    prizeDistribution.prize
  );
  return pickAmount;
}

export default calculatePickPrize;
