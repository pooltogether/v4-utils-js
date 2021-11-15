import { Contract } from "@ethersproject/contracts";

export function isContractConnectedToSigner(contract?: Contract): boolean {
  return !!contract?.signer;
}

export default isContractConnectedToSigner;
