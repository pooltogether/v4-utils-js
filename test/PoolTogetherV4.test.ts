import PoolTogetherV4, { config } from '../src';

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
      abi: []
    }]
}

describe('PoolTogetherV4', () => {
  it('should succeed to initialize PoolTogetherV4', async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, list)
    expect(pt4.isInitialized).toBeTruthy()
  });

  it('should succeed to get contract.', async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, list)
    const contract = pt4.getContract('0x000000000000000000000000000000000000dead')
    expect(contract?.address).toEqual('0x000000000000000000000000000000000000dead')
  });

  it('should succeed to get provider.', async () => {
    const pt4 = new PoolTogetherV4(config.providersAll, list)
    const provider = pt4.getProvider(1)
    expect(provider?._isProvider).toBeTruthy();
  });

});

