import { keccak256 } from '@ethersproject/solidity';

function hashUserAddress(address: string) {
    return keccak256(['address'], [address]);
}

export default hashUserAddress;
