import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { calculatePrizePoolPicksWithDpr } from '../calculate';
import calculateCardinality from '../calculate/calculateCardinality';
import { Draw, PrizeDistribution, PrizeTierV2 } from '../types';

const debug = require('debug')(
    'pt:v4-utils-js:computePrizeDistributionFromTicketAverageTotalSupplies'
);

/**
 * Computes a full Prize Distribution for a Prize Pool Network using DPR.
 * @param draw
 * @param prizeTier
 * @param prizePoolTotalSupply
 * @param dpr
 * @param minPickCost
 * @param decimals
 * @returns
 */
async function computePrizeDistributionWithDpr(
    draw: Draw,
    prizeTier: PrizeTierV2,
    prizePoolTotalSupply: BigNumberish,
    dpr: BigNumberish,
    minPickCost: BigNumberish,
    decimals: string | number = 0
): Promise<PrizeDistribution | undefined> {
    if (!draw || !prizeTier || !prizePoolTotalSupply) return undefined;

    const { beaconPeriodSeconds } = draw;
    const {
        expiryDuration,
        bitRangeSize,
        maxPicksPerUser,
        tiers,
        prize,
    } = prizeTier;

    const _totalSupply = BigNumber.from(prizePoolTotalSupply);

    const matchCardinality = calculateCardinality(
        bitRangeSize,
        _totalSupply,
        decimals
    );

    let numberOfPicks;
    if (_totalSupply.gt('0')) {
        numberOfPicks = calculatePrizePoolPicksWithDpr(
            bitRangeSize,
            dpr,
            minPickCost,
            prize,
            _totalSupply,
            decimals
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
        endTimestampOffset: 0,
        prize: prize,
    };
    debug(`computePrizeDistribution:prizeDistribution: `, prizeDistribution);

    return prizeDistribution;
}

export default computePrizeDistributionWithDpr;
