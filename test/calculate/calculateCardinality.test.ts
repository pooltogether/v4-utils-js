import { parseUnits } from '@ethersproject/units';

import { calculateCardinality } from '../../src';

describe('calculateCardinality', () => {
    it('should calculate the cardinality 22', async () => {
        const cardinality = calculateCardinality(
            2,
            parseUnits('10', 18),
            6
        );
        expect(cardinality).toEqual(22);
    });
    it('should calculate the cardinality 8', async () => {
        const cardinality = calculateCardinality(
            6,
            parseUnits('10', 18),
            6
        );
        expect(cardinality).toEqual(8);
    });
    it('should calculate the cardinality 5', async () => {
        const cardinality = calculateCardinality(
            10,
            parseUnits('10', 18),
            6
        );
        expect(cardinality).toEqual(5);
    });
});
