import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import { TIER_DENOMINATION } from '../constants';

export const formatTierPercentage = (tier: string): BigNumber => {
  return parseUnits(tier, TIER_DENOMINATION);
};

export default formatTierPercentage;
