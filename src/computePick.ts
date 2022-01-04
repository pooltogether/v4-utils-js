import { Pick } from './types';
import { BigNumber, ethers } from 'ethers';

const debug = require('debug')('pt:v4-core-js');

function computePick(address: string, pick: number): Pick {
  debug(`computePick::address is ${address} and pick ${pick}`);
  const abiEncodedValue = ethers.utils.solidityPack(
    ['bytes32', 'uint256'],
    [address, pick]
  );
  const userRandomNumber = ethers.utils.solidityKeccak256(
    ['address'],
    [abiEncodedValue]
  );

  debug(
    `computePick::userRandomNumber is ${BigNumber.from(
      userRandomNumber
    ).toString()}`
  );
  return {
    index: pick,
    hash: userRandomNumber,
  };
}

export default computePick;
