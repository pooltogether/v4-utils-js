import { BigNumber } from '@ethersproject/bignumber';

//////////////////////////// Derived from contracts ////////////////////////////

export type PrizeTier = {
    bitRangeSize: number;
    expiryDuration: number;
    maxPicksPerUser: number;
    prize: BigNumber;
    tiers: number[];
};

export type PrizeDistribution = PrizeTier & {
    matchCardinality: number;
    numberOfPicks: BigNumber;
    startTimestampOffset: number;
    endTimestampOffset: number;
};

export type Draw = {
    drawId: number;
    timestamp: BigNumber;
    winningRandomNumber: BigNumber;
    beaconPeriodStartedAt: BigNumber;
    beaconPeriodSeconds: number;
};

export type Pick = {
    index: number;
    hash: string;
};

export type PrizeAwardable = {
    amount: BigNumber;
    tierIndex: number;
    pick: BigNumber;
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

//////////////////////////// Custom types ////////////////////////////

export type DrawResults = {
    drawId: number;
    totalValue: BigNumber;
    prizes: PrizeAwardable[];
};

type Twab = {
    amount: string;
    timestamp: string;
    delegateBalance: string;
};

export type Account = {
    id: string;
    address?: string;
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

// From Prize API
export type Prize = {
    address: string;
    pick: BigNumber;
    tier: number;
    amount: BigNumber;
};
