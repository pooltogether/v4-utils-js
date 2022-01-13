import { BigNumber } from '@ethersproject/bignumber';

import { calculateCardinality } from '../../src';

describe('calculateCardinality', () => {
    it('should compute cardinality for a small bitrange and total supply', () => {
        const bitRangeSize = BigNumber.from(2);
        const totalSupply = BigNumber.from('450');
        const totalSupplyDecimals = BigNumber.from(18);
        const cardinality = calculateCardinality(
            bitRangeSize,
            totalSupply,
            totalSupplyDecimals
        );
        expect(cardinality).toEqual(2);
    });
});
