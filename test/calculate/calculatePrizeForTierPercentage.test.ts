import { expect } from 'chai';
import { BigNumber, utils } from 'ethers';

import { calculatePrizeForTierPercentage } from '../../src';
import { formatTierPercentage } from '../../src/utils';

describe('calculatePrizeForTierPercentage()', () => {
    it('can calculate the prize awardable for the prize distribution and prize', async () => {
        // distributionIndex = matchCardinality - numberOfMatches = 3 - 2 = 1
        // tiers[1] = 0.2e9 = prizeAtIndex
        // const numberOfPrizes = 2 ^ (bitRangeSize ^ distributionIndex) - 2 ^ (bitRangeSize ^ distributionIndex - 1)= 2 ^ (4 ^ 1) = 16 - 1 = 15
        // fractionOfPrize = prizeAtIndex / numberOfPrizes = 0.2e9 / 15 = 1.333e7
        // prizeAwardable = prize * fractionOfPrize = 100e18 * 1.333e7 = 1.333e21
        // div by 1e9 = 1.33333e18

        const prizeReceivable = calculatePrizeForTierPercentage(
            1,
            formatTierPercentage('0.2'),
            4,
            utils.parseEther('100')
        );
        expect(prizeReceivable).to.deep.equal(
            BigNumber.from('0x1280f39a34855534')
        ); // 1.33333e18
    });
});
