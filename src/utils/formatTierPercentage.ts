import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import { TIER_DENOMINATION } from '../constants';

export const formatTierPercentage = (distribution: string): BigNumber => {
  return parseUnits(distribution, TIER_DENOMINATION);
};

export default formatTierPercentage;
