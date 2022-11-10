import { BigNumber } from '@ethersproject/bignumber';

import { NormalizedUserBalance, UserBalance } from '../types';

/**
 * Used to calculate the normalized user balances from the total supply of a Prize Pool.
 * @param userBalances
 * @param totalSupply
 * @returns
 */
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
