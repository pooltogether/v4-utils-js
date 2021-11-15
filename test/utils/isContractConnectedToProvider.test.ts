import PoolTogetherV4, { isContractConnectedToProvider, config } from "../../src";
import { contactList, ADDRESS_DEAD } from '../constants'

describe("isContractConnectedToProvider", () => {
  let pt4: PoolTogetherV4;
  beforeAll(() => {
    pt4 = new PoolTogetherV4(config.providersAll, contactList);
  });

  it("should connect contract to mainnet provider", () => {
    const contract = pt4.getContract(ADDRESS_DEAD)
    expect(isContractConnectedToProvider(contract)).toBeTruthy()
  });
});
