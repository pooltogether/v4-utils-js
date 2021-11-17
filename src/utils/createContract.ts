import { Interface } from "@ethersproject/abi";
import { Contract } from "@ethersproject/contracts";
import { BaseProvider } from "@ethersproject/providers";
import { Signer } from "@ethersproject/abstract-signer";
import { Wallet } from "@ethersproject/wallet";

export const createContract = (
  address?: string,
  contractInterface?: Interface,
  provider?: BaseProvider | Signer | Wallet
): Contract | undefined => {
  if (!address || !contractInterface) return undefined;
  return new Contract(address, contractInterface, provider);
};

export default createContract;
