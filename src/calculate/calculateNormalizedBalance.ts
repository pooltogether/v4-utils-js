import { BigNumber } from "@ethersproject/bignumber";

function calculateNormalizedBalance(balance: BigNumber, ticketTotalSupply: BigNumber) {
    return balance.div(ticketTotalSupply);
}

export default calculateNormalizedBalance;