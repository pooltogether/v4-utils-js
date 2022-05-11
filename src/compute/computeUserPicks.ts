import { BigNumber } from '@ethersproject/bignumber';

import { calculatePick } from '../calculate';
import { Pick } from '../types';
import { hashUserAddress } from '../utils';

function computeUserPicks(address: string, numberOfPicks: BigNumber): Pick[] {
    const usersAddressHashed = hashUserAddress(address);

    let picks: Pick[] = [];
    let numberOfPicksRemaining = numberOfPicks.toNumber();
    for (let pickIndex = 0; pickIndex < numberOfPicksRemaining; pickIndex++) {
        picks.push(calculatePick(usersAddressHashed, pickIndex));
    }
    return picks;
}

export default computeUserPicks;
