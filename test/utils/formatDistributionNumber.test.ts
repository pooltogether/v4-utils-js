import { formatDistributionNumber } from '../../src/utils';

describe('formatDistributionNumber', () => {
  it('should add 9 decimals places to a number', () => {
    const exampleNumber = '1';
    const expectedNumber = 1000000000;
    expect(formatDistributionNumber(exampleNumber)).toEqual(expectedNumber);
  });
});
