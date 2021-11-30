import { BigNumber } from "ethers";
import { computeTiersFromAbsolutePrizes } from "../../src/utils";

describe("computeTiersFromAbsolutePrizes.test", () => {
  it("should correctly sum 2 tier prizes", () => {
    expect(
      computeTiersFromAbsolutePrizes(2, [
        BigNumber.from("2500"),
        BigNumber.from("800"),
      ])
    ).toEqual([BigNumber.from("510204081"), BigNumber.from("489795918")]);
  });
});
