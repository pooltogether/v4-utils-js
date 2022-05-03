import { parseUnits } from '@ethersproject/units';
import { BigNumber } from 'ethers';
import { PrizeTier } from '../../src/types';

import { formatTierPercentage, sanityCheckPrizeTier } from '../../src/utils';

describe('sanityCheckPrizeTier', () => {
    it('should fail to sanity check a PrizeTier with invalid bitrange', () => {
        const PRIZE_TIER_INVALID: PrizeTier = {
            bitRangeSize: 256,
            matchCardinality: 2,
            tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            maxPicksPerUser: 0,
            expiryDuration: 0,
            prize: BigNumber.from('0'),
            endTimestampOffset: 0,
            drawId: 0,
            poolStakeTotal: BigNumber.from('1'),
        };
        const prizeTier = sanityCheckPrizeTier(PRIZE_TIER_INVALID);
        expect(prizeTier).toEqual('DrawCalc/bitRangeSize-too-large');
    });

    it('should fail to sanity check a PrizeTier with invalid tiers', () => {
        const PRIZE_TIER_INVALID: PrizeTier = {
            bitRangeSize: 2,
            matchCardinality: 10,
            tiers: [
                formatTierPercentage('0.5'),
                formatTierPercentage('0.4'),
                formatTierPercentage('0.2'),
                formatTierPercentage('0.2'),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            maxPicksPerUser: 0,
            expiryDuration: 0,
            prize: BigNumber.from('0'),
            endTimestampOffset: 0,
            drawId: 0,
            poolStakeTotal: BigNumber.from('1'),
        };
        const prizeTier = sanityCheckPrizeTier(PRIZE_TIER_INVALID);
        expect(prizeTier).toEqual('DrawCalc/tiers-gt-100%');
    });

    it('should succeed to sanity check an a valid PrizeTier', () => {
        const PRIZE_TIER_VALID: PrizeTier = {
            bitRangeSize: 2,
            matchCardinality: 10,
            tiers: [
                formatTierPercentage('0.25'),
                formatTierPercentage('0.05'),
                formatTierPercentage('0.5'),
                formatTierPercentage('0.2'),
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            maxPicksPerUser: 2,
            expiryDuration: 5184000,
            prize: parseUnits('5000', 18),
            endTimestampOffset: 900,
            drawId: 0,
            poolStakeTotal: BigNumber.from('1'),
        };
        const prizeTier = sanityCheckPrizeTier(PRIZE_TIER_VALID);
        expect(prizeTier).toEqual('');
    });
});
