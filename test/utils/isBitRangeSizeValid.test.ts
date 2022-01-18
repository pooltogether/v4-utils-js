import { isBitRangeSizeValid } from '../../src/utils';

describe('isBitRangeSizeValid', () => {
    it('should return false since 2 is greather than 256/256', () => {
        expect(isBitRangeSizeValid(2, 256)).toEqual(false);
    });

    it('should return false since 10 is less than 256/1', () => {
        expect(isBitRangeSizeValid(10, 1)).toEqual(true);
    });
});
