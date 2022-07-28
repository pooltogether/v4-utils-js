import { BigNumberish } from 'ethers';

import calculateNormalizedBalancePicksFromTotalPicks from '../calculate/calculateNormalizedBalancePicksFromTotalPicks';
import computeUserPicks from './computeUserPicks';

function computeUserPicksFromNormalizedBalance(
    totalNumberOfPicks: BigNumberish,
    address: string,
    normalizedBalance: BigNumberish
) {
    const numberOfPicks = calculateNormalizedBalancePicksFromTotalPicks(
        totalNumberOfPicks,
        normalizedBalance
    );

    return computeUserPicks(address, numberOfPicks);
}

export default computeUserPicksFromNormalizedBalance;
