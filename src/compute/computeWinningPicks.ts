import { BigNumber } from 'ethers';

import { Draw, DrawResults, PrizeConfig } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    userAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeConfigs: PrizeConfig[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeConfigs[index].bitRangeSize,
            prizeConfigs[index].matchCardinality,
            prizeConfigs[index].prize,
            prizeConfigs[index].tiers,
            userAddress,
            usersPickCounts[index],
            draw.drawId
        )
    );
}

export default computeWinningPicks;
