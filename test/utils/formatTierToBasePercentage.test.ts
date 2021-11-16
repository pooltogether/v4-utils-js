import { BigNumber } from "ethers";
import { formatTierToBasePercentage } from "../../src/utils";

describe("formatTierToBasePercentage.test", () => {
  it("should add 9 decimals places to a number", () => {
    const tierBN = BigNumber.from(10)
      .pow(9)
      .toString();
    expect(formatTierToBasePercentage("1").toString()).toEqual(tierBN);
  });
});
