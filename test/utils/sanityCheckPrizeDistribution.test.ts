import { sanityCheckPrizeDistribution } from '../../src';

import {
  PRIZE_DISTRIBUTION_EXAMPLE_INVALID,
  PRIZE_DISTRIBUTION_EXAMPLE_VALID,
  PRIZE_DISTRIBUTION_EXAMPLE_ONE,
  TIERS_EXAMPLE_INVALID,
} from '../constants';

describe('sanityCheckPrizeDistribution', () => {
  it('should fail to sanity check a PrizeDistribution with invalid bitrange', () => {
    let pd = PRIZE_DISTRIBUTION_EXAMPLE_ONE;
    pd.bitRangeSize = 256;
    pd.matchCardinality = 2;
    const isLikelyGoodPrizeDistribution = sanityCheckPrizeDistribution(pd);
    expect(isLikelyGoodPrizeDistribution).toEqual(
      'DrawCalc/bitRangeSize-too-large'
    );
  });

  it('should fail to sanity check a PrizeDistribution with invalid tiers', () => {
    let pdt = {
      ...PRIZE_DISTRIBUTION_EXAMPLE_VALID,
      tiers: TIERS_EXAMPLE_INVALID,
    };
    const isLikelyGoodPrizeDistribution = sanityCheckPrizeDistribution(pdt);
    expect(isLikelyGoodPrizeDistribution).toEqual('DrawCalc/tiers-gt-100%');
  });

  it('should succeed to sanity check an a likely invalid PrizeDistribution', () => {
    const isLikelyGoodPrizeDistribution = sanityCheckPrizeDistribution(
      PRIZE_DISTRIBUTION_EXAMPLE_INVALID
    );
    expect(isLikelyGoodPrizeDistribution).toEqual('');
  });

  it('should succeed to sanity check an a valid PrizeDistribution', () => {
    const isLikelyGoodPrizeDistribution = sanityCheckPrizeDistribution(
      PRIZE_DISTRIBUTION_EXAMPLE_VALID
    );
    expect(isLikelyGoodPrizeDistribution).toEqual('');
  });
});
