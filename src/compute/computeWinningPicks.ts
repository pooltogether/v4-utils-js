import { BigNumber } from 'ethers';

import { Draw, DrawResults, PrizeTier } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    userAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeTiers: PrizeTier[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeTiers[index].bitRangeSize,
            prizeTiers[index].matchCardinality,
            prizeTiers[index].prize,
            prizeTiers[index].tiers,
            userAddress,
            usersPickCounts[index],
            draw.drawId
        )
    );
}

export default computeWinningPicks;
