import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeDistribution, User } from './types';

function winningPicks(
    user: User,
    draws: Draw[],
    prizeDistributions: PrizeDistribution[]
): Claim {
    return encodeWinningPicks(
        user,
        computeWinningPicks(user, draws, prizeDistributions)
    );
}

export default winningPicks;
