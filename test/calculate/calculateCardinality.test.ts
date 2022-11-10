import { parseEther, parseUnits } from '@ethersproject/units';

import calculateCardinality from '../../src/calculate/calculateCardinality';

describe('calculateCardinality', () => {
    it('should calculate', async () => {
        const cardinality = calculateCardinality(2, '1000');
        const cardinality2 = calculateCardinality(2, '1026');
        expect(cardinality).toEqual(4);
        expect(cardinality2).toEqual(5);
    });
    it('should calculate the cardinality 21', async () => {
        const cardinality = calculateCardinality(2, parseUnits('10', 18), 6);
        expect(cardinality).toEqual(21);
    });
    it('should calculate the cardinality 7', async () => {
        const cardinality = calculateCardinality(6, parseUnits('10', 18), 6);
        expect(cardinality).toEqual(7);
    });
    it('should calculate the cardinality 4', async () => {
        const cardinality = calculateCardinality(10, parseUnits('10', 18), 6);
        expect(cardinality).toEqual(4);
    });
    it('should calculate the cardinality 2', async () => {
        const cardinality = calculateCardinality(
            10,
            parseEther('10000000'),
            18
        );
        expect(cardinality).toEqual(2);
    });
    it('should calculate the cardinality 9, no decimals', async () => {
        const cardinality = calculateCardinality(1, 753);
        expect(cardinality).toEqual(9);
    });
});
