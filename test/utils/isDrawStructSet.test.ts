import { BigNumber } from "@ethersproject/bignumber";
import { isDrawStructSet } from "../../src";
import { Draw } from "../../src/types";

describe("isDrawStructSet", () => {
  it("should fail to validate Draw", () => {
    const draw: Draw = {
      timestamp: 0,
      drawId: 0,
      winningRandomNumber: BigNumber.from(1),
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };
    expect(isDrawStructSet(draw)).toBeFalsy();
  });

  it("should fail to validate Draw with invalid draw id", () => {
    const draw: Draw = {
      timestamp: 1,
      drawId: 0,
      winningRandomNumber: BigNumber.from(1),
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };
    expect(isDrawStructSet(draw)).toBeFalsy();
  });

  it("should fail to validate Draw with invalid timestamp", () => {
    const draw: Draw = {
      timestamp: 0,
      drawId: 1,
      winningRandomNumber: BigNumber.from(1),
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };
    expect(isDrawStructSet(draw)).toBeFalsy();
  });

  it("should succeed to validate Draw", () => {
    const draw: Draw = {
      timestamp: 1,
      drawId: 1,
      winningRandomNumber: BigNumber.from(1),
      beaconPeriodStartedAt: 0,
      beaconPeriodSeconds: 0,
    };
    expect(isDrawStructSet(draw)).toBeTruthy();
  });
});
