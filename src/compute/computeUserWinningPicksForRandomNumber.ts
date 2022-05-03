import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { DrawResults } from '../types';
import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from '../utils';
import computePicksPrizes from './computePicksPrizes';
import computeTotalPicks from './computeTotalPicks';
import computeUserPicks from './computeUserPicks';

function computeUserWinningPicksForRandomNumber(
    randomNumber: BigNumberish,
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumberish,
    tiers: Array<any>,
    userAddress: string,
    userNormalizedBalance: BigNumberish,
    drawId: number,
    poolStakeTotal: BigNumber,
    gaugeScaledAverage: BigNumber
): DrawResults {
    const _userNormalizedBalance = BigNumber.from(userNormalizedBalance);
    const _prize = BigNumber.from(prize);
    const _randomNumber = BigNumber.from(randomNumber);

    console.log('computeUserWinningPicksForRandomNumber pre-computeTotalPicks');
    const totalNumberOfPicks = computeTotalPicks(
        bitRangeSize,
        matchCardinality,
        poolStakeTotal,
        gaugeScaledAverage
    );
    debugger;
    console.log(
        'computeUserWinningPicksForRandomNumber post-computeTotalPicks',
        totalNumberOfPicks.toString()
    );

    console.log('pre computeUserPicks');
    const userPicks = computeUserPicks(
        totalNumberOfPicks,
        userAddress,
        _userNormalizedBalance
    );
    console.log('post computeUserPicks');

    console.log('pre computePicksPrizes');
    const pickPrizes = computePicksPrizes(
        userPicks,
        _randomNumber,
        bitRangeSize,
        matchCardinality,
        _prize,
        tiers
    );
    console.log('post computePicksPrizes');

    return updateDrawResultsWithWinningPicks(
        pickPrizes,
        createDrawResultsObject(drawId),
        userPicks
    );
}

export default computeUserWinningPicksForRandomNumber;
