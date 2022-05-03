import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computePickPrize } from '../../src';
import { formatTierPercentage, hashUserAddress } from '../../src/utils';

describe('computePickPrize', () => {
    it('should have 10% of total picks (100/1000) ', () => {
        const pickPrize = computePickPrize(
            hashUserAddress('0x0000000000000000000000000000000000000001'),
            BigNumber.from(
                '0x0000000000000000000000000000000000000000000000000000000000000001'
            ),
            2, // bitRangeSize
            10, // matchCardinality
            parseEther('1000'),
            [formatTierPercentage('1'), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        );
        console.log('pickPrize', pickPrize.amount.toString());
        expect(pickPrize.tierIndex).toEqual(2);
        expect(pickPrize.amount).toEqual(parseEther('0.024801587301587000'));
    });
});
