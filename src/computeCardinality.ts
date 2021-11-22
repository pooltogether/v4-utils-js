import { BigNumber, utils } from "ethers";

export function computeCardinality(
  bitRangeSize: BigNumber,
  totalSupply: BigNumber,
  totalSupplyDecimals: BigNumber
): number {
  let numberOfPicks;
  let matchCardinality = BigNumber.from(2);
  const range = BigNumber.from(2).pow(bitRangeSize);

  do {
    numberOfPicks = utils.parseUnits(
      `${range.pow(matchCardinality.add(1))}`,
      totalSupplyDecimals
    );
  } while (numberOfPicks.lt(totalSupply));

  matchCardinality.sub(1);
  return matchCardinality.toNumber();
}

export default computeCardinality;
