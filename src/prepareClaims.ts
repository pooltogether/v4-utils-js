import { BigNumber } from '@ethersproject/bignumber';
import { User, DrawResults, Claim } from './types';

export function prepareClaims(user: User, drawResults: DrawResults[]): Claim {
  let claim: Claim = {
    userAddress: user.address,
    drawIds: [],
    data: [],
  };
  if (drawResults.length === 0) {
    return claim;
  }

  // for each draw run the runDrawCalculatorForSingleDraw, if there is a winner add to result
  drawResults.forEach(drawResult => {
    if (drawResult.totalValue.gt(BigNumber.from(0))) {
      claim.drawIds.push(drawResult.drawId);
      // now add the pickIndices data
      let winningPicks: BigNumber[] = [];
      for (const prizeAwardable of drawResult.prizes) {
        winningPicks.push(prizeAwardable.pick);
      }
      claim.data.push(winningPicks);
    }
  });
  return claim;
}
