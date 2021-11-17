import { BigNumber } from "@ethersproject/bignumber";
import { Provider } from "@ethersproject/abstract-provider";

export interface Draw {
  drawId: number;
  winningRandomNumber: BigNumber;
  timestamp: number;
  beaconPeriodStartedAt: number;
  beaconPeriodSeconds: number;
}

export interface PrizeDistribution {
  bitRangeSize: number;
  matchCardinality: number;
  startTimestampOffset?: number;
  endTimestampOffset?: number;
  maxPicksPerUser: number;
  expiryDuration: number;
  numberOfPicks: BigNumber;
  tiers: Array<BigNumber | number>;
  prize: BigNumber;
}

export interface PrizeTier {
  bitRangeSize: number;
  drawId: number;
  maxPicksPerUser: number;
  prize: number;
  tiers: number;
  validityDuration: number;
}

export interface Pick {
  index: number;
  hash: string;
}

export interface User {
  address: string;
  normalizedBalances: BigNumber[];
  picks?: Pick[]; // optional as user may not have picks (under floor)
}

export interface DrawResults {
  drawId: number;
  totalValue: BigNumber;
  prizes: PrizeAwardable[];
}

export interface PrizeAwardable {
  amount: BigNumber;
  distributionIndex: number;
  pick: BigNumber; //populate with claim index
}

export interface PickPrize {
  amount: BigNumber;
  distributionIndex: number;
}

export interface Claim {
  userAddress: string;
  drawIds: number[];
  data: BigNumber[][];
}

export interface UserDrawResult {
  user: User;
  drawResult: DrawResults;
}

export interface Providers {
  [chainId: number]: Provider | undefined;
}
