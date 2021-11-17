import { Contract } from "@ethersproject/contracts";
import { isContractConnectedToProvider } from "./isContractConnectedToProvider";

export function validateContractListIsConnected(
  contracts: Array<Contract | undefined>
): boolean {
  for (let index = 0; index < contracts.length; index++) {
    const element = contracts[index];
    if (typeof element === 'undefined' || !isContractConnectedToProvider(element)) {
      return false
    }

  }
  return true;
}

export default validateContractListIsConnected;
