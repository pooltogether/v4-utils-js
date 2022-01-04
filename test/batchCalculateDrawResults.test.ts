import { BigNumber, ethers, utils } from 'ethers';
import {
  Claim,
  Draw,
  DrawResults,
  PrizeDistribution,
  User,
} from '../src/types';
import { batchCalculateDrawResults } from '../src/batchCalculateDrawResults';
import { prepareClaims } from '../src/prepareClaims';
import { calculateFractionOfPrize } from '../src/calculateFractionOfPrize';
import { calculatePrizeAmount } from '../src/calculatePrizeAmount';
import { findBitMatchesAtIndex } from '../src/utils/findBitMatchesAtIndex';
import { calculatePrizeForDistributionIndex } from '../src/calculatePrizeForDistributionIndex';
import { formatTierToBasePercentage } from '../src/utils/formatTierToBasePercentage';
const debug = require('debug')('v4-js-core:test');

describe.only('batchCalculateDrawResults()', () => {
  it('Single DrawCalculator run 1 matches', async () => {
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

    const exampleDraw: Draw = {
      drawId: 1,
      winningRandomNumber: BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      timestamp: 1,
      beaconPeriodStartedAt: 1,
      beaconPeriodSeconds: 1,
    };

    const exampleUser: User = {
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      normalizedBalances: [ethers.utils.parseEther('0.2')],
    };

    const results = batchCalculateDrawResults(
      [exampleDrawSettings],
      [exampleDraw],
      exampleUser
    );
    const expectedPrize = BigNumber.from('0x94a62bef705e30'); // const prizeReceived = utils.parseEther("0.041666666666666667")
    expect(results[0].totalValue).toStrictEqual(expectedPrize);
  });

  it('all matches', async () => {
    const exampleUser: User = {
      address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
      normalizedBalances: [ethers.utils.parseEther('0.2')],
    };

    const winningNumber = utils.solidityKeccak256(
      ['address'],
      [exampleUser.address]
    );
    const winningRandomNumber = utils.solidityKeccak256(
      ['bytes32', 'uint256'],
      [winningNumber, 1]
    );

    debug('winning number ', winningRandomNumber);
    const exampleDrawSettings: PrizeDistribution = {
      tiers: [
        formatTierToBasePercentage('0.4'),
        formatTierToBasePercentage('0.2'),
        formatTierToBasePercentage('0.1'),
        formatTierToBasePercentage('0.1'),
      ],
      numberOfPicks: BigNumber.from(10),
      matchCardinality: 4,
      bitRangeSize: 4,
      prize: BigNumber.from(utils.parseEther('100')),
      maxPicksPerUser: 100,
      expiryDuration: 0,
    };

    const exampleDraw: Draw = {
      drawId: 1,
      winningRandomNumber: BigNumber.from(winningRandomNumber),
      timestamp: 0,
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };

    const results = batchCalculateDrawResults(
      [exampleDrawSettings],
      [exampleDraw],
      exampleUser
    );
    const prizeReceived = utils.parseEther('40');
    expect(results[0].totalValue).toStrictEqual(prizeReceived);
  });
});

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
    const prizeReceived = utils.parseEther('1.25');
    expect(result!.amount).toStrictEqual(prizeReceived);
    expect(result!.distributionIndex).toStrictEqual(1);
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

describe('findBitMatchesAtIndex()', () => {
  it('Can findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(61676),
      BigNumber.from(61612),
      1,
      8
    );
    expect(result).toBeTruthy();
  });

  it('Can NOT findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(61676),
      BigNumber.from(61612),
      1,
      6
    );
    expect(result).toBeFalsy();
  });

  it('Can findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(
        '24703804328475188150699190457572086651745971796997325887553663750514688469872'
      ),
      BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      1,
      8
    );
    expect(result).toBeTruthy();
  });

  it('Can NOT findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(
        '24703804328475188150699190457572086651745971796997325887553663750514688469872'
      ),
      BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      2,
      8
    );
    expect(result).toBeFalsy();
  });
});

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

    expect(drawResults.length).toEqual(1); // only wins exampleDraw1

    const claimResult: Claim = prepareClaims(exampleUser, drawResults);

    expect(claimResult.drawIds).toStrictEqual([drawIds[0]]);
    expect(claimResult.data).toStrictEqual([[winningPickIndices]]);
  });
});
