import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

import { findBitMatchesAtIndex } from '../utils';

function calculateNumberOfMatches(
    pickNumber: BigNumberish,
    winningRandomNumber: BigNumberish,
    matchCardinality: number,
    bitRangeSize: number
) {
    let numberOfMatches = 0;
    const _pickNumber = BigNumber.from(pickNumber);
    const _winningRandomNumber = BigNumber.from(winningRandomNumber);
    for (let matchIndex = 0; matchIndex < matchCardinality; matchIndex++) {
        if (
            !findBitMatchesAtIndex(
                _pickNumber,
                _winningRandomNumber,
                matchIndex,
                bitRangeSize
            )
        ) {
            break;
        }
        numberOfMatches++;
    }

    return numberOfMatches;
}

export default calculateNumberOfMatches;
