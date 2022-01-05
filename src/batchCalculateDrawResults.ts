import calculateDrawResults from './calculateDrawResults';
import { Draw, DrawResults, PrizeDistribution, User } from './types';

const debug = require('debug')('pt:v4-utils-js:batchCalculateDrawResults');

function batchCalculateDrawResults(
  prizeDistribution: PrizeDistribution[],
  draws: Draw[],
  user: User
): DrawResults[] {
  debug('arguments: ', { prizeDistribution, draws, user });
  const results: DrawResults[] = [];
  draws.forEach((draw, index) => {
    const drawResults = calculateDrawResults(
      prizeDistribution[index],
      draw,
      user,
      index
    );
    results.push(drawResults);
  });
  debug('results: ', { results });
  return results;
}

export default batchCalculateDrawResults;
