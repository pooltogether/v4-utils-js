import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { parseUnits } from '@ethersproject/units';

import calculateNumberOfPrizesForIndex from './calculateNumberOfPrizesForIndex';

const debug = require('debug')('pt:v4-utils-js:calculateFractionOfPrize');

function calculateFractionOfPrize(
  prizeDistributionIndex: number,
  bitRangeSize: number,
  tiers: Array<BigNumberish>
): BigNumber {
  const numberOfPrizes = calculateNumberOfPrizesForIndex(
    bitRangeSize,
    prizeDistributionIndex
  );

  debug('calculateNumberOfPrizesForIndex', numberOfPrizes);

  const valueAtDistributionIndex = tiers[prizeDistributionIndex];
  debug('valueAtDistributionIndex ', valueAtDistributionIndex.toString());

  const valueAtTierIndexUnformatted = parseUnits(
    valueAtDistributionIndex.toString(),
    9
  );

  const fractionOfPrize = valueAtTierIndexUnformatted.div(numberOfPrizes);
  debug('fractionOfPrize: ', fractionOfPrize.toString());
  return fractionOfPrize;
}

export default calculateFractionOfPrize;
