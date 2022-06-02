import { BigNumber } from 'ethers';

import computeWinningPicks from '../compute/computeWinningPicks';
import encodeWinningPicks from './encodeWinningPicks';
import { Claim, Draw, PrizeConfig } from '../types';

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
