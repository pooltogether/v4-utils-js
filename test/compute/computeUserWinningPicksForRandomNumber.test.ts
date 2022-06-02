import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computeUserWinningPicksForRandomNumber } from '../../src';
import { DrawResults, PrizeConfig, Draw } from '../../src/types';
import { formatTierPercentage } from '../../src/utils';

describe('computeUserWinningPicksForRandomNumber', () => {
    it('should succeed to calculate empty draw results', () => {
        const draw: Draw = {
            winningRandomNumber: BigNumber.from(
                '21288413488180966377126236036201345909019919575750940621513526137694302720820'
            ),
            drawId: 2,
            timestamp: BigNumber.from(1634410924),
            beaconPeriodStartedAt: BigNumber.from(1634324400),
            beaconPeriodSeconds: 86400,
        };

        const prizeConfig: PrizeConfig = {
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

        const calculatedDrawResults: DrawResults = computeUserWinningPicksForRandomNumber(
            draw.winningRandomNumber,
            prizeConfig.bitRangeSize,
            prizeConfig.matchCardinality,
            prizeConfig.prize,
            prizeConfig.tiers,
            '0x000000000000000000000000000000000000dEaD',
            '100',
            draw.drawId
        );

        expect(calculatedDrawResults.drawId).toEqual(2);
        expect(calculatedDrawResults.prizes).toEqual([]);
        expect(calculatedDrawResults.totalValue).toEqual(BigNumber.from('0'));
    });
});
