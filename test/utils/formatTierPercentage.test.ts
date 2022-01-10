import { parseUnits } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import { formatTierPercentage } from '../../src/utils';

describe('formatTierPercentage', () => {
  it('should add 9 decimals places to a number', () => {
    const exampleNumber = '1';
    const expectedNumber = parseUnits('1', '9');
    expect(formatTierPercentage(exampleNumber)).toEqual(expectedNumber);
  });

  it('should sum to 1e18 when totalling 100%', () => {
    const tiers = [
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
      '0.1',
    ]
      .map(formatTierPercentage)
      .reduce((acc, curr) => acc.add(curr), BigNumber.from(0));
    const expectedNumber = parseUnits('1', '18').div(10 ** 9); // Divide by 1e9 as tiers are formatted in 1e9
    expect(tiers).toEqual(expectedNumber);
  });

  it('should replicate initial prize tiers', () => {
    const tiers = [
      '0.166889185',
      '0',
      '0',
      '0.320427236',
      '0',
      '0.512683578',
      '0',
      '0',
      '0',
      '0',
    ]
      .map(formatTierPercentage)
      .reduce((acc, curr) => acc.add(curr), BigNumber.from(0));
    const expectedNumber = parseUnits('0.999999999', '18').div(10 ** 9);
    expect(tiers).toEqual(expectedNumber);
  });
});
