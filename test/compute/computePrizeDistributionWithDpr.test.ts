import { BigNumber } from '@ethersproject/bignumber';

import { computePrizeDistributionWithDpr } from '../../src';
import { PrizeTierV2 } from '../../src/types';

const debug = require('debug')('v4-utils-js:test');

describe('computePrizeDistributionWithDpr', () => {
    it('should succeed to calculate a valid PrizeDistribution', async () => {
        const draw = {
            winningRandomNumber: BigNumber.from(
                '21288413488180966377126236036201345909019919575750940621513526137694302720820'
            ),
            drawId: 1,
            timestamp: BigNumber.from(1634410924),
            beaconPeriodStartedAt: BigNumber.from(1634324400),
            beaconPeriodSeconds: 86400,
        };
        const prizeTier: PrizeTierV2 = {
            bitRangeSize: 2,
            maxPicksPerUser: 2,
            expiryDuration: 86400,
            prize: BigNumber.from('100000000000000'),
            tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            endTimestampOffset: 900,
            drawId: 100,
            dpr: 1e9,
        };

        const expectation = {
            bitRangeSize: 2,
            matchCardinality: 8,
            tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            maxPicksPerUser: 2,
            expiryDuration: 86400,
            numberOfPicks: BigNumber.from({
                _hex: '0x0112e0',
                _isBigNumber: true,
            }),
            startTimestampOffset: 86400,
            prize: BigNumber.from({
                _hex: '0x5af3107a4000',
                _isBigNumber: true,
            }),
            endTimestampOffset: 900,
        };

        const results = await computePrizeDistributionWithDpr(
            draw,
            prizeTier,
            BigNumber.from(100000),
            1,
            0
        );

        debug(
            'computePrizeDistributionFromTicketAverageTotalSupplies',
            results
        );
        expect(results).toEqual(expectation);
    });
});
