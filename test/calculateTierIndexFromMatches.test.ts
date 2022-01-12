import calculateTierIndexFromMatches from '../src/calculateTierIndexFromMatches';

describe('calculateTierIndexFromMatches', () => {
    it('should return index 0', () => {
        const tierIndex = calculateTierIndexFromMatches(
            16, // matchCardinality
            16, // numberOfMatches
        );
        expect(tierIndex).toEqual(0);
    });
    
    it('should return index 8', () => {
        const tierIndex = calculateTierIndexFromMatches(
            16, // matchCardinality
            8, // numberOfMatches
        );
        expect(tierIndex).toEqual(8);
    });
    
    it('should return index 16', () => {
        const tierIndex = calculateTierIndexFromMatches(
            16, // matchCardinality
            0, // numberOfMatches
        );
        expect(tierIndex).toEqual(16);
    });

    it('should throw an error if number of matches is greater than matchCardinality', () => {
        expect(() => calculateTierIndexFromMatches(
            16, // matchCardinality
            17, // numberOfMatches
        )).toThrow('numberOfMatches cannot be greater than matchCardinality');
    });

});
