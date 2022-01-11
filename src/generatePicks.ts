import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import calculateNormalizedBalancePicksFromTotalPicks from './calculateNormalizedBalancePicksFromTotalPicks';
import computePick from './computePick';
import {hashUserAddress} from './utils' ;
import { Pick } from './types';

function generatePicks(
  totalNumberOfPicks: BigNumberish,
  address: string,
  normalizedBalance: BigNumber
): Pick[] {
  let numberOfPicks = calculateNormalizedBalancePicksFromTotalPicks(
    totalNumberOfPicks,
    normalizedBalance
  );

  const usersAddressHashed = hashUserAddress(address);

  let picks: Pick[] = [];
  let numberOfPicksRemaining = numberOfPicks.toNumber();
  for (let pickIndex = 0; pickIndex < numberOfPicksRemaining; pickIndex++) {
    picks.push(computePick(usersAddressHashed, pickIndex));
  }
  return picks;
}

export default generatePicks;
