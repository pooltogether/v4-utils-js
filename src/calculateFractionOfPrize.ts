import { parseUnits } from '@ethersproject/units';
import { BigNumber, utils } from 'ethers';

import calculateNumberOfPrizesForIndex from './calculateNumberOfPrizesForIndex';
import { PrizeDistribution } from './types';

const debug = require('debug')('pt:v4-core-js');

function calculateFractionOfPrize(
  prizeDistributionIndex: number,
  drawSettings: PrizeDistribution
): BigNumber {
  const numberOfPrizes = calculateNumberOfPrizesForIndex(
    drawSettings.bitRangeSize,
    prizeDistributionIndex
  );

  debug('numberOfPrizes for index ', numberOfPrizes);

  const valueAtDistributionIndex = drawSettings.tiers[prizeDistributionIndex];
  debug(
    'valueAtDistributionIndex ',
    utils.formatEther(valueAtDistributionIndex.toString())
  );

  const valueAtDistributionIndexUnformatted = parseUnits(
    String(valueAtDistributionIndex),
    9
  );

  const fractionOfPrize = valueAtDistributionIndexUnformatted.div(
    numberOfPrizes
  );
  debug('fractionOfPrize: ', utils.formatEther(fractionOfPrize));
  return fractionOfPrize;
}

export default calculateFractionOfPrize;
