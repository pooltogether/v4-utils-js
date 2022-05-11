import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { Draw, PrizeTier } from '../src';
import { formatTierPercentage } from '../src/utils';
import winningPicks from '../src/winningPicks';

describe('winningPicks', () => {
    it('Computes winning picks', () => {
        console.debug('winningPicks - start');
        const userAddress = '0x0000000000000000000000000000000000000001';
        const normalizedBalances = [
            parseEther('0.1'),
            parseEther('0.2'),
            parseEther('0.3'),
        ];

        const ticketAddress = '0x0000000000000000000000000000000000000002';

        const draw: Draw = {
            drawId: 1,
            winningRandomNumber: BigNumber.from(
                '0x0000000000000000000000000000000000000000000000000000000000000001'
            ),
            timestamp: BigNumber.from(0),
            beaconPeriodSeconds: 0,
            beaconPeriodStartedAt: BigNumber.from(0),
        };

        const prizeTier: PrizeTier = {
            bitRangeSize: 4,
            matchCardinality: 10,
            prize: parseEther('100000'),
            maxPicksPerUser: 30,
            expiryDuration: 0,
            endTimestampOffset: 0,
            tiers: [
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
                formatTierPercentage('0.1'),
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
            drawId: draw.drawId,
            poolStakeTotal: BigNumber.from('1'),
        };

        const gaugeScaledAverage: BigNumber = BigNumber.from('1');

        const generatedPicks = winningPicks(
            userAddress,
            ticketAddress,
            normalizedBalances,
            [draw],
            [prizeTier],
            [gaugeScaledAverage]
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

        const expectedData = defaultAbiCoder.encode(
            ['uint256[][]'],
            [[winningPickIndices]]
        );

        expect(generatedPicks.encodedWinningPickIndices).toStrictEqual(
            expectedData
        );

        expect(generatedPicks.winningPickIndices).toStrictEqual([
            winningPickIndices,
        ]);
    });
});
