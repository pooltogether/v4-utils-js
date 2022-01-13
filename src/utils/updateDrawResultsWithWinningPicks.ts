import { BigNumber } from '@ethersproject/bignumber';

import { DrawResults, PickPrize, PrizeAwardable } from '../types';

function updateDrawResultsWithWinningPicks(
    pickPrizes: PickPrize[],
    results: DrawResults,
    picks: Array<any>
): DrawResults {
    const _result = results;
    pickPrizes.forEach((pickPrize, index) => {
        const pick = picks[index];
        if (pickPrize.amount.eq(0)) return;
        const prizeAwardable: PrizeAwardable = {
            ...pickPrize,
            pick: BigNumber.from(pick.index),
        };
        _result.totalValue = _result.totalValue.add(prizeAwardable.amount);
        _result.prizes.push(prizeAwardable);
    });
    return _result;
}

export default updateDrawResultsWithWinningPicks;
