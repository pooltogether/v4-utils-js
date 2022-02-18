import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { DrawResults } from '../types';
import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from '../utils';
import computePicksPrizes from './computePicksPrizes';
import computeUserPicks from './computeUserPicks';

function computeUserWinningPicksForRandomNumber(
    randomNumber: BigNumberish,
    bitRangeSize: number,
    matchCardinality: number,
    numberOfPicks: BigNumberish,
    prize: BigNumberish,
    tiers: Array<any>,
    userAddress: string,
    userNormalizedBalance: BigNumberish,
    drawId: number
): DrawResults {
    const _userNormalizedBalance = BigNumber.from(userNormalizedBalance);
    const _prize = BigNumber.from(prize);
    const _randomNumber = BigNumber.from(randomNumber);

    const userPicks = computeUserPicks(
        numberOfPicks,
        userAddress,
        _userNormalizedBalance
    );

    const pickPrizes = computePicksPrizes(
        userPicks,
        _randomNumber,
        bitRangeSize,
        matchCardinality,
        _prize,
        tiers
    );

    return updateDrawResultsWithWinningPicks(
        pickPrizes,
        createDrawResultsObject(drawId),
        userPicks
    );
}

export default computeUserWinningPicksForRandomNumber;
