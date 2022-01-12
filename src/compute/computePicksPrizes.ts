import { BigNumber } from '@ethersproject/bignumber';

import computePickPrize from './computePickPrize';
import { PickPrize } from '../types';

function computePicksPrizes(
    picks: Array<any>,
    winningRandomNumber: BigNumber,
    bitRangeSize: number,
    matchCardinality: number,
    prize: BigNumber,
    tiers: Array<any>
): PickPrize[] {
    return picks.map(pick =>
        computePickPrize(
            pick.hash,
            winningRandomNumber,
            bitRangeSize,
            matchCardinality,
            prize,
            tiers
        )
    );
}

export default computePicksPrizes;
