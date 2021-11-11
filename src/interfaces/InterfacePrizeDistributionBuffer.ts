import { Interface } from "@ethersproject/abi";

import ABI_PrizeDistributionBuffer from "@pooltogether/v4-core/abis/PrizeDistributionBuffer.json";

export const InterfacePrizeDistributionBuffer = new Interface(
  ABI_PrizeDistributionBuffer
);
