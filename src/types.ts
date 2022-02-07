import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

export type PrizeTier = {
    bitRangeSize: number;
    expiryDuration?: number;
    maxPicksPerUser: number;
    prize: BigNumberish;
    tiers: Array<BigNumberish>;
};

export type PrizeDistribution = PrizeTier & {
    matchCardinality: number;
    numberOfPicks: BigNumberish;
    drawStartTimestampOffset?: number;
    drawEndTimestampOffset?: number;
};

export type Draw = {
    drawId: number;
    winningRandomNumber: BigNumber;
    timestamp?: number;
    beaconPeriodStartedAt?: number;
    beaconPeriodSeconds?: number;
};

export type Pick = {
    index: number;
    hash: string;
};

export type User = {
    address: string;
    normalizedBalances: BigNumber[];
    picks?: Pick[]; // optional as user may not have picks (under floor)
};

export type DrawResults = {
    drawId: number;
    totalValue: BigNumber;
    prizes: PrizeAwardable[];
};

// prize that a User can receive
export type PrizeAwardable = {
    amount: BigNumber;
    tierIndex: number;
    pick: BigNumberish; //populate with claim index
};

export type PickPrize = {
    amount: BigNumber;
    tierIndex: number;
};

export type Claim = {
    userAddress: string;
    drawIds: number[];
    winningPickIndices: BigNumber[][];
    encodedWinningPickIndices: string;
};

export type UserDrawResult = {
    user: User;
    // drawId: BigNumber
    drawResult: DrawResults;
};

type Twab = {
    amount: string;
    timestamp: string;
    delegateBalance: string;
};

export type Account = {
    id: string;
    lastUpdatedTimestamp?: string;
    zeroBalanceOccurredAt?: string | null;
    delegateBalance: string;
    beforeOrAtDrawStartTime?: Twab[];
    beforeOrAtDrawEndTime?: Twab[];
};

export type UserBalance = {
    address: string;
    balance: BigNumber;
};
export type NormalizedUserBalance = {
    address: string;
    normalizedBalance: BigNumber;
};

export type Prize = {
    address: string;
    pick: BigNumber;
    tier: number;
    amount: BigNumber;
};