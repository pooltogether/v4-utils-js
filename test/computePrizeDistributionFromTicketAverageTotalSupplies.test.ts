import { BigNumber } from '@ethersproject/bignumber';

import { computePrizeDistributionFromTicketAverageTotalSupplies } from '../src';
import { PrizeTier } from '../src/types';

const debug = require('debug')('v4-js-core:test');

describe('computePrizeDistributionFromTicketAverageTotalSupplies', () => {
  it('should succeed to calculate a valid PrizeDistribution', async () => {
    const draw = {
      winningRandomNumber: BigNumber.from(
        '21288413488180966377126236036201345909019919575750940621513526137694302720820'
      ),
      drawId: 1,
      timestamp: 1634410924,
      beaconPeriodStartedAt: 1634324400,
      beaconPeriodSeconds: 86400,
    };

    const prizeTier: PrizeTier = {
      bitRangeSize: 2,
      maxPicksPerUser: 2,
      expiryDuration: 86400,
      prize: BigNumber.from('100000000000000'),
      tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };

    const expectation = {
      bitRangeSize: 2,
      matchCardinality: 2,
      tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      maxPicksPerUser: 2,
      expiryDuration: 86400,
      numberOfPicks: BigNumber.from({ _hex: '0x03', _isBigNumber: true }),
      drawStartTimestampOffset: 86400,
      prize: BigNumber.from({ _hex: '0x5af3107a4000', _isBigNumber: true }),
      drawEndTimestampOffset: 0,
    };

    const results = await computePrizeDistributionFromTicketAverageTotalSupplies(
      draw,
      prizeTier,
      BigNumber.from(100000),
      [BigNumber.from(200000), BigNumber.from(200000)]
    );

    debug('computePrizeDistributionFromTicketAverageTotalSupplies', results);
    expect(results).toEqual(expectation);
  });
});
