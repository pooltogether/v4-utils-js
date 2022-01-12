import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { computeUserPicks } from '../../src';
import { ADDRESS_DEAD } from '../constants';

describe('computeUserPicks', () => {
    it('should have 10% of total picks (100/1000) ', () => {
        const normalizedBalance = parseEther('0.1');
        const generatedPicks = computeUserPicks(
            BigNumber.from('1000'),
            ADDRESS_DEAD,
            normalizedBalance
        );
        expect(generatedPicks.length).toEqual(100);
    });
});
