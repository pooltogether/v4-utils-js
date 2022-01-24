import computeWinningPicks from '../compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeDistribution, User } from '../types';

/**
 * @description Computes a User's winning picks for multiple Draws and returns an encoded transaction.
 * @dev Historical blockchain state must be first fetched to run computations.
 * @param user Includes an account address and a list of normalized balances.
 * @param draws Draw(s) should be fetched from DrawHistory contract
 * @param prizeDistributions PrizeDistribution(s) should be fetched from PrizeTierHistory contract
 * @returns Computed winning picks and encoded transaction ready for broadcast to an EVM blockchain.
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
