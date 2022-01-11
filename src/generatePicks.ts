import { BigNumber, ethers } from 'ethers';

import calculateNormalizedBalancePicksFromTotalPicks from './calculateNormalizedBalancePicksFromTotalPicks';
import computePick from './computePick';
import { Pick, PrizeDistribution } from './types';

function generatePicks(
  prizeDistribution: PrizeDistribution,
  address: string,
  normalizedBalance: BigNumber
): Pick[] {
  let numberOfPicks = calculateNormalizedBalancePicksFromTotalPicks(
    prizeDistribution,
    normalizedBalance
  );

  const usersAddressHashed = ethers.utils.solidityKeccak256(
    ['address'],
    [address]
  );

  let picks: Pick[] = [];

  for (let pickIndex = 0; pickIndex < numberOfPicks; pickIndex++) {
    picks.push(computePick(usersAddressHashed, pickIndex));
  }
  return picks;
}

export default generatePicks;
