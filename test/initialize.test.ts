import { initialize, config } from "../src";

const list = {
  name: "Mainnet ContractList",
  version: { major: 1, minor: 0, patch: 0 },
  tags: {},
  contracts: [
    {
      chainId: 1,
      address: "0x000000000000000000000000000000000000dead",
      version: { major: 1, minor: 0, patch: 0 },
      type: "ContractName",
      abi: [],
    },
  ],
};

describe("initialize", () => {
  it("should succeed to initialize PoolTogetherV4 using the initialize function", async () => {
    const pt4 = initialize(config.providersAll, list);
    expect(pt4.isInitialized).toBeTruthy();
  });
});
