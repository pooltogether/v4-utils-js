import { providers } from "ethers";
import { ContractList } from "@pooltogether/contract-list-schema";
import { Contract } from "@ethersproject/contracts";
import { getContract, getInterface } from "./utils";
import { Providers } from "./types";

export interface PoolTogetherV4Config {
  infuraApiKey: string;
}

export class PoolTogetherV4 {
  static instance: any;
  providers: Providers | undefined;
  contractList: ContractList | undefined;
  config: PoolTogetherV4Config | undefined;

  constructor(
    providers?: Providers,
    contractList?: ContractList,
    config?: PoolTogetherV4Config
  ) {
    if (!!PoolTogetherV4.instance) {
      return PoolTogetherV4.instance;
    }

    PoolTogetherV4.instance = this;
    this.providers = providers;
    this.contractList = contractList;
    this.config = config;
    return this;
  }

  getInfuraProvider(chainId: number): Provider | undefined {
    return !this.config
      ? undefined
      : new providers.InfuraProvider(chainId, this.config.infuraApiKey);
  }

  getProvider(chainId: number): Provider | undefined {
    return !this.providers ? undefined : this.providers[chainId];
  }

  async getProviders(chainIds: number[]) {
    return chainIds.map((chainId: number) => {
      return this.getProvider(chainId);
    });
  }

  getContract(address: string): Contract | undefined {
    if (!this.contractList) return undefined;
    const contract = this.contractList.contracts.find(
      (contract: any) => contract.address === address
    );
    if (!contract) return undefined;
    return getContract(
      contract.address,
      getInterface(contract.abi),
      this.getProvider(contract.chainId)
    );
  }

  getContracts(addressList: string[]): Contract[] | undefined {
    if (!addressList && !Array.isArray(addressList)) return undefined;
    return addressList.map((address: string): any => {
      return this.getContract(address);
    });
  }

  async getContractList() {
    return this.contractList;
  }
}

export default PoolTogetherV4;
