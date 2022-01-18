import { BigNumber } from '@ethersproject/bignumber';

import { DrawResults } from '../types';

function createDrawResultsObject(drawId: number): DrawResults {
    return {
        prizes: [],
        totalValue: BigNumber.from('0'),
        drawId: drawId,
    };
}

export default createDrawResultsObject;
