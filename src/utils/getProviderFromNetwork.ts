import { JsonRpcProvider } from "@ethersproject/providers";
import getJsonRpcProvider from "./getJsonRpcProvider";

import {
  NETWORK_URL_MAINNET,
  NETWORK_URL_RINKEBY,
  NETWORK_URL_GOERLI,
  NETWORK_URL_POLYGON_MAINNET,
  NETWORK_URL_POLYGON_MUMBAI,
} from "../config/networks";

export function getProviderFromNetwork(name: string): JsonRpcProvider {
  switch (name) {
    case "mainnet":
      return getJsonRpcProvider(NETWORK_URL_MAINNET);
    case "rinkeby":
      return getJsonRpcProvider(NETWORK_URL_RINKEBY);
    case "goerli":
      return getJsonRpcProvider(NETWORK_URL_GOERLI);
    case "polygon-mainnet":
      return getJsonRpcProvider(NETWORK_URL_POLYGON_MAINNET);
    case "polygon-mumbai":
      return getJsonRpcProvider(NETWORK_URL_POLYGON_MUMBAI);
    default:
      return getJsonRpcProvider(NETWORK_URL_MAINNET);
  }
}

export default getProviderFromNetwork;
