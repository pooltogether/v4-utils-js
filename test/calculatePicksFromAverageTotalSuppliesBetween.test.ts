import { BigNumber } from 'ethers';

import { calculatePicksFromAverageTotalSuppliesBetween } from '../src';

describe('calculatePicksFromAverageTotalSuppliesBetween', () => {
  it('should calculate the number of picks for a target ticket using total picks and total ticks supply', () => {
    const totalPicks = 500;
    const ticketPrimaryTotalSupply = BigNumber.from('500');
    const otherTicketsTotalSupply = BigNumber.from('1500');
    const picks = calculatePicksFromAverageTotalSuppliesBetween(
      totalPicks,
      ticketPrimaryTotalSupply,
      otherTicketsTotalSupply
    );
    expect(picks).toEqual(125);
  });
});
