import { BigNumber } from 'ethers';
import { Draw, DrawResults, PrizeDistribution } from '../types';
import computeUserWinningPicksForRandomNumber from './computeUserWinningPicksForRandomNumber';

function computeWinningPicks(
    userAddress: string,
    normalizedBalances: BigNumber[],
    draws: Draw[],
    prizeDistributions: PrizeDistribution[]
): DrawResults[] {
    return draws.map((draw, index) =>
        computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeDistributions[index].bitRangeSize,
            prizeDistributions[index].matchCardinality,
            prizeDistributions[index].numberOfPicks,
            prizeDistributions[index].prize,
            prizeDistributions[index].tiers,
            userAddress,
            normalizedBalances[index]
        )
    );
}

export default computeWinningPicks;
