import { DrawResults } from "../src/types";
import { computeDrawResults } from '../src'
import { BigNumber } from "ethers";

describe("computeDrawResults", () => {
  it("should return a draw result with zero winning picks", () => {
    const draw = {
      winningRandomNumber: BigNumber.from("21288413488180966377126236036201345909019919575750940621513526137694302720820"),
      drawId: 1,
      timestamp: 1634410924,
      beaconPeriodStartedAt: 1634324400,
      beaconPeriodSeconds: 86400,
    };

    const prizeDistribution = {
      bitRangeSize: 2,
      matchCardinality: 10,
      tiers: [
        166889185,
        0,
        0,
        320427236,
        0,
        512683578,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0,
      ],
      maxPicksPerUser: 2,
      expiryDuration: 5184000,
      numberOfPicks: BigNumber.from({ _hex: "0x04dc79", _isBigNumber: true }),
      startTimestampOffset: 86400,
      prize: BigNumber.from({ _hex: "0x037ce0a900", _isBigNumber: true }),
      endTimestampOffset: 900,
    };

    const picks = [{
      index: 1,
      hash: '0x0'
    }]

    let results: DrawResults = computeDrawResults(
      prizeDistribution,
      draw,
      picks
    );
    expect(results.drawId).toEqual(1);
    expect(results.totalValue).toEqual(BigNumber.from("0"));
  });
});
