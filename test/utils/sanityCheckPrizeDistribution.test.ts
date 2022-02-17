import { parseUnits } from '@ethersproject/units';
import { BigNumber } from 'ethers';

import {
    formatTierPercentage,
    sanityCheckPrizeDistribution,
} from '../../src/utils';

describe('sanityCheckPrizeDistribution', () => {
    it('should fail to sanity check a PrizeDistribution with invalid bitrange', () => {
        const PRIZE_DISTRIBUTION_INVALID = {
            bitRangeSize: 256,
            matchCardinality: 2,
            tiers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            maxPicksPerUser: 0,
            expiryDuration: 0,
            numberOfPicks: BigNumber.from('0'),
            startTimestampOffset: 0,
            prize: BigNumber.from('0'),
            endTimestampOffset: 0,
        };
        const prizeDistribution = sanityCheckPrizeDistribution(
            PRIZE_DISTRIBUTION_INVALID
        );
        expect(prizeDistribution).toEqual('DrawCalc/bitRangeSize-too-large');
    });

    it('should fail to sanity check a PrizeDistribution with invalid tiers', () => {
        const PRIZE_DISTRIBUTION_INVALID = {
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
            numberOfPicks: BigNumber.from('0'),
            startTimestampOffset: 0,
            prize: BigNumber.from('0'),
            endTimestampOffset: 0,
        };
        const prizeDistribution = sanityCheckPrizeDistribution(
            PRIZE_DISTRIBUTION_INVALID
        );
        expect(prizeDistribution).toEqual('DrawCalc/tiers-gt-100%');
    });

    it('should succeed to sanity check an a valid PrizeDistribution', () => {
        const PRIZE_DISTRIBUTION_VALID = {
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
            numberOfPicks: BigNumber.from('1000'),
            startTimestampOffset: 86400,
            prize: parseUnits('5000', 18),
            endTimestampOffset: 900,
        };
        const prizeDistribution = sanityCheckPrizeDistribution(
            PRIZE_DISTRIBUTION_VALID
        );
        expect(prizeDistribution).toEqual('');
    });
});
