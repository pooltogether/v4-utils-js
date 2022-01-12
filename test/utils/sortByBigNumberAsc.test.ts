import { BigNumber } from '@ethersproject/bignumber';

import { sortByBigNumberAsc, sortByBigNumberDesc } from '../../src/utils';

describe('sortByBigNumberAsc', () => {
    const list = [BigNumber.from(2), BigNumber.from(1)];

    it('should return "1" with two sorted numbers', () => {
        expect(sortByBigNumberAsc(list[0], list[1])).toEqual(1);
    });

    it('should return "-1" with two unsorted numbers', () => {
        expect(sortByBigNumberAsc(list[1], list[0])).toEqual(-1);
    });
});

describe('sortByBigNumberDesc', () => {
    const list = [BigNumber.from(2), BigNumber.from(1)];
    it('should return "-1" with two sorted numbers', () => {
        expect(sortByBigNumberDesc(list[0], list[1])).toEqual(-1);
    });

    it('should return "1" with two unsorted numbers', () => {
        expect(sortByBigNumberDesc(list[1], list[0])).toEqual(1);
    });
});
