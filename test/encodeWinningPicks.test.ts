import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computeWinningPicks, encodeWinningPicks } from '../src';
import { Claim } from '../src/types';
import { formatTierPercentage } from '../src/utils';

describe('encodeWinningPicks', () => {
    it('returns correct claim struct for user', async () => {
        const user = {
            address: '0x0000000000000000000000000000000000000001',
            normalizedBalances: [
                parseEther('0.1'),
                parseEther('0.2'),
                parseEther('0.3'),
            ],
        };

        const draw = {
            drawId: 1,
            winningRandomNumber: BigNumber.from(
                '0x0000000000000000000000000000000000000000000000000000000000000001'
            ),
        };

        const prizeDistribution = {
            bitRangeSize: 4,
            matchCardinality: 10,
            numberOfPicks: 1000,
            prize: parseEther('100000'),
            maxPicksPerUser: 30,
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
            user,
            [draw],
            [prizeDistribution]
        );
        const claimResult: Claim = encodeWinningPicks(user, [
            generatedPicks[0],
        ]);

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

        expect(claimResult.encodedWinningPickIndices).toStrictEqual(
            expectedData
        );
    });
});
