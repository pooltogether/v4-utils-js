import { BigNumber } from 'ethers';

import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeDistribution } from './types';

function winningPicks(
    userAddress: string,
    normalizedBalances: BigNumber[],
    draws: Draw[],
    prizeDistributions: PrizeDistribution[]
): Claim {
    return encodeWinningPicks(
        userAddress,
        computeWinningPicks(
            userAddress,
            normalizedBalances,
            draws,
            prizeDistributions
        )
    );
}

export default winningPicks;
