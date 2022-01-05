import { BigNumber, utils } from 'ethers';
import { PrizeDistribution } from '../src/types';
import { calculateFractionOfPrize } from '../src';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';

describe('calculateFractionOfPrize()', () => {
  it('can calculate the fraction for the prize distribution', async () => {
    const exampleDrawSettings: PrizeDistribution = {
      tiers: [
        formatTierToBasePercentage('0.3'),
        formatTierToBasePercentage('0.2'),
        formatTierToBasePercentage('0.1'),
      ],
      numberOfPicks: BigNumber.from(10),
      matchCardinality: 3,
      bitRangeSize: 4,
      prize: BigNumber.from(utils.parseEther('100')),
      maxPicksPerUser: 100,
      expiryDuration: 0,
    };
    const fraction = calculateFractionOfPrize(1, exampleDrawSettings);
    const expectedFraction = utils.parseEther('0.0125');
    expect(fraction).toStrictEqual(expectedFraction);
  });
});
