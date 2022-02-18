import { BigNumber } from '@ethersproject/bignumber';

import { DrawResults, PrizeAwardable } from '../types';
import { sortByPrizeAwardableDesc } from './sortByPrizeAwardable';

const debug = require('debug')('pt:v4-utils-js');

function filterResultsByValue(
    drawResults: DrawResults,
    maxPicksPerUser: number
): DrawResults {
    // if the user has more winning picks than max pick per user for the draw, we sort by value and remove the lowest value picks
    if (drawResults.prizes.length > maxPicksPerUser) {
        debug(
            `user has more claims (${drawResults.prizes.length}) than the max picks per user (${maxPicksPerUser}). Sorting..`
        );
        // sort by value
        const descendingSortedPrizes: PrizeAwardable[] = drawResults.prizes
            .filter(prizeAwardable => !prizeAwardable.amount.isZero())
            .sort(sortByPrizeAwardableDesc);

        // remove the lowest value picks up to the max picks per user
        const slicedDescendingSortedPrizes = descendingSortedPrizes.slice(
            0,
            maxPicksPerUser
        );

        // sum the sorted values
        const newTotalValue: BigNumber = slicedDescendingSortedPrizes.reduce(
            (accumulator, currentValue) => accumulator.add(currentValue.amount),
            BigNumber.from(0)
        );
        return {
            ...drawResults,
            totalValue: newTotalValue,
            prizes: slicedDescendingSortedPrizes,
        };
    }

    // if not greater than max picks per user, return the whole array
    return drawResults;
}

export default filterResultsByValue;
