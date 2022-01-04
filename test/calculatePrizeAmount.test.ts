import { BigNumber, utils } from 'ethers';
import {
  PrizeDistribution,
} from '../src/types';
import { calculatePrizeAmount } from '../src';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';
describe('calculatePrizeAmount()', () => {
  it('Can calculate the prize given the draw settings and number of matches', async () => {
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

    const result = calculatePrizeAmount(exampleDrawSettings, 2);
    console.log(result?.amount.toString(), 'result')
    const prizeReceived = utils.parseEther('1.33');
    expect(result?.amount).toStrictEqual(prizeReceived);
    expect(result?.distributionIndex).toStrictEqual(1);
  });
  
  it('Can calculate the prize given the draw settings and number of matches', async () => {
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

    const result = calculatePrizeAmount(exampleDrawSettings, 3);
    const prizeReceived = utils.parseEther('1.25');
    expect(result!.amount).toStrictEqual(prizeReceived);
  });
});