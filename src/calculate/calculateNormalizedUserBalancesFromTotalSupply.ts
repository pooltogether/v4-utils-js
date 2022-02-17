import { BigNumber } from '@ethersproject/bignumber';

import { NormalizedUserBalance, UserBalance } from '../types';

function calculateNormalizedUserBalancesFromTotalSupply(
    userBalances: UserBalance[],
    totalSupply: BigNumber
): NormalizedUserBalance[] {
    return userBalances.map(userBalance => {
        return {
            address: userBalance.address,
            normalizedBalance: userBalance.balance
                .mul('1000000000000000000')
                .div(totalSupply),
        };
    });
}

export default calculateNormalizedUserBalancesFromTotalSupply;
