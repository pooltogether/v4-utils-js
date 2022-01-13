import { BigNumber } from '@ethersproject/bignumber';

import { Pick } from '../types';
import calculatePick from './calculatePick';

function calculatePicks(address: string, picks: BigNumber[]): Pick[] {
    return picks.map(pick => calculatePick(address, pick.toNumber()));
}

export default calculatePicks;
