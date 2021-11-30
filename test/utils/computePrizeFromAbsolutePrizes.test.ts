import { BigNumber } from "ethers";
import { computePrizeFromAbsolutePrizes } from "../../src/utils";

describe("computePrizeFromAbsolutePrizes.test", () => {
  it("should correctly sum 2 tier prizes with bit range 1", () => {
    expect(computePrizeFromAbsolutePrizes(1, [BigNumber.from('2500'), BigNumber.from('800')])).toEqual(BigNumber.from('3300'));
  });

  it("should correctly sum 2 tier prizes with bit range 2", () => {
    expect(computePrizeFromAbsolutePrizes(2, [BigNumber.from('2500'), BigNumber.from('800')])).toEqual(BigNumber.from('4900'));
  });
});
