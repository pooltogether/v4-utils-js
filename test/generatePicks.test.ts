import { parseEther, parseUnits } from '@ethersproject/units';
import { BigNumber } from '@ethersproject/bignumber';

import { generatePicks } from '../src';
import { formatTierPercentage } from '../src/utils';
import { ADDRESS_DEAD } from './constants';

describe('generatePicks', () => {
  it('should have 10% of total picks (100/1000) ', () => {
    const PRIZE_DISTRIBUTION_EXAMPLE_ONE = {
      bitRangeSize: 2,
      matchCardinality: 10,
      tiers: [
        formatTierPercentage('0.25').toNumber(),
        formatTierPercentage('0.05').toNumber(),
        formatTierPercentage('0.5').toNumber(),
        formatTierPercentage('0.2').toNumber(),
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      maxPicksPerUser: 2,
      expiryDuration: 5184000,
      numberOfPicks: BigNumber.from('1000'),
      prize: parseUnits('5000', 18),
      drawdrawStartTimestampOffset: 86400,
      drawEndTimestampOffset: 900,
    };
    const normalizedBalance = parseEther('0.1');
    const generatedPicks = generatePicks(
      PRIZE_DISTRIBUTION_EXAMPLE_ONE,
      ADDRESS_DEAD,
      normalizedBalance
    );
    expect(generatedPicks.length).toEqual(100);
  });
});
