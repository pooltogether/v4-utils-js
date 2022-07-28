import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { calculatePick } from '../calculate';
import { Pick } from '../types';
import { hashUserAddress } from '../utils';

function computeUserPicks(
    address: string,
    numberOfPicks: BigNumberish
): Pick[] {
    const usersAddressHashed = hashUserAddress(address);

    let picks: Pick[] = [];
    let numberOfPicksRemaining = BigNumber.from(numberOfPicks).toNumber();
    for (let pickIndex = 0; pickIndex < numberOfPicksRemaining; pickIndex++) {
        picks.push(calculatePick(usersAddressHashed, pickIndex));
    }
    return picks;
}

export default computeUserPicks;
