import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import computePicksPrizes from './computePicksPrizes';
import computeUserPicks from './computeUserPicks';
import { DrawResults } from '../types';
import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from '../utils';

function computeUserWinningPicksForRandomNumber(
    randomNumber: BigNumberish,
    bitRangeSize: number,
    matchCardinality: number,
    numberOfPicks: BigNumberish,
    prize: BigNumberish,
    tiers: Array<any>,
    userAddress: string,
    userNormalizedBalance: BigNumberish
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
        createDrawResultsObject(1),
        userPicks
    );
}

export default computeUserWinningPicksForRandomNumber;
