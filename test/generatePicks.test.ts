import { parseEther } from '@ethersproject/units';
import { generatePicks } from '../src';
import { ADDRESS_DEAD, PRIZE_DISTRIBUTION_EXAMPLE_ONE } from './constants';

describe('generatePicks', () => {
  it('should have 10% of total picks (100/1000) ', () => {
    const normalizedBalance = parseEther('0.1');
    const generatedPicks = generatePicks(
      PRIZE_DISTRIBUTION_EXAMPLE_ONE,
      ADDRESS_DEAD,
      normalizedBalance
    );
    expect(generatedPicks.length).toEqual(100);
  });
});
