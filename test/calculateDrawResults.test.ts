import { BigNumber } from 'ethers';
import { calculateDrawResults } from '../src'
import { DrawResults, PrizeDistribution, Draw, User } from '../src/types';
import { DRAW_EXAMPLE_ONE, PRIZE_DISTRIBUTION_EXAMPLE_ONE, USER_EXAMPLE_ONE } from "./constants";

describe("calculateDrawResults", () => {
  it("should succeed to calculate empty draw results", () => {
    const prizeDistribution: PrizeDistribution = PRIZE_DISTRIBUTION_EXAMPLE_ONE
    const draw: Draw = DRAW_EXAMPLE_ONE
    const user: User = USER_EXAMPLE_ONE
    const calculatedDrawResults: DrawResults = calculateDrawResults(prizeDistribution, draw, user)
    expect(calculatedDrawResults.drawId).toEqual(1);
    expect(calculatedDrawResults.prizes).toEqual([]);
    expect(calculatedDrawResults.totalValue).toEqual(BigNumber.from('0'));
  });
});
