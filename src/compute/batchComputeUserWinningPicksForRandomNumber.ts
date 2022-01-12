import { Draw, DrawResults, PrizeDistribution, User } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

const debug = require('debug')(
    'pt:v4-utils-js:batchcomputeUserWinningPicksForRandomNumber'
);

function batchComputeUserWinningPicksForRandomNumber(
    prizeDistribution: PrizeDistribution[],
    draws: Draw[],
    user: User
): DrawResults[] {
    debug('arguments: ', { prizeDistribution, draws, user });
    const results: DrawResults[] = [];
    draws.forEach((draw, index) => {
        const drawResults = computeUserWinningPicksForRandomNumber(
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

export default batchComputeUserWinningPicksForRandomNumber;
