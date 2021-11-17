import { Wallet } from "@ethersproject/wallet";
import PoolTogetherV4, {
  isContractConnectedToSigner,
  createContract,
  createInterface,
  config,
} from "../../src";
import { contactList, ADDRESS_DEAD } from "../constants";

describe("isContractConnectedToSigner", () => {
  let pt4: PoolTogetherV4;

  beforeAll(() => {
    pt4 = new PoolTogetherV4(config.providers.providersAll, contactList);
  });

  it("should fail to validate if undefined is passed", () => {
    expect(isContractConnectedToSigner(undefined)).toBeFalsy();
  });

  it("should fail to validate contract is connected to signer", () => {
    const contract = pt4.getContract(ADDRESS_DEAD);
    expect(isContractConnectedToSigner(contract)).toBeFalsy();
  });

  it("should succeed to validate contract is connected to signer", () => {
    const ABI: any = [];
    const signer = Wallet.createRandom();
    const contract = createContract(ADDRESS_DEAD, createInterface(ABI), signer);
    expect(isContractConnectedToSigner(contract)).toBeTruthy();
  });
});
