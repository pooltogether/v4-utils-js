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
    const tiers = ['0.1','0.1','0.1','0.1','0.1', '0.1','0.1','0.1','0.1','0.1'].map(formatTierPercentage).reduce((acc, curr) => acc.add(curr), BigNumber.from(0));
    const expectedNumber = parseUnits('1', '18');
    expect(parseUnits(tiers.toString(), '9')).toEqual(expectedNumber);
  });

});
