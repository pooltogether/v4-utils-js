import { Contract } from "@ethersproject/contracts";
import { isContractConnectedToProvider } from './isContractConnectedToProvider'

export function validateContractListIsConnected(contracts: Array<Contract | undefined>): boolean {
  for (let index = 0; index < contracts.length; index++) {
    const element = contracts[index];
    if (!element) throw new Error(`Contract is undefined`)
    if (!isContractConnectedToProvider(element)) throw new Error(`Contract ${element.address} is not connected to a provider`)
  }
  return true
}

export default validateContractListIsConnected;
