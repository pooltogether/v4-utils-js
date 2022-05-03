import { BigNumber } from 'ethers';

import { Draw, DrawResults, PrizeTier } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    userAddress: string,
    normalizedBalances: BigNumber[],
    draws: Draw[],
    prizeTiers: PrizeTier[],
    gaugeScaledAverages: BigNumber[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeTiers[index].bitRangeSize,
            prizeTiers[index].matchCardinality,
            prizeTiers[index].prize,
            prizeTiers[index].tiers,
            userAddress,
            normalizedBalances[index],
            draw.drawId,
            prizeTiers[index].poolStakeTotal,
            gaugeScaledAverages[index]
        )
    );
}

export default computeWinningPicks;
