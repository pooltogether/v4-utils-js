import { parseEther } from '@ethersproject/units';

import { calculateFractionOfPrize } from '../src';
import { formatTierPercentage } from '../src/utils';

describe('calculateFractionOfPrize', () => {
  it('can calculate the fraction for the prize distribution', async () => {
    const tiers = [
      formatTierPercentage('0.3'),
      formatTierPercentage('0.2'),
      formatTierPercentage('0.1'),
    ];
    const fraction = calculateFractionOfPrize(1, 4, tiers);
    const expectedFraction = parseEther('0.013333333333333333');
    expect(fraction).toStrictEqual(expectedFraction);
  });
});
