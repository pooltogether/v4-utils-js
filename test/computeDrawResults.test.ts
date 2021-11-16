import { BigNumber } from "@ethersproject/bignumber";
import { DrawResults } from "../src/types";
import { computeDrawResults } from "../src";
import { DRAW_EXAMPLE_ONE, PRIZE_DISTRIBUTION_EXAMPLE_ONE } from "./constants";

describe("computeDrawResults", () => {
  it("should return a draw result with zero winning picks", () => {
    const picks = [
      {
        index: 1,
        hash: "0x0",
      },
    ];

    let results: DrawResults = computeDrawResults(
      PRIZE_DISTRIBUTION_EXAMPLE_ONE,
      DRAW_EXAMPLE_ONE,
      picks
    );
    expect(results.drawId).toEqual(1);
    expect(results.totalValue).toEqual(BigNumber.from("0"));
  });
});
