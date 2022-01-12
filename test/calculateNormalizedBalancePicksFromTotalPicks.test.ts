import { BigNumber } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import calculateNormalizedBalancePicksFromTotalPicks from '../src/calculateNormalizedBalancePicksFromTotalPicks';

describe('calculateNormalizedBalancePicksFromTotalPicks', () => {
    it('should calculate 10% of the picks if the normalized balance is 0.1', () => {
        const totalPicks = BigNumber.from('1000');
        const normalizeBalance = parseUnits('0.1', 18);
        const numberOfPicks = calculateNormalizedBalancePicksFromTotalPicks(
            totalPicks,
            normalizeBalance
        );
        expect(numberOfPicks).toEqual(BigNumber.from('100'));
    });
});
