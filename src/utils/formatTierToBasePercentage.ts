import { parseUnits } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import { TIER_DENOMINATION } from '../constants';

export function formatTierToBasePercentage(distribution: string): BigNumber {
  return parseUnits(distribution, TIER_DENOMINATION);
}
