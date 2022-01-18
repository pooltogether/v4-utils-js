import { BigNumber } from '@ethersproject/bignumber';

import { calculatePicks } from '../../src';
import { BYTES32_ADDRESS_DEAD } from '../constants';

describe('calculatePicks', () => {
    it('should compute 3 pick hashes for the dEaD address', () => {
        const pickIndices = [
            BigNumber.from(1),
            BigNumber.from(2),
            BigNumber.from(3),
        ];
        const computedPicks = calculatePicks(BYTES32_ADDRESS_DEAD, pickIndices);
        const expectation = [
            {
                index: 1,
                hash:
                    '0xd00ec6c495550eaa8a1e79222613c4e8ee4a21ff586ddf2689d7cf0e6b21f239',
            },
            {
                index: 2,
                hash:
                    '0xc63472b6b175026c4a244ab337ce7ebcd9093e0c643c47dae1a72a7af8eee1cf',
            },
            {
                index: 3,
                hash:
                    '0x11eb4a21702ee65bb646ffe0fc4f9ec14587852d6a9c8c33ba36cd61b815442e',
            },
        ];
        expect(computedPicks[0]).toEqual(expectation[0]);
        expect(computedPicks[1]).toEqual(expectation[1]);
        expect(computedPicks[2]).toEqual(expectation[2]);
    });
});
