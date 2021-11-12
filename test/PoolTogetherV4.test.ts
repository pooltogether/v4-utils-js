import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data'
import PoolTogetherV4, { config } from '../src';
// const debug = require("debug")("v4-js-core:test");

describe('PoolTogetherV4.test', () => {
  beforeAll(() => {
    new PoolTogetherV4(config.providersAll, mainnetContractList)
  })

  it('should succeed', async () => {

  });
});

