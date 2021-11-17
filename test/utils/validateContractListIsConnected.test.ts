import { Contract } from "@ethersproject/contracts";
import {
  createContract,
  createInterface,
  getProviderFromChainId,
  validateContractListIsConnected,
} from "../../src";
import { ADDRESS_DEAD } from "../constants";

describe("validateContractListIsConnected", () => {
  it("should fail to validate connected contract list due to undefined contract", () => {
    const contracts: Array<Contract | undefined> = [undefined];
    expect(validateContractListIsConnected(contracts)).toBeFalsy();
  });

  it("should fail to validate connected contract list due to undefined provider", () => {
    const ABI: any = [];
    const contracts: Array<Contract | undefined> = [
      createContract(ADDRESS_DEAD, createInterface(ABI), undefined),
    ];
    expect(validateContractListIsConnected(contracts)).toBeFalsy();
  });

  it("should succed to validate connected contract list", () => {
    const ABI: any = [];
    const contracts: Array<Contract | undefined> = [
      createContract(
        ADDRESS_DEAD,
        createInterface(ABI),
        getProviderFromChainId(1)
      ),
    ];
    expect(validateContractListIsConnected(contracts)).toBeTruthy();
  });
});
