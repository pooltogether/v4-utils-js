import PoolTogetherV4 from "./PoolTogetherV4";
import { ContractList } from "@pooltogether/contract-list-schema";
import { Providers } from "./types";

export function initialize(providers: Providers, contractList: ContractList) {
  return new PoolTogetherV4(providers, contractList);
}

export default initialize;
