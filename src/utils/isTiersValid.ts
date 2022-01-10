import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { TIER_DENOMINATION_BASE_MAX } from '../constants';
import { sumBigNumbers } from './sumBigNumbers';

function isTiersValid(tiers: Array<BigNumberish>): boolean {
  const total = sumBigNumbers(tiers);
  if (BigNumber.from(total).gt(TIER_DENOMINATION_BASE_MAX)) {
    return false;
  }
  return true;
}

export default isTiersValid;
