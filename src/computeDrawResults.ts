import { ethers } from 'ethers';

import calculatePickPrize from './calculatePickPrize';
import {
  Pick,
  PrizeAwardable,
  PrizeDistribution,
  Draw,
  DrawResults,
  PickPrize,
} from './types';

function computeDrawResults(
  prizeDistribution: PrizeDistribution,
  draw: Draw,
  picks: Pick[]
): DrawResults {
  // intialize the results object
  const results: DrawResults = {
    prizes: [],
    totalValue: ethers.constants.Zero,
    drawId: draw.drawId,
  };

  // run matching enegine for each pick
  for (let i = 0; i < picks.length; i++) {
    const pick = picks[i];
    const pickPrize: PickPrize | undefined = calculatePickPrize(
      pick.hash,
      draw.winningRandomNumber,
      prizeDistribution
    );
    
    // if there is a prize for that pick, add it to the results
    if (pickPrize.amount.gt(0)) {
      const prizeAwardable: PrizeAwardable = {
        ...pickPrize,
        pick: ethers.BigNumber.from(pick.index),
      };
      results.totalValue = results.totalValue.add(prizeAwardable.amount);
      results.prizes.push(prizeAwardable);
    }
  }
  return results;
}

export default computeDrawResults;
