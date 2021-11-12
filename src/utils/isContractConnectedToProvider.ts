import { Contract } from "@ethersproject/contracts";

export function isContractConnectedToProvider(contract: Contract): boolean {
  return !!contract.provider;
}

export default isContractConnectedToProvider;
