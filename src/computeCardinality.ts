import { BigNumber } from '@ethersproject/bignumber'
import { utils } from "ethers";
const debug = require('debug')('pt-v4-js')

export function computeCardinality(
  bitRangeSize: BigNumber,
  totalSupply: BigNumber,
  totalSupplyDecimals: BigNumber
): number {
  debug("computeCardinality:ENTER")
  let numberOfPicks;
  let matchCardinality = BigNumber.from(2);
  const range = BigNumber.from(2).pow(bitRangeSize);
  debug("computeCardinality:matchCardinality: ", matchCardinality.toString());
  debug("computeCardinality:range: ", range.toString());
  debug("computeCardinality:totalSupply: ", totalSupply.toString());
  debug("computeCardinality:totalSupplyDecimals: ", totalSupplyDecimals.toString());
  do {

    numberOfPicks = utils.parseUnits(
      `${range.pow(matchCardinality)}`,
      totalSupplyDecimals
    );
    matchCardinality = matchCardinality.add(1);
    debug("computeCardinality:numberOfPicks:loop: ", numberOfPicks.toString());
  } while (numberOfPicks.lt(totalSupply));
  debug("computeCardinality:numberOfPicks: ", numberOfPicks.toString());
  matchCardinality = matchCardinality.sub(1);
  debug("computeCardinality:matchCardinality: ", matchCardinality.toString());
  return matchCardinality.toNumber();
}

export default computeCardinality;
