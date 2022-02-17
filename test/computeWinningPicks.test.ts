import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computeWinningPicks, Draw, PrizeDistribution } from '../src';
import { formatTierPercentage } from '../src/utils';

describe('computeWinningPicks', () => {
    it('returns correct claim struct for user', async () => {
        const userAddress = '0x0000000000000000000000000000000000000001';
        const normalizedBalances = [
            parseEther('0.1'),
            parseEther('0.2'),
            parseEther('0.3'),
        ];

        const draw: Draw = {
            drawId: 1,
            winningRandomNumber: BigNumber.from(
                '0x0000000000000000000000000000000000000000000000000000000000000001'
            ),
            timestamp: BigNumber.from(0),
            beaconPeriodSeconds: 0,
            beaconPeriodStartedAt: BigNumber.from(0),
        };

        const prizeDistribution: PrizeDistribution = {
            bitRangeSize: 4,
            matchCardinality: 10,
            numberOfPicks: BigNumber.from(1000),
            prize: parseEther('100000'),
            maxPicksPerUser: 30,
            expiryDuration: 0,
            startTimestampOffset: 0,
            endTimestampOffset: 0,
            tiers: [
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                0,
                0,
                0,
                0,
                0,
                0,
            ],
        };

        const generatedPicks = computeWinningPicks(
            userAddress,
            normalizedBalances,
            [draw],
            [prizeDistribution]
        );

        const winningPickIndices = [
            BigNumber.from({ _hex: '0x01', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x0a', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x1d', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x2a', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x40', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x48', _isBigNumber: true }),
            BigNumber.from({ _hex: '0x60', _isBigNumber: true }),
        ];

        expect(generatedPicks[0].prizes.length).toStrictEqual(
            winningPickIndices.length
        );
    });
});
