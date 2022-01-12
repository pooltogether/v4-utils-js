import { BigNumber, BigNumberish } from '@ethersproject/bignumber';
import { keccak256, pack } from '@ethersproject/solidity';

import { Pick } from '../types';

function calculatePick(address: string, pick: BigNumberish): Pick {
    const _pick = BigNumber.from(pick);
    const abiEncodedValue = pack(
        ['bytes32', 'uint256'],
        [address, _pick]
    );
    const userRandomNumber = keccak256(
        ['address'],
        [abiEncodedValue]
    );
    return {
        index: _pick.toNumber(),
        hash: userRandomNumber,
    };
}

export default calculatePick;
