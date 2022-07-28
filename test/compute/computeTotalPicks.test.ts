import { BigNumber } from '@ethersproject/bignumber';

import { computeTotalPicks } from '../../src';

describe('computeTotalPicks', () => {
    it('there should be 1,048,576 total picks ', () => {
        const pickCount = computeTotalPicks(
            2,
            10,
            BigNumber.from('1'),
            BigNumber.from('1')
        );
        expect(pickCount.eq(BigNumber.from('1048576'))).toBeTruthy();
    });
});
