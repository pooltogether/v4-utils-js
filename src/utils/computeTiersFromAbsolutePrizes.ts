import { BigNumber, ethers } from "ethers";
import { calculateNumberOfPrizesForIndex } from '../helpers/calculateNumberOfPrizesForIndex'
import { computePrizeFromAbsolutePrizes } from './computePrizeFromAbsolutePrizes'

/**
 * Converts a list of absolute prizes to a fraction array.
 * 
 * @remarks
 * Given an array of prizes, this function returns a corresponding array of fixed point 9 fractions for the prize tiers.
 * 
 * For example, if the tierPrizes array is [2500, 800] then this function will assume:
 * 
 * There is 1 $2500 prize,
 * There are 3 $800 prizes
 * 
 * The total prize is 2500 + 3 * 800 = 4900.
 * 
 * The result will then be `[2500*1e9/4900, (3*800*1e9)/4900]` or [ 510204081, 489795918 ]
 * 
 * @param bitRangeSize The bit range that determines the count for each tier of prizes
 * @param tierPrizes The tiers of prizes represented as absolute amounts.
 */
export function computeTiersFromAbsolutePrizes(bitRangeSize: number, tierPrizes: BigNumber[]): BigNumber[] {
    const totalPrizes = computePrizeFromAbsolutePrizes(bitRangeSize, tierPrizes)

    return tierPrizes.map((tierPrize: BigNumber, index: number): BigNumber =>
        tierPrize
            .mul(calculateNumberOfPrizesForIndex(bitRangeSize, index))
            .mul(ethers.utils.parseUnits('1', 9))
            .div(totalPrizes)
    )
}
