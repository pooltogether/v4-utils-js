import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from 'ethers';

import { User, DrawResults, Claim } from './types';
import { sortByBigNumberAsc } from './utils';

function prepareClaims(user: User, drawResults: DrawResults[]): Claim {
  let claim: Claim = {
    userAddress: user.address,
    drawIds: [],
    encodedWinningPickIndices: '',
    winningPickIndices: [],
  };
  if (drawResults.length === 0) {
    return claim;
  }

  drawResults.forEach(drawResult => {
    if (drawResult.totalValue.gt(BigNumber.from(0))) {
      claim.drawIds.push(drawResult.drawId);
      // now add the pickIndices data
      let winningPicks: BigNumber[] = [];
      for (const prizeAwardable of drawResult.prizes) {
        winningPicks.push(prizeAwardable.pick);
      }
      claim.winningPickIndices.push(winningPicks);
    }
  });

  claim.winningPickIndices = claim.winningPickIndices.map(data =>
    data.sort(sortByBigNumberAsc)
  );
  claim.encodedWinningPickIndices = defaultAbiCoder.encode(
    ['uint256[][]'],
    [claim.winningPickIndices]
  );
  return claim;
}

export default prepareClaims;
