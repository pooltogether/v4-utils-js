import { BigNumber } from '@ethersproject/bignumber';

import calculatePickPrize from './calculatePickPrize';
import { PickPrize } from './types';

function calculatePickListPrizes(
    picks: Array<any>,
    winningRandomNumber: BigNumber,
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): PickPrize[] {
    return picks.map(pick =>
        calculatePickPrize(
            pick.hash,
            winningRandomNumber,
            bitRangeSize,
            matchCardinality,
            prize,
            tiers
        )
    );
}

export default calculatePickListPrizes;
