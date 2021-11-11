import { JsonRpcProvider } from "@ethersproject/providers";
import { Contract } from "@ethersproject/contracts";
import { InterfaceTicket, InterfacePrizeTierHistory } from "../interfaces";
import { getContract } from "./getContract";

export function getContractFromAddressAndName(
  name: string,
  address: string,
  provider?: JsonRpcProvider
): Contract | undefined {
  switch (name) {
    case "Ticket":
      return getContract(address, InterfaceTicket, provider);
    case "PrizeTierHistory":
      return getContract(address, InterfacePrizeTierHistory, provider);
    default:
      return undefined;
  }
}

export default getContractFromAddressAndName;
