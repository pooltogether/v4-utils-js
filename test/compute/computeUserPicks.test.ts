import { BigNumber } from '@ethersproject/bignumber';

import { computeUserPicks } from '../../src';
import { ADDRESS_DEAD } from '../constants';

describe('computeUserPicks', () => {
    it('should have the right amount of picks ', () => {
        const pickCount = BigNumber.from('100');
        const generatedPicks = computeUserPicks(ADDRESS_DEAD, pickCount);
        expect(generatedPicks.length).toEqual(100);
    });
});
