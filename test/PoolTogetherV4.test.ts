import PoolTogetherV4, { config } from "../src";
import { contactList, ADDRESS_DEAD } from './constants'

describe("PoolTogetherV4", () => {
  it("should succeed to initialize PoolTogetherV4", async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, contactList);
    expect(pt4.isInitialized).toBeTruthy();
  });

  it("should succeed to get contract.", async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, contactList);
    const contract = pt4.getContract(
      ADDRESS_DEAD
    );
    expect(contract?.interface).toBeTruthy();
  });

  it("should succeed to get provider.", async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, contactList);
    const provider = pt4.getProvider(1);
    expect(provider?._isProvider).toBeTruthy();
  });
});
