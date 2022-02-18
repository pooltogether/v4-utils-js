import { BigNumber } from '@ethersproject/bignumber';

import { DrawResults } from '../../src/types';
import { filterResultsByValue } from '../../src/utils';

const debug = require('debug')('v4-utils-js:test');

describe('filterResultsByValue()', () => {
    it('should slice to the correct amount, keep the largest prizes, update the total value', () => {
        const results: DrawResults = {
            drawId: 1,
            totalValue: BigNumber.from(1),
            prizes: [
                {
                    amount: BigNumber.from(1),
                    tierIndex: 1,
                    pick: BigNumber.from(1),
                },
                {
                    amount: BigNumber.from(2),
                    tierIndex: 1,
                    pick: BigNumber.from(2),
                },
                {
                    amount: BigNumber.from(3),
                    tierIndex: 1,
                    pick: BigNumber.from(3),
                },
                {
                    amount: BigNumber.from(500),
                    tierIndex: 1,
                    pick: BigNumber.from(3),
                },
            ],
        };
        const filteredResults = filterResultsByValue(results, 2);
        expect(filteredResults.prizes.length).toEqual(2);
        expect(filteredResults.prizes[0].amount).toEqual(BigNumber.from(500));
        expect(filteredResults.prizes[1].amount).toEqual(BigNumber.from(3));
        expect(filteredResults.totalValue).toEqual(BigNumber.from(503));
        debug(filteredResults);
    });
});
