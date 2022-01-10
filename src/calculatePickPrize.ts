import { BigNumber, utils } from 'ethers';

import calculatePrizeAmount from './calculatePrizeAmount';
import { PrizeDistribution, PickPrize } from './types';
import { findBitMatchesAtIndex } from './utils/findBitMatchesAtIndex';

const debug = require('debug')('pt:v4-utils-js:calculatePickPrize');

// returns the fraction of the total prize that the user will win for this pick
function calculatePickPrize(
  randomNumberThisPick: string,
  winningRandomNumber: BigNumber,
  prizeDistribution: PrizeDistribution
): PickPrize | undefined {
  let numberOfMatches = 0;
  let bigRando = BigNumber.from(randomNumberThisPick);

  for (
    let matchIndex = 0;
    matchIndex < prizeDistribution.matchCardinality;
    matchIndex++
  ) {
    debug('winningRandomNumber: ', winningRandomNumber.toString());
    debug('randomNumberThisPick: ', bigRando.toString());
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
  debug(`\n DrawCalculator:: Found ${numberOfMatches} matches..`);

  const pickAmount = calculatePrizeAmount(prizeDistribution, numberOfMatches);

  if (pickAmount) {
    debug(`user is receiving a prize! ${utils.formatEther(pickAmount.amount)}`);
    return pickAmount;
  }
  // else there is no prize
  return undefined;
}

export default calculatePickPrize;
