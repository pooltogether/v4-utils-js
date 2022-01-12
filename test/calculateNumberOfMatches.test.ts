import calculateNumberOfMatches from '../src/calculateNumberOfMatches';

describe('calculateNumberOfMatches', () => {
    it('should calculate 0 matches', () => {
        const numberOfMatches = calculateNumberOfMatches(
            0, // PickNumber (hashed address)
            500000000, // RandomNumber
            4, // bitRangeSize
            10 // matchCardinality
        );
        expect(numberOfMatches).toEqual(0);
    });

    it('should calculate 2 matches', () => {
        const numberOfMatches = calculateNumberOfMatches(
            0, // PickNumber (hashed address)
            500000000, // RandomNumber
            10, // bitRangeSize
            3 // matchCardinality
        );
        expect(numberOfMatches).toEqual(2);
    });
});
