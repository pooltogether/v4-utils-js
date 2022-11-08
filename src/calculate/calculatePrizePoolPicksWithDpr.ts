import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import calculateCardinality from './calculateCardinality';
import { calculateTotalSupplyOfPicks } from './calculateTotalSupplyOfPicks';

const debug = require('debug')(
    'pt:v4-utils-js:calculatePicksFromAverageTotalSuppliesBetween'
);

const RATE_NORMALIZATION = 1e9;

/**
 * Splits picks based on the configued DPR.
 * @param bitRangeSize
 * @param dpr normalized with 1e9
 * @param minPickCost
 * @param prizeValue
 * @param totalSupply
 * @param decimals (optional) unit digits to parse totalSupply with
 * @returns
 */
function calculatePrizePoolPicksWithDpr(
    bitRangeSize: number,
    dpr: BigNumberish,
    minPickCost: BigNumberish,
    prizeValue: BigNumberish,
    totalSupply: BigNumberish,
    decimals: number | string = 0
): number | undefined {
    const _dpr = BigNumber.from(dpr);
    const _totalSupply = BigNumber.from(totalSupply);
    const _prizeValue = BigNumber.from(prizeValue);
    const _minPickCost = BigNumber.from(minPickCost);

    let targetPicks: BigNumber;
    const odds = _dpr.mul(_totalSupply).div(_prizeValue);

    if (odds.isZero()) {
        return 0;
    }

    if (_prizeValue.gt('0')) {
        targetPicks = _prizeValue
            .mul(RATE_NORMALIZATION)
            .div(_dpr.mul(_minPickCost));
    } else {
        targetPicks = BigNumber.from('0');
    }

    debug(`targetPicks ${Math.floor(targetPicks.toNumber())}`);

    const cardinality = calculateCardinality(
        bitRangeSize,
        targetPicks,
        decimals
    );

    debug(`targetPicks ${targetPicks}`);
    debug(`cardinality ${Math.floor(cardinality)}`);

    const totalNumberOfPicks = BigNumber.from(
        calculateTotalSupplyOfPicks(bitRangeSize, cardinality)
    );

    const prizePoolNumberOfPicks = totalNumberOfPicks
        .mul(odds)
        .div(RATE_NORMALIZATION);

    debug(
        `prizePoolNumberOfPicks ${Math.floor(
            prizePoolNumberOfPicks.toNumber()
        )}`
    );

    return Math.floor(prizePoolNumberOfPicks.toNumber());
}

export default calculatePrizePoolPicksWithDpr;
