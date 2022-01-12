import { BigNumber } from '@ethersproject/bignumber';

import { sumBigNumbers, sumTwoBigNumbers } from '../../src/utils';

describe('sumTwoBigNumbers', () => {
    const list = [BigNumber.from(2), BigNumber.from(1)];
    it('should return "-1" with two sorted numbers', () => {
        expect(sumTwoBigNumbers(list[0], list[1])).toEqual(BigNumber.from(3));
    });
});

describe('sumBigNumbers', () => {
    const list = [BigNumber.from(2), BigNumber.from(1), BigNumber.from(3)];

    it('should return "1" with two sorted numbers', () => {
        expect(sumBigNumbers(list)).toEqual(BigNumber.from(6));
    });
});
