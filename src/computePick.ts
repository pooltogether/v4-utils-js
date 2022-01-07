import { BigNumber, ethers } from 'ethers';

import { Pick } from './types';

const debug = require('debug')('pt:v4-utils-js');

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
