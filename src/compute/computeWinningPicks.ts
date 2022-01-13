import { Draw, DrawResults, PrizeDistribution, User } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    user: User,
    draws: Draw[],
    prizeDistributions: PrizeDistribution[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeDistributions[index].bitRangeSize,
            prizeDistributions[index].matchCardinality,
            prizeDistributions[index].numberOfPicks,
            prizeDistributions[index].prize,
            prizeDistributions[index].tiers,
            user.address,
            user.normalizedBalances[index]
        )
    );
}

export default computeWinningPicks;
