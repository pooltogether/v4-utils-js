import { BigNumber } from '@ethersproject/bignumber';

import computePicksPrizes from '../compute/computePicksPrizes';
import { Pick, Draw, DrawResults } from '../types';
import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from '../utils';

function computeDrawResults(
    draw: Draw,
    picks: Pick[],
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): DrawResults {
    const pickPrizes = computePicksPrizes(
        picks,
        draw.winningRandomNumber,
        bitRangeSize,
        matchCardinality,
        prize,
        tiers
    );
    return updateDrawResultsWithWinningPicks(
        pickPrizes,
        createDrawResultsObject(draw.drawId),
        picks
    );
}

export default computeDrawResults;
