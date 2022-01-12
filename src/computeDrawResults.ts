import { BigNumber} from '@ethersproject/bignumber';

import calculatePickPrize from './calculatePickPrize';
import {
    Pick,
    PrizeAwardable,
    Draw,
    DrawResults,
    PickPrize,
} from './types';

function computeDrawResults(
    draw: Draw,
    picks: Pick[],
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): DrawResults {
    // intialize the results object
    const results: DrawResults = {
        prizes: [],
        totalValue: BigNumber.from('0'),
        drawId: draw.drawId,
    };

    // run matching enegine for each pick
    for (let i = 0; i < picks.length; i++) {
        const pick = picks[i];
        const pickPrize: PickPrize | undefined = calculatePickPrize(
            pick.hash,
            draw.winningRandomNumber,
            bitRangeSize,
            matchCardinality,
            prize,
            tiers
        );

        // if there is a prize for that pick, add it to the results
        if (pickPrize.amount.gt(0)) {
            const prizeAwardable: PrizeAwardable = {
                ...pickPrize,
                pick: BigNumber.from(pick.index),
            };
            results.totalValue = results.totalValue.add(prizeAwardable.amount);
            results.prizes.push(prizeAwardable);
        }
    }
    return results;
}

export default computeDrawResults;
