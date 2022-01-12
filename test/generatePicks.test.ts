import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';

import { generatePicks } from '../src';
import { ADDRESS_DEAD } from './constants';

describe('generatePicks', () => {
    it('should have 10% of total picks (100/1000) ', () => {
        const normalizedBalance = parseEther('0.1');
        const generatedPicks = generatePicks(
            BigNumber.from('1000'),
            ADDRESS_DEAD,
            normalizedBalance
        );
        expect(generatedPicks.length).toEqual(100);
    });
});
