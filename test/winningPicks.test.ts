import { defaultAbiCoder } from '@ethersproject/abi';
import { parseEther } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import { formatTierPercentage } from '../src/utils';
import winningPicks from '../src/winningPicks';

describe('winningPicks', () => {
    it('', () => {
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
        };

        const generatedPicks = winningPicks(user, [draw], [prizeDistribution]);

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
