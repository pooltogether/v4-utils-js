import { BigNumber, ethers } from 'ethers';
import { PrizeDistribution } from './types';
import calculateFractionOfPrize from './calculateFractionOfPrize';

function calculatePrizeForDistributionIndex(
  distributionIndex: number,
  prizeDistrbution: PrizeDistribution
): BigNumber {
  // totalPrize *  (distributions[index]/(range ^ index)) where index = matchCardinality - numberOfMatches
  const fractionOfPrize = calculateFractionOfPrize(
    distributionIndex,
    prizeDistrbution
  );
  let expectedPrizeAmount: BigNumber = prizeDistrbution.prize.mul(
    fractionOfPrize
  );
  expectedPrizeAmount = expectedPrizeAmount.div(ethers.constants.WeiPerEther);
  return expectedPrizeAmount;
}

export default calculatePrizeForDistributionIndex;
