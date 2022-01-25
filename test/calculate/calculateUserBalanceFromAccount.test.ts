import { BigNumber } from '@ethersproject/bignumber';

import calculateUserBalanceFromAccount from '../../src/calculate/calculateUserBalanceFromAccount';
import { Account } from '../../src/types';

describe('calculateUserBalanceFromAccount()', () => {
    it('returns undefined when twabs are undefined', () => {
        const account: Account = {
            beforeOrAtDrawEndTime: [],
            beforeOrAtDrawStartTime: [],
            delegateBalance: '310000000',
            id: '0x883e5bef307b99fba45335a612a40bc3d5a8b9c3',
            lastUpdatedTimestamp: '1634988536',
            zeroBalanceOccurredAt: null,
        };
        const drawStartTime = 1634930149;
        const drawEndTime = 1635015649;
        expect(
            calculateUserBalanceFromAccount(account, drawStartTime, drawEndTime)
        ).toEqual(undefined);
    });

    it('returns correct value, twabs the same', () => {
        const account: Account = {
            beforeOrAtDrawEndTime: [
                {
                    amount: '30000000000',
                    delegateBalance: '30000000000',
                    timestamp: '1634789910',
                },
            ],
            beforeOrAtDrawStartTime: [
                {
                    amount: '30000000000',
                    delegateBalance: '30000000000',
                    timestamp: '1634789910',
                },
            ],
            delegateBalance: '30000000000',
            id: '0x00e6acb9346c6d4940a167f7b196104fa7d84c85',
            zeroBalanceOccurredAt: null,
        };

        const drawStartTime = 1634930149;
        const drawEndTime = 1635015649;

        expect(
            calculateUserBalanceFromAccount(account, drawStartTime, drawEndTime)
        ).toEqual(BigNumber.from('30000000000'));
    });
    it('another user ', () => {
        const account: Account = {
            beforeOrAtDrawEndTime: [
                {
                    amount: '0',
                    delegateBalance: '310000000',
                    timestamp: '1634988536',
                },
            ],
            beforeOrAtDrawStartTime: [],
            delegateBalance: '310000000',
            id: '0x883e5bef307b99fba45335a612a40bc3d5a8b9c3',
            lastUpdatedTimestamp: '1634988536',
            zeroBalanceOccurredAt: null,
        };
        const drawStartTime = 1634930149;
        const drawEndTime = 1635015649;
        const balance = calculateUserBalanceFromAccount(
            account,
            drawStartTime,
            drawEndTime
        );
        expect(balance).toEqual(BigNumber.from('98304444'));
    });
    it('user withdraws after draw period', () => {
        const account = {
            delegateBalance: '109999982',
            id: '0x636bae3f76b4ccb486f50bf192ea2a8d22d1a79a',
            lastUpdatedTimestamp: '1635077632',
            zeroBalanceOccurredAt: null,
            beforeOrAtDrawEndTime: [
                {
                    amount: '60299700000000000',
                    delegateBalance: '0',
                    timestamp: '1634988722',
                },
            ],
            beforeOrAtDrawStartTime: [
                {
                    amount: '0',
                    delegateBalance: '150000000000',
                    timestamp: '1634586724',
                },
            ],
        };
        const drawStartTime = 1634930149;
        const drawEndTime = 1635015649;
        const balance = calculateUserBalanceFromAccount(
            account,
            drawStartTime,
            drawEndTime
        );

        expect(balance).toEqual(BigNumber.from('102759649122'));
    });
});
