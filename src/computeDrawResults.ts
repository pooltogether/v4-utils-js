import { BigNumber } from '@ethersproject/bignumber';

import calculatePickListPrizes from './calculatePickListPrizes';
import { Pick, Draw, DrawResults } from './types';
import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from './utils';

function computeDrawResults(
    draw: Draw,
    picks: Pick[],
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): DrawResults {
    const pickPrizes = calculatePickListPrizes(
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
