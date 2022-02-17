import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import { computeUserWinningPicksForRandomNumber } from '../../src';
import { DrawResults, PrizeDistribution, Draw } from '../../src/types';
import { formatTierPercentage } from '../../src/utils';

describe('computeUserWinningPicksForRandomNumber', () => {
    it('should succeed to calculate empty draw results', () => {
        const prizeDistribution: PrizeDistribution = {
            bitRangeSize: 2,
            matchCardinality: 10,
            tiers: [formatTierPercentage('1'), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            maxPicksPerUser: 2,
            expiryDuration: 5184000,
            numberOfPicks: BigNumber.from(100),
            prize: BigNumber.from('1000'),
            startTimestampOffset: 86400,
            endTimestampOffset: 900,
        };

        const draw: Draw = {
            winningRandomNumber: BigNumber.from(
                '21288413488180966377126236036201345909019919575750940621513526137694302720820'
            ),
            drawId: 1,
            timestamp: 1634410924,
            beaconPeriodStartedAt: 1634324400,
            beaconPeriodSeconds: 86400,
        };

        const calculatedDrawResults: DrawResults = computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeDistribution.bitRangeSize,
            prizeDistribution.matchCardinality,
            prizeDistribution.numberOfPicks,
            prizeDistribution.prize,
            prizeDistribution.tiers,
            '0x000000000000000000000000000000000000dEaD',
            parseUnits('100', '18')
        );

        expect(calculatedDrawResults.drawId).toEqual(1);
        expect(calculatedDrawResults.prizes).toEqual([]);
        expect(calculatedDrawResults.totalValue).toEqual(BigNumber.from('0'));
    });
});
