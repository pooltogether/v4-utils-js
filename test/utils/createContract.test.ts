import { Wallet } from "@ethersproject/wallet";
import { createContract, createInterface } from "../../src";
import { ADDRESS_DEAD } from '../constants'
describe("createContract", () => {

  it("should fail to create contract object with undefined function inputs", () => {
    const contract = createContract(undefined, undefined)
    expect(contract).toBeUndefined()
  });

  it("should fail to create contract object with undefined address inputs", () => {
    const contract = createContract(undefined, createInterface([]))
    expect(contract).toBeUndefined()
  });
  it("should fail to create contract object with undefined Intercace inputs", () => {
    const contract = createContract(ADDRESS_DEAD, undefined)
    expect(contract).toBeUndefined()
  });

  it("should succeed to get provider from an valid chainId", () => {
    const ABI: any = []
    const wallet = Wallet.createRandom()
    const contract = createContract(ADDRESS_DEAD, createInterface(ABI), wallet)
    expect(contract).toBeTruthy()
  });


});
