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
    prize: BigNumberish,
    tiers: Array<any>,
    userAddress: string,
    usersPickCount: BigNumberish,
    drawId: number
): DrawResults {
    const _usersPickCount = BigNumber.from(usersPickCount);
    const _prize = BigNumber.from(prize);
    const _randomNumber = BigNumber.from(randomNumber);

    const userPicks = computeUserPicks(userAddress, _usersPickCount);

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
