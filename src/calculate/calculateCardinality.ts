import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

const debug = require('debug')('pt:v4-utils-js:calculateCardinality');

function calculateCardinality(
    bitRangeSize: BigNumberish,
    totalSupply: BigNumberish,
    decimals: BigNumberish
): number {
    const _totalSupply = BigNumber.from(totalSupply);
    let numberOfPicks;
    let matchCardinality = BigNumber.from(2);
    const range = BigNumber.from(2).pow(bitRangeSize);
    debug('range: ', range.toString());
    do {
        numberOfPicks = parseUnits(`${range.pow(matchCardinality)}`, decimals);
        matchCardinality = matchCardinality.add(1);
        debug('numberOfPicks:loop: ', numberOfPicks.toString());
    } while (numberOfPicks.lt(_totalSupply));
    debug('numberOfPicks: ', numberOfPicks.toString());
    matchCardinality = matchCardinality.sub(1);
    debug('matchCardinality: ', matchCardinality.toString());
    return matchCardinality.toNumber();
}

export default calculateCardinality;
