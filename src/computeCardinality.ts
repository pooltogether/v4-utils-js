import { BigNumber } from '@ethersproject/bignumber';
import { utils } from 'ethers';

const debug = require('debug')('pt:v4-utils-js:computeCardinality');

function computeCardinality(
    bitRangeSize: BigNumber,
    totalSupply: BigNumber,
    totalSupplyDecimals: BigNumber
): number {
    let numberOfPicks;
    let matchCardinality = BigNumber.from(2);
    const range = BigNumber.from(2).pow(bitRangeSize);
    debug('matchCardinality: ', matchCardinality.toString());
    debug('range: ', range.toString());
    debug('totalSupply: ', totalSupply.toString());
    debug('totalSupplyDecimals: ', totalSupplyDecimals.toString());
    do {
        numberOfPicks = utils.parseUnits(
            `${range.pow(matchCardinality)}`,
            totalSupplyDecimals
        );
        matchCardinality = matchCardinality.add(1);
        debug('numberOfPicks:loop: ', numberOfPicks.toString());
    } while (numberOfPicks.lt(totalSupply));
    debug('numberOfPicks: ', numberOfPicks.toString());
    matchCardinality = matchCardinality.sub(1);
    debug('matchCardinality: ', matchCardinality.toString());
    return matchCardinality.toNumber();
}

export default computeCardinality;
