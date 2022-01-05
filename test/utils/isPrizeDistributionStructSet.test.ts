import { BigNumber } from '@ethersproject/bignumber';

import { PrizeDistribution } from '../../src/types';
import { isPrizeDistributionStructSet } from '../../src/utils';

describe('isPrizeDistributionStructSet', () => {
  it('should fail to validate PrizeDistribution', () => {
    const prizeDistribution: PrizeDistribution = {
      bitRangeSize: 0,
      matchCardinality: 0,
      maxPicksPerUser: 0,
      expiryDuration: 0,
      numberOfPicks: BigNumber.from(0),
      tiers: [],
      prize: BigNumber.from(0),
    };
    expect(isPrizeDistributionStructSet(prizeDistribution)).toBeFalsy();
  });

  it('should fail to validate PrizeDistribution with invalid bitRangeSize', () => {
    const prizeDistribution: PrizeDistribution = {
      bitRangeSize: 0,
      matchCardinality: 1,
      maxPicksPerUser: 0,
      expiryDuration: 0,
      numberOfPicks: BigNumber.from(0),
      tiers: [],
      prize: BigNumber.from(0),
    };
    expect(isPrizeDistributionStructSet(prizeDistribution)).toBeFalsy();
  });

  it('should fail to validate PrizeDistribution with invalid matchCardinality', () => {
    const prizeDistribution: PrizeDistribution = {
      bitRangeSize: 1,
      matchCardinality: 0,
      maxPicksPerUser: 0,
      expiryDuration: 0,
      numberOfPicks: BigNumber.from(0),
      tiers: [],
      prize: BigNumber.from(0),
    };
    expect(isPrizeDistributionStructSet(prizeDistribution)).toBeFalsy();
  });

  it('should succeed to validate PrizeDistribution', () => {
    const prizeDistribution: PrizeDistribution = {
      bitRangeSize: 1,
      matchCardinality: 1,
      maxPicksPerUser: 0,
      expiryDuration: 0,
      numberOfPicks: BigNumber.from(0),
      tiers: [],
      prize: BigNumber.from(0),
    };
    expect(isPrizeDistributionStructSet(prizeDistribution)).toBeTruthy();
  });
});
