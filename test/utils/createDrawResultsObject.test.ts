import { BigNumber } from 'ethers';
import { createDrawResultsObject } from '../../src/utils';

describe('createDrawResultsObject', () => {
    it('should return a valid DrawResults object', () => {
        expect(createDrawResultsObject(1)).toEqual({
            drawId: 1,
            totalValue: BigNumber.from(0),
            prizes: [],
        });
    });
});
