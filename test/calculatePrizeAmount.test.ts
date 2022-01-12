import { parseUnits } from '@ethersproject/units';

import calculatePrizeAmount from '../src/calculatePrizeAmount';

describe('calculatePrizeAmount', () => {
    it('should calculate a 50% of totalPrize as the 1st tier index prize', () => {
        const prize = calculatePrizeAmount(
            0, // Tier Index
            500000000, // Tier Percentage (1e9)
            10, // bitRangeSize
            parseUnits('1000', '18') // Prize
        );
        expect(prize?.distributionIndex).toEqual(0);
        expect(prize?.amount).toEqual(parseUnits('500', '18'));
    });
});
