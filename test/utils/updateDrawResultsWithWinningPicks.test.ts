import { BigNumber } from 'ethers';

import {
    createDrawResultsObject,
    updateDrawResultsWithWinningPicks,
} from '../../src/utils';

describe('updateDrawResultsWithWinningPicks', () => {
    it('should return a valid DrawResults object', () => {
        const pickPrizes = [
            {
                tierIndex: 1,
                value: BigNumber.from(1),
                amount: BigNumber.from(1),
            },
        ];
        const userPicks = [
            {
                index: 1,
                hash: '0x000',
            },
        ];
        expect(
            updateDrawResultsWithWinningPicks(
                pickPrizes,
                createDrawResultsObject(1),
                userPicks
            )
        ).toEqual({
            drawId: 1,
            totalValue: BigNumber.from(1),
            prizes: [
                {
                    amount: BigNumber.from(1),
                    tierIndex: 1,
                    pick: BigNumber.from(1),
                    value: BigNumber.from(1),
                },
            ],
        });
    });
});
