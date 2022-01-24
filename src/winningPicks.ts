import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeDistribution, User } from './types';

/**
 * @description Computes a User's winning picks for multiple Draws and returns an encoded transaction.
 * @param user 
 * @param draws 
 * @param prizeDistributions 
 * @returns Claim
 */
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
