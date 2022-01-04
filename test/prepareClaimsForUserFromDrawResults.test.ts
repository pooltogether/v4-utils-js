import { BigNumber, ethers, utils } from 'ethers';
import {
  Claim,
  Draw,
  DrawResults,
  PrizeDistribution,
  User,
} from '../src/types';
import { batchCalculateDrawResults } from '../src';
import { prepareClaims } from '../src';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';

describe('prepareClaimsForUserFromDrawResults()', () => {
  it('returns correct claim struct for user', async () => {
    const exampleDrawSettings1: PrizeDistribution = {
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
    const exampleDrawSettings2: PrizeDistribution = {
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
    const drawIds = [2, 3];
    const winningPickIndices = BigNumber.from(1);

    const exampleDraw1: Draw = {
      drawId: drawIds[0],
      winningRandomNumber: BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      timestamp: 0,
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };

    const exampleDraw2: Draw = {
      drawId: drawIds[1],
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

    const drawResults: DrawResults[] = batchCalculateDrawResults(
      [exampleDrawSettings1, exampleDrawSettings2],
      [exampleDraw1, exampleDraw2],
      exampleUser
    );

    // Only Draw ID 2 should be returned with a totalValue greater than 0
    expect(drawResults[0].totalValue.toString()).not.toEqual('0');
    expect(drawResults[1].totalValue.toString()).toEqual('0');

    const claimResult: Claim = prepareClaims(exampleUser, drawResults);

    expect(claimResult.drawIds).toStrictEqual([drawIds[0]]);
    expect(claimResult.data).toStrictEqual([[winningPickIndices]]);
  });
});
