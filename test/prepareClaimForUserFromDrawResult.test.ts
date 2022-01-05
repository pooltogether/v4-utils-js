import { BigNumber, ethers, utils } from 'ethers';
import { Claim, Draw, PrizeDistribution, User } from '../src/types';
import { batchCalculateDrawResults } from '../src';
import { prepareClaims } from '../src';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';

describe('prepareClaimForUserFromDrawResult()', () => {
  it('returns correct claim struct for user', async () => {
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

    const drawId = 2;
    const winningPickIndices = BigNumber.from(1);

    const exampleDraw: Draw = {
      drawId,
      winningRandomNumber: BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      timestamp: 0,
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };

    const exampleUser: User = {
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      normalizedBalances: [ethers.utils.parseEther('10')],
    };

    const drawResult = batchCalculateDrawResults(
      [exampleDrawSettings],
      [exampleDraw],
      exampleUser
    );

    const claimResult: Claim = prepareClaims(exampleUser, drawResult);
    expect(claimResult.drawIds).toStrictEqual([drawId]);
    expect(claimResult.data).toStrictEqual([[winningPickIndices]]);
  });
});
