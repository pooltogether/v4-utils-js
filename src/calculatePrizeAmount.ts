import { BigNumber, BigNumberish } from 'ethers';

import calculatePrizeForTierPercentage from './calculatePrizeForTierPercentage';
import { PickPrize } from './types';

const MAXIUMUM_TIERS_LENGTH = 16;

function calculatePrizeAmount(
  tierIndex: number,
  tierValue: BigNumberish,
  bitRangeSize: number,
  prizeAmount: BigNumber
): PickPrize {
  if (tierIndex > MAXIUMUM_TIERS_LENGTH) {
    // throw new Error(`tierIndex ${tierIndex} is greater than maximum allowed ${MAXIUMUM_TIERS_LENGTH}`);
    return {
      amount: BigNumber.from(0),
      distributionIndex: -1,
    };
  }

  const expectedPrizeAmount = calculatePrizeForTierPercentage(
    tierIndex,
    tierValue,
    bitRangeSize,
    prizeAmount
  );
  return {
    amount: expectedPrizeAmount,
    distributionIndex: tierIndex,
  };
}

export default calculatePrizeAmount;
