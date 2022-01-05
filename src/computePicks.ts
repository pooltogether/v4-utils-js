import { BigNumber } from '@ethersproject/bignumber';

import computePick from './computePick';
import { Pick } from './types';

function computePicks(address: string, pickIndices: BigNumber[]): Pick[] {
  return pickIndices.map(index => computePick(address, index.toNumber()));
}

export default computePicks;
