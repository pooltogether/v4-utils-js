import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computeUserWinningPicksForRandomNumber } from '../../src';
import { DrawResults, PrizeTier, Draw } from '../../src/types';
import { formatTierPercentage } from '../../src/utils';

describe('computeUserWinningPicksForRandomNumber', () => {
    it('should succeed to calculate empty draw results', () => {
        debugger;
        const draw: Draw = {
            winningRandomNumber: BigNumber.from(
                '21288413488180966377126236036201345909019919575750940621513526137694302720820'
            ),
            drawId: 2,
            timestamp: BigNumber.from(1634410924),
            beaconPeriodStartedAt: BigNumber.from(1634324400),
            beaconPeriodSeconds: 86400,
        };

        const prizeTier: PrizeTier = {
            bitRangeSize: 2,
            matchCardinality: 10,
            maxPicksPerUser: 2,
            drawId: draw.drawId,
            poolStakeTotal: BigNumber.from('1'),
            tiers: [formatTierPercentage('1'), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            expiryDuration: 5184000,
            prize: parseEther('1000'),
            endTimestampOffset: 900,
        };

        const gaugeScaledAverage: BigNumber = BigNumber.from('1');

        const calculatedDrawResults: DrawResults = computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeTier.bitRangeSize,
            prizeTier.matchCardinality,
            prizeTier.prize,
            prizeTier.tiers,
            '0x000000000000000000000000000000000000dEaD',
            parseEther('0.1'),
            draw.drawId,
            prizeTier.poolStakeTotal,
            gaugeScaledAverage
        );

        expect(calculatedDrawResults.drawId).toEqual(2);
        expect(calculatedDrawResults.prizes).toEqual([]);
        expect(calculatedDrawResults.totalValue).toEqual(BigNumber.from('0'));
    });
});
