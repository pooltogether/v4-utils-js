import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { keccak256, pack } from '@ethersproject/solidity';

import { Pick } from '../types';

/**
 * Calculates the random number for a pick for a user at a given index.
 * @param address
 * @param pickIndex
 * @returns
 */
function calculatePick(address: string, pickIndex: BigNumberish): Pick {
    const _pickIndex = BigNumber.from(pickIndex);
    const abiEncodedValue = pack(['bytes32', 'uint256'], [address, _pickIndex]);
    const userRandomNumber = keccak256(['address'], [abiEncodedValue]);
    return {
        index: _pickIndex.toNumber(),
        hash: userRandomNumber,
    };
}

export default calculatePick;
