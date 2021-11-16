import PoolTogetherV4, { isContractConnectedToSigner, config } from "../../src";
import { contactList, ADDRESS_DEAD } from "../constants";

describe("isContractConnectedToSigner", () => {
  let pt4: PoolTogetherV4;
  beforeAll(() => {
    pt4 = new PoolTogetherV4(config.providers.providersAll, contactList);
  });

  it("should not be connected to a signer", () => {
    const contract = pt4.getContract(ADDRESS_DEAD);
    expect(isContractConnectedToSigner(contract)).toBeFalsy();
  });
});
