import { isTiersValid, formatTierPercentage } from '../../src/utils';

describe('isTiersValid', () => {
  it('should return return false when total exceeds 100%', () => {
    const tiers = [
      formatTierPercentage('0.5'),
      formatTierPercentage('0.4'),
      formatTierPercentage('0.2'),
      formatTierPercentage('0.2'),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ];
    expect(isTiersValid(tiers)).toEqual(false);
  });

  it('should return return true when total equals 100%', () => {
    const tiers = [
      formatTierPercentage('0.5'),
      formatTierPercentage('0.3'),
      formatTierPercentage('0.1'),
      formatTierPercentage('0.1'),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ];
    expect(isTiersValid(tiers)).toEqual(true);
  });

  it('should return return true when total less than 100%', () => {
    const tiers = [
      formatTierPercentage('0.5'),
      formatTierPercentage('0.3'),
      formatTierPercentage('0.1'),
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ];
    expect(isTiersValid(tiers)).toEqual(true);
  });
});
