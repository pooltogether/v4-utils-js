import { formatEther } from '@ethersproject/units';

import computeDrawResults from './computeDrawResults';
import computeUserPicks from '../compute/computeUserPicks';
import { Draw, DrawResults, PrizeDistribution, User } from '../types';
import { throwErrorInvalidPrizeDistribution } from '../utils';

const debug = require('debug')('pt:v4-utils-js:computeUserWinningPicksForRandomNumber');

function computeUserWinningPicksForRandomNumber(
    prizeDistribution: PrizeDistribution,
    draw: Draw,
    user: User,
    drawIndex: number = 0
): DrawResults {
    throwErrorInvalidPrizeDistribution(prizeDistribution);

    // generate the picks for the user by hashing the address with the pickIndices
    user.picks = computeUserPicks(
        prizeDistribution.numberOfPicks,
        user.address,
        user.normalizedBalances[drawIndex]
    );
    debug(
        `user ${user.address} has ${user.picks.length} picks for drawId ${draw.drawId}. Computing..`
    );
    // run the draw calculator matching engine against these picks
    let results: DrawResults = computeDrawResults(
        draw,
        user.picks,
        prizeDistribution.bitRangeSize,
        prizeDistribution.matchCardinality,
        prizeDistribution.prize,
        prizeDistribution.tiers
    );

    debug(
        `user ${user.address} has ${formatEther(
            results.totalValue
        )} prizes for this draw..`
    );

    return results;
}

export default computeUserWinningPicksForRandomNumber;
