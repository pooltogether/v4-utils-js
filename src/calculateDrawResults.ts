import { formatEther } from '@ethersproject/units';

import computeDrawResults from './computeDrawResults';
import generatePicks from './generatePicks';
import { Draw, DrawResults, PrizeDistribution, User } from './types';
import { throwErrorInvalidPrizeDistribution } from './utils';

const debug = require('debug')('pt:v4-utils-js:calculateDrawResults');

function calculateDrawResults(
  prizeDistribution: PrizeDistribution,
  draw: Draw,
  user: User,
  drawIndex: number = 0
): DrawResults {
  throwErrorInvalidPrizeDistribution(prizeDistribution);

  // generate the picks for the user by hashing the address with the pickIndices
  user.picks = generatePicks(
    prizeDistribution,
    user.address,
    user.normalizedBalances[drawIndex]
  );
  debug(
    `user ${user.address} has ${user.picks.length} picks for drawId ${draw.drawId}. Computing..`
  );
  // run the draw calculator matching engine against these picks
  let results: DrawResults = computeDrawResults(
    prizeDistribution,
    draw,
    user.picks
  );

  debug(
    `user ${user.address} has ${formatEther(
      results.totalValue
    )} prizes for this draw..`
  );

  return results;
}

export default calculateDrawResults;
