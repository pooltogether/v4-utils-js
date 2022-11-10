import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import calculateCardinality from '../calculate/calculateCardinality';
import calculatePicksFromAverageTotalSuppliesBetween from '../calculate/calculatePicksFromAverageTotalSuppliesBetween';
import { Draw, PrizeDistribution, PrizeTier } from '../types';
import { sumBigNumbers } from '../utils';

const debug = require('debug')(
    'pt:v4-utils-js:computePrizeDistributionFromTicketAverageTotalSupplies'
);

async function computePrizeDistributionFromTicketAverageTotalSupplies(
    draw: Draw,
    prizeTier: PrizeTier,
    ticketPrimaryAverageTotalSupply: BigNumberish,
    ticketSecondaryListAverageTotalSupply: Array<BigNumberish>,
    decimals: BigNumberish = 0
): Promise<PrizeDistribution | undefined> {
    if (
        !draw ||
        !prizeTier ||
        !ticketPrimaryAverageTotalSupply ||
        !ticketSecondaryListAverageTotalSupply
    )
        return undefined;

    const { beaconPeriodSeconds } = draw;
    const {
        expiryDuration,
        bitRangeSize,
        maxPicksPerUser,
        tiers,
        prize,
    } = prizeTier;

    const ticketPrimaryAverageTotalSupplyBigNumber = BigNumber.from(
        ticketPrimaryAverageTotalSupply
    );
    const ticketSecondaryListAverageTotalSupplyBigNumber = ticketSecondaryListAverageTotalSupply.map(
        BigNumber.from
    );

    // Sums the ALL ticket average total supplies.
    const totalAverageSupplies = sumBigNumbers([
        ticketPrimaryAverageTotalSupplyBigNumber,
        ...ticketSecondaryListAverageTotalSupplyBigNumber,
    ]);

    // Sums ALL SECONDARY ticket average total supplies.
    const secondaryTotalAverageSupplies = sumBigNumbers(
        ticketSecondaryListAverageTotalSupplyBigNumber
    );

    const matchCardinality = calculateCardinality(
        bitRangeSize,
        BigNumber.from(totalAverageSupplies),
        decimals
    );

    let numberOfPicks;
    const totalPicks = BigNumber.from(BigNumber.from(2).pow(bitRangeSize)).pow(
        matchCardinality
    );

    if (BigNumber.from(totalAverageSupplies).gt('0')) {
        numberOfPicks = calculatePicksFromAverageTotalSuppliesBetween(
            totalPicks.toNumber(),
            BigNumber.from(ticketPrimaryAverageTotalSupply),
            BigNumber.from(secondaryTotalAverageSupplies)
        );
    }

    const prizeDistribution: PrizeDistribution = {
        bitRangeSize: bitRangeSize,
        matchCardinality,
        tiers: tiers,
        maxPicksPerUser: maxPicksPerUser,
        expiryDuration,
        numberOfPicks: BigNumber.from(numberOfPicks),
        startTimestampOffset: beaconPeriodSeconds,
        endTimestampOffset: prizeTier.endTimestampOffset,
        prize: prize,
    };
    debug(`computePrizeDistribution:prizeDistribution: `, prizeDistribution);

    return prizeDistribution;
}

export default computePrizeDistributionFromTicketAverageTotalSupplies;
