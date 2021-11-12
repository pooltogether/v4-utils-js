import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import {
  JsonRpcProvider,
  Web3Provider,
  Provider,
} from "@ethersproject/providers";

export const createContract = (
  address: string,
  contractInterface: Interface,
  provider?: Provider | JsonRpcProvider | Web3Provider
): Contract | undefined => {
  if (!address || !contractInterface) return undefined;
  return new Contract(address, contractInterface, provider);
};

export default createContract;