import PoolTogetherV4, {
  isContractConnectedToProvider,
  config,
  createContract,
  createInterface,
} from "../../src";
import { contactList, ADDRESS_DEAD } from "../constants";

describe("isContractConnectedToProvider", () => {
  let pt4: PoolTogetherV4;
  beforeAll(() => {
    pt4 = new PoolTogetherV4(config.providers.providersAll, contactList);
  });

  it("should fail to validate if undefined is passed", () => {
    expect(isContractConnectedToProvider(undefined)).toBeFalsy();
  });

  it("should fail to validate contract is connected to provider", () => {
    const ABI: any = []
    const contract = createContract(ADDRESS_DEAD, createInterface(ABI))
    expect(isContractConnectedToProvider(contract)).toBeFalsy();
  });

  it("should succeed to validate contract is connected to provider", () => {
    const contract = pt4.getContract(ADDRESS_DEAD);
    expect(isContractConnectedToProvider(contract)).toBeTruthy();
  });

});
