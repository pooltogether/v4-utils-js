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
    prizeDistribution.numberOfPicks,
    normalizedBalance
  );

  const usersAddressHashed = ethers.utils.solidityKeccak256(
    ['address'],
    [address]
  );

  let picks: Pick[] = [];
  let numberOfPicksRemaining = numberOfPicks.toNumber();
  for (let pickIndex = 0; pickIndex < numberOfPicksRemaining; pickIndex++) {
    picks.push(computePick(usersAddressHashed, pickIndex));
  }
  return picks;
}

export default generatePicks;
