import { BigNumber } from 'ethers';

import { Draw, DrawResults } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    userAddress: string,
    usersPickCounts: BigNumber[],
    draws: Draw[],
    prizeData: {
        bitRangeSize: number;
        matchCardinality: number;
        prize: BigNumber;
        tiers: number[];
    }[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeData[index].bitRangeSize,
            prizeData[index].matchCardinality,
            prizeData[index].prize,
            prizeData[index].tiers,
            userAddress,
            usersPickCounts[index],
            draw.drawId
        )
    );
}

export default computeWinningPicks;
