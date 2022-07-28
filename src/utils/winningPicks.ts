import { BigNumber } from 'ethers';

import computeWinningPicks from '../compute/computeWinningPicks';
import { Claim, Draw, PrizeConfig } from '../types';
import encodeWinningPicks from './encodeWinningPicks';

function winningPicks(
    userAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeConfigs: PrizeConfig[],
    ticketAddress?: string
): Claim {
    return encodeWinningPicks(
        userAddress,
        computeWinningPicks(userAddress, usersPickCounts, draws, prizeConfigs),
        ticketAddress
    );
}

export default winningPicks;
