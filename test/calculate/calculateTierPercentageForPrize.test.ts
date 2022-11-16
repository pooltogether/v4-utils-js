import { BigNumber, utils } from 'ethers';

import { calculateTierPercentageForPrize } from '../../src';

describe('calculateTierPercentageForPrize', () => {
    // examples from oct. 2022 distribution
    it('can calculate the tier percentage of a 1-prize tier', async () => {
        const tierPercentage = calculateTierPercentageForPrize(
            0,
            utils.parseUnits('200', 6),
            1,
            utils.parseUnits('1512', 6)
        );
        expect(tierPercentage).toStrictEqual(
            BigNumber.from('132275132')
        );
    });
    it('can calculate the tier percentage of a multi-prize tier', async () => {
        const tierPercentage = calculateTierPercentageForPrize(
            4,
            utils.parseUnits('5', 6),
            1,
            utils.parseUnits('1512', 6)
        );
        expect(tierPercentage).toStrictEqual(
            BigNumber.from('26455026')
        );
    });
    it('can calculate the tier percentage of a prize tier with different token decimals', async () => {
        const tierPercentage = calculateTierPercentageForPrize(
            0,
            utils.parseUnits('200', 9),
            1,
            utils.parseUnits('1512', 9)
        );
        expect(tierPercentage).toStrictEqual(
            BigNumber.from('132275132')
        );
    });
});
