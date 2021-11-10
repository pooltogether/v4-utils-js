import { utils } from 'ethers';

export function computeCardinality(
  bitRangeSize: number,
  totalSupply: number,
  totalSupplyDecimals: number
): number {
  let numberOfPicks;
  let matchCardinality = 2;
  const range = 2 ** bitRangeSize;

  do {
    numberOfPicks = utils.parseUnits(`${range ** ++matchCardinality}`, totalSupplyDecimals);
  } while (numberOfPicks.lt(totalSupply));

  matchCardinality--;
  return matchCardinality;
}

export default computeCardinality;
