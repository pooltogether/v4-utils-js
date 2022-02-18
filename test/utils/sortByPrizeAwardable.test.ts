import { BigNumber } from '@ethersproject/bignumber';

import { sortByPrizeAwardableDesc } from '../../src/utils';

describe('sortByPrizeAwardableDesc', () => {
    const list = [
        {
            amount: BigNumber.from(10),
            tierIndex: 2,
            pick: BigNumber.from(1),
        },
        {
            amount: BigNumber.from(1),
            tierIndex: 3,
            pick: BigNumber.from(2),
        },
        {
            amount: BigNumber.from(100),
            tierIndex: 1,
            pick: BigNumber.from(3),
        },
    ];

    it('should return a descending sorted list', () => {
        const sortedList = list.sort(sortByPrizeAwardableDesc);
        expect(sortedList[0]).toEqual({
            amount: BigNumber.from(100),
            tierIndex: 1,
            pick: BigNumber.from(3),
        });
        expect(sortedList[2]).toEqual({
            amount: BigNumber.from(1),
            tierIndex: 3,
            pick: BigNumber.from(2),
        });
    });

    it('should return "-1" with two unsorted numbers', () => {
        expect(sortByPrizeAwardableDesc(list[1], list[0])).toEqual(1);
    });

    it('should return "1" with two sorted numbers', () => {
        expect(sortByPrizeAwardableDesc(list[0], list[1])).toEqual(-1);
    });
});
