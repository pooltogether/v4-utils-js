import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';
import calculateTotalSupplyOfPicks from './calculateTotalSupplyOfPicks';

const debug = require('debug')('pt:v4-utils-js:calculateCardinality');

/**
 *
 * @param bitRangeSize The size of the bit range for the draw
 * @param totalSupply Total Supply of the Prize Pool Network
 * @param decimals The number of decimals used to shift totalSupply. If no decimal shifting is needed ignore, default is 0.
 * @returns
 */
function calculateCardinality(
    bitRangeSize: BigNumberish,
    totalSupply: BigNumberish,
    decimals: BigNumberish = 0
): number {
    const _totalSupply = BigNumber.from(totalSupply);

    let cardinality = 1;
    let numberOfPicks;
    do {
        numberOfPicks = parseUnits(
            calculateTotalSupplyOfPicks(bitRangeSize, ++cardinality).toString(),
            decimals
        );
    } while (numberOfPicks.lt(_totalSupply));
    cardinality--;

    debug('bitRangeSize: ', BigNumber.from(bitRangeSize).toString());
    debug('totalSupply: ', BigNumber.from(totalSupply).toString());
    debug('decimals: ', BigNumber.from(decimals).toString());
    debug('numberOfPicksCardinalityPlusOne: ', numberOfPicks.toString());
    debug('cardinality: ', cardinality.toString());
    return cardinality;
}

export default calculateCardinality;
