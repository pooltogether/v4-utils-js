import { parseEther } from '@ethersproject/units';

import { calculateFractionOfPrize } from '../../src';
import { formatTierPercentage } from '../../src/utils';

describe('calculateFractionOfPrize', () => {
    it('can calculate the fraction for the prize distribution', async () => {
        const fractionOfPrize = calculateFractionOfPrize(1000000000, 4);
        const fraction = calculateFractionOfPrize(
            fractionOfPrize,
            formatTierPercentage('0.1')
        );
        expect(fraction).toStrictEqual(parseEther('0.025'));
    });
});
