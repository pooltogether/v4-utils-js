import { BigNumber } from '@ethersproject/bignumber';

import { computeDrawResults } from '../src';
import { DrawResults } from '../src/types';
import { formatTierPercentage } from '../src/utils';

describe('computeDrawResults', () => {
  it('should return a draw result with zero winning picks', () => {
    const DRAW_EXAMPLE = {
      winningRandomNumber: BigNumber.from(
        '21288413488180966377126236036201345909019919575750940621513526137694302720820'
      ),
      drawId: 1,
      timestamp: 1634410924,
      beaconPeriodStartedAt: 1634324400,
      beaconPeriodSeconds: 86400,
    };

    const PRIZE_DISTRIBUTION = {
      bitRangeSize: 4,
      matchCardinality: 10,
      tiers: [
        formatTierPercentage('0.5'),
        formatTierPercentage('0.4'),
        formatTierPercentage('0.2'),
        formatTierPercentage('0.2'),
        formatTierPercentage('0.01'),
        formatTierPercentage('0.01'),
        formatTierPercentage('0.01'),
        formatTierPercentage('0.01'),
        formatTierPercentage('0.01'),
        0,
        0,
        0,
      ],
      maxPicksPerUser: 0,
      expiryDuration: 0,
      numberOfPicks: BigNumber.from('10'),
      drawStartTimestampOffset: 0,
      prize: BigNumber.from('100'),
      drawEndTimestampOffset: 0,
    };

    const picks = [
      {
        index: 1,
        hash: '0x0',
      },
    ];

    let results: DrawResults = computeDrawResults(
      PRIZE_DISTRIBUTION,
      DRAW_EXAMPLE,
      picks
    );
    expect(results.drawId).toEqual(1);
    expect(results.totalValue).toEqual(BigNumber.from('0'));
  });
});
