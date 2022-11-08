import { calculatePrizePoolPicksWithDpr } from '../../src';

// https://www.notion.so/ptinc/Draw-Percentage-Rate-0fb11e1748324dd4b0fdc2f4c6b52f21
describe('calculatePrizePoolPicksWithDpr', () => {
    it('should calculate the number of picks', () => {
        const dpr = 0.00015259 * 1e9; // % scaled by 1e9
        const prizeValue = 10;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 500;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(125);
    });
    it('should calculate the number of picks', () => {
        const dpr = 0.1 * 1e9; // % scaled by 1e9
        const prizeValue = 10;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 1000;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(640);
    });
    it('should calculate the number of picks', () => {
        const dpr = 0.000055 * 1e9; // % scaled by 1e9
        const prizeValue = 10;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 1000;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(360);
    });
    it('should calculate the number of picks', () => {
        const dpr = 0.00015259 * 1e9; // % scaled by 1e9
        const prizeValue = 10;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 1000;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(250);
    });
    it('should calculate the number of picks', () => {
        const dpr = 1 * 1e9; // % scaled by 1e9
        const prizeValue = 1;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 1000;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(4000);
    });
    it('should calculate the number of picks', () => {
        const dpr = 1 * 1e9; // % scaled by 1e9
        const prizeValue = 1500;
        const bitRangeSize = 2;
        const ticketTotalSupplyA = 35000000;
        const minPickCost = 1;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        expect(picksA).toEqual(23893333);
    });
    it('should calculate the number of picks', () => {
        const dpr = 16600000;
        const prizeValue = 1000;
        const bitRangeSize = 1;
        const ticketTotalSupplyA = 10000;
        const ticketTotalSupplyB = 20000;
        const ticketTotalSupplyC = 30000;
        const minPickCost = 80;
        const picksA = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyA
        );
        const picksB = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyB
        );
        const picksC = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prizeValue,
            ticketTotalSupplyC
        );
        expect(picksA).toEqual(84);
        expect(picksB).toEqual(169);
        expect(picksC).toEqual(254);
    });
});
