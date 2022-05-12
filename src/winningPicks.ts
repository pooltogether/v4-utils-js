import { BigNumber } from 'ethers';

import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeTier } from './types';

function winningPicks(
    userAddress: string,
    ticketAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeTiers: PrizeTier[]
): Claim {
    return encodeWinningPicks(
        userAddress,
        ticketAddress,
        computeWinningPicks(userAddress, usersPickCounts, draws, prizeTiers)
    );
}

export default winningPicks;
