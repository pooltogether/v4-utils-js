import { BigNumber, ethers, utils } from 'ethers';
import {
  PrizeDistribution,
} from '../src/types';
import { calculatePrizeForDistributionIndex } from '../src';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';

describe('calculatePrizeForPrizeDistributionIndex()', () => {
  it('can calculate the prize awardable for the prize distribution and prize', async () => {
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

    const prizeReceivable = calculatePrizeForDistributionIndex(
      1,
      exampleDrawSettings
    );
    const prize = utils.parseEther('1.25');
    expect(prizeReceivable).toStrictEqual(prize);
  });
});