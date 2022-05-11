import { BigNumber } from 'ethers';

import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeTier } from './types';

function winningPicks(
    userAddress: string,
    ticketAddress: string,
    normalizedBalances: BigNumber[],
    draws: Draw[],
    prizeTiers: PrizeTier[],
    gaugeScaledAverages: BigNumber[]
): Claim {
    return encodeWinningPicks(
        userAddress,
        ticketAddress,
        computeWinningPicks(
            userAddress,
            normalizedBalances,
            draws,
            prizeTiers,
            gaugeScaledAverages
        )
    );
}

export default winningPicks;
