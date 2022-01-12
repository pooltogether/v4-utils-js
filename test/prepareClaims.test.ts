// @ts-nocheck
import { defaultAbiCoder } from '@ethersproject/abi';
import { expect } from 'chai';
import { BigNumber, ethers, utils } from 'ethers';

import { prepareClaims, batchCalculateDrawResults } from '../src';
import {
    Claim,
    Draw,
    DrawResults,
    PrizeDistribution,
    User,
} from '../src/types';
import { formatTierPercentage } from '../src/utils';

describe('prepareClaims', () => {
    it('returns correct claim struct for user', async () => {
        const examplePrizeDistribution1: PrizeDistribution = {
            tiers: [
                formatTierPercentage('0.03'),
                formatTierPercentage('0.02'),
                formatTierPercentage('0.01'),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            numberOfPicks: BigNumber.from(10),
            matchCardinality: 3,
            bitRangeSize: 4,
            prize: BigNumber.from(utils.parseEther('100')),
            maxPicksPerUser: 1000,
        };

        const examplePrizeDistribution2: PrizeDistribution = {
            tiers: [
                formatTierPercentage('0.03'),
                formatTierPercentage('0.02'),
                formatTierPercentage('0.01'),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            numberOfPicks: BigNumber.from(10),
            matchCardinality: 3,
            bitRangeSize: 10, // set very high so matching unlikely
            prize: BigNumber.from(utils.parseEther('100')),
            maxPicksPerUser: 1000,
        };
        const drawIds = [2, 3];
        const winningPickIndices = BigNumber.from(1);

        const exampleDraw1: Draw = {
            drawId: drawIds[0],
            winningRandomNumber: BigNumber.from(
                '8781184742215173699638593792190316559257409652205547100981219837421219359728'
            ),
        };
        const exampleDraw2: Draw = {
            drawId: drawIds[1],
            winningRandomNumber: BigNumber.from(
                '8781184742215173699638593792190316559257409652205547100981219837421219359728'
            ),
        };

        const exampleUser: User = {
            address: '0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266',
            normalizedBalances: [
                ethers.utils.parseEther('0.2'),
                ethers.utils.parseEther('0.2'),
            ],
        };

        const drawResults: DrawResults[] = batchCalculateDrawResults(
            [examplePrizeDistribution1, examplePrizeDistribution2],
            [exampleDraw1, exampleDraw2],
            exampleUser
        );

        expect(drawResults.length).to.equal(2);
        const claimResult: Claim = prepareClaims(exampleUser, [drawResults[0]]);
        expect(claimResult.drawIds).to.deep.equal([drawIds[0]]);
        const expectedData = defaultAbiCoder.encode(
            ['uint256[][]'],
            [[[winningPickIndices]]]
        );
        expect(claimResult.encodedWinningPickIndices).to.deep.equal(
            expectedData
        );
        expect(claimResult.winningPickIndices).to.deep.equal([
            [winningPickIndices],
        ]);
    });
});
