import { BigNumber, ethers } from "ethers";
import { calculateNumberOfPrizesForIndex } from '../helpers/calculateNumberOfPrizesForIndex'

/**
 * Calculates the total prize payout for tiers defined absolutely.
 * 
 * @remarks
 * Given tier prizes of [2500, 800], that means there is 1 $2500 prize and 3 $800 prizes. This function
 * will add them all up.
 * 
 * @param bitRangeSize The bit range to use.  Determines the number of prizes per tier
 * @param tierPrizes The prize tiers defined in terms of absolute prize value.
 */
export function computePrizeFromAbsolutePrizes(bitRangeSize: number, tierPrizes: BigNumber[]): BigNumber {
    return tierPrizes.reduce((tot: BigNumber, tierPrize: BigNumber, index: number): BigNumber => {
        return tot.add( tierPrize.mul(calculateNumberOfPrizesForIndex(bitRangeSize, index)) )
    }, ethers.BigNumber.from('0'))
}