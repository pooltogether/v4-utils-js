import { BigNumberish } from '@ethersproject/bignumber';

import { Pick } from '../types';
import calculatePick from './calculatePick';

/**
 * Calculates the picks for a user at the give indicies
 * @param address
 * @param pickIndices
 * @returns
 */
function calculatePicks(address: string, pickIndices: BigNumberish[]): Pick[] {
    return pickIndices.map(pickIndex => calculatePick(address, pickIndex));
}

export default calculatePicks;
