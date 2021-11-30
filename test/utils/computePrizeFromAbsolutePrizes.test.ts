import { BigNumber } from "ethers";
import { computePrizeFromAbsolutePrizes } from "../../src/utils";

describe("computePrizeFromAbsolutePrizes.test", () => {
  it("should correctly sum 2 tier prizes with bit range 1", () => {
    expect(
      computePrizeFromAbsolutePrizes(1, [
        BigNumber.from("2500"),
        BigNumber.from("800"),
      ])
    ).toEqual(BigNumber.from("3300"));
  });

  it("should correctly sum 2 tier prizes with bit range 2", () => {
    expect(
      computePrizeFromAbsolutePrizes(2, [
        BigNumber.from("2500"),
        BigNumber.from("800"),
      ])
    ).toEqual(BigNumber.from("4900"));
  });

  it("should correctly sum 5 tiers prizes", () => {
    expect(
      computePrizeFromAbsolutePrizes(2, [
        BigNumber.from("100"), // 1
        BigNumber.from("100"), // 3
        BigNumber.from("100"), // 12
        BigNumber.from("100"), // 48
        BigNumber.from("100"), // 192
        BigNumber.from("100"), // 768
        BigNumber.from("100"), // 3072
      ]).toString()
    ).toEqual(BigNumber.from("409600").toString());
  });
});
