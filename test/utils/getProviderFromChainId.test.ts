import { getProviderFromChainId } from "../../src";

describe("getProviderFromChainId", () => {

  it("should fail to get provider from an invalid chainId", () => {
    expect(getProviderFromChainId(500)).toBeUndefined()
  });

  it("should succeed to get provider from an valid chainId", () => {
    expect(getProviderFromChainId(1)).toBeTruthy()
  });

  it("should succeed to get every default provider from an valid chainId", () => {
    expect(getProviderFromChainId(1)).toBeTruthy()
    expect(getProviderFromChainId(4)).toBeTruthy()
    expect(getProviderFromChainId(5)).toBeTruthy()
    expect(getProviderFromChainId(137)).toBeTruthy()
    expect(getProviderFromChainId(80001)).toBeTruthy()
  });

});
