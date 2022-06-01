import { BigNumber } from 'ethers';

import computeWinningPicks from './compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeConfig } from './types';

function winningPicks(
    userAddress: string,
    ticketAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeConfigs: PrizeConfig[]
): Claim {
    return encodeWinningPicks(
        userAddress,
        ticketAddress,
        computeWinningPicks(userAddress, usersPickCounts, draws, prizeConfigs)
    );
}

export default winningPicks;
