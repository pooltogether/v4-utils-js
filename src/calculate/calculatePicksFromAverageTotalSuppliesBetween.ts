import { BigNumber } from '@ethersproject/bignumber';

const debug = require('debug')(
    'pt:v4-utils-js:calculatePicksFromAverageTotalSuppliesBetween'
);

/**
 * Splits picks based on the total supply of tickets compared to other total supplies.
 * @param totalPicks
 * @param ticketPrimaryTotalSupply
 * @param otherTicketsTotalSupply
 * @returns
 */
function calculatePicksFromAverageTotalSuppliesBetween(
    totalPicks: number,
    ticketPrimaryTotalSupply: BigNumber,
    otherTicketsTotalSupply: BigNumber
): number | undefined {
    if (
        !BigNumber.isBigNumber(ticketPrimaryTotalSupply) ||
        !BigNumber.isBigNumber(otherTicketsTotalSupply)
    )
        return undefined;
    let numberOfPicks;
    if (ticketPrimaryTotalSupply.gt('0')) {
        numberOfPicks = ticketPrimaryTotalSupply
            .mul(totalPicks)
            .div(otherTicketsTotalSupply.add(ticketPrimaryTotalSupply));
    } else {
        numberOfPicks = BigNumber.from('0');
    }
    debug(`numberOfPicks ${Math.floor(numberOfPicks.toNumber())}`);

    return Math.floor(numberOfPicks.toNumber());
}

export default calculatePicksFromAverageTotalSuppliesBetween;
