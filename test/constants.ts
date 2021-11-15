import { BigNumber } from "@ethersproject/bignumber";
import { parseUnits } from "@ethersproject/units";
import { formatTierToBasePercentage } from "../src/utils/formatTierToBasePercentage";

export const PRIZE_EXAMPLE_ONE = parseUnits('5000', 6)

export const TIERS_EXAMPLE_ONE = [
  formatTierToBasePercentage('0.25'),
  formatTierToBasePercentage('0.05'),
  formatTierToBasePercentage('0.5'),
  formatTierToBasePercentage('0.2'),
  0, 0, 0, 0,
  0, 0, 0, 0
]

export const DRAW_EXAMPLE_ONE = {
  winningRandomNumber: BigNumber.from("21288413488180966377126236036201345909019919575750940621513526137694302720820"),
  drawId: 1,
  timestamp: 1634410924,
  beaconPeriodStartedAt: 1634324400,
  beaconPeriodSeconds: 86400,
};

export const PRIZE_DISTRIBUTION_EXAMPLE_ONE = {
  bitRangeSize: 2,
  matchCardinality: 10,
  tiers: TIERS_EXAMPLE_ONE,
  maxPicksPerUser: 2,
  expiryDuration: 5184000,
  numberOfPicks: BigNumber.from({ _hex: "0x04dc79", _isBigNumber: true }),
  startTimestampOffset: 86400,
  prize: BigNumber.from({ _hex: "0x037ce0a900", _isBigNumber: true }),
  endTimestampOffset: 900,
};