import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import {
    calculatePick,
    calculateNormalizedBalancePicksFromTotalPicks,
} from '../calculate';
import { Pick } from '../types';
import { hashUserAddress } from '../utils';

function computeUserPicks(
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
        picks.push(calculatePick(usersAddressHashed, pickIndex));
    }
    return picks;
}

export default computeUserPicks;
