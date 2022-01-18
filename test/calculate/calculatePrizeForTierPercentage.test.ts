import { BigNumber, utils } from 'ethers';

import { calculatePrizeForTierPercentage } from '../../src';
import { formatTierPercentage } from '../../src/utils';

describe('calculatePrizeForTierPercentage()', () => {
    it('can calculate the prize awardable for the prize distribution and prize', async () => {
        const prizeReceivable = calculatePrizeForTierPercentage(
            1,
            formatTierPercentage('0.2'),
            4,
            utils.parseEther('100')
        );
        expect(prizeReceivable).toStrictEqual(
            BigNumber.from('0x1280f39a34855534')
        ); // 1.33333e18
    });
});
