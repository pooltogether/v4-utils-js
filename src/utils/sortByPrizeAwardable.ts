import { PrizeAwardable } from '../types';

export const sortByPrizeAwardableDesc = (
    a: PrizeAwardable,
    b: PrizeAwardable
) => {
    const bSubA = b.amount.sub(a.amount);
    if (bSubA.isZero()) return 0;
    if (bSubA.isNegative()) return -1;
    return 1;
};
