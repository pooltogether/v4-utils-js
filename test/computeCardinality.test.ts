import { BigNumber } from 'ethers';
import { computeCardinality } from '../src'

describe("computeCardinality", () => {
  it("should compute cardinality for a small bitrange and total supply", () => {
    const bitRangeSize = 2;
    const totalSupply = BigNumber.from('450')
    const totalSupplyDecimals = 18
    const cardinality = computeCardinality(bitRangeSize, totalSupply, totalSupplyDecimals)
    expect(cardinality).toEqual(2);
  });
});
