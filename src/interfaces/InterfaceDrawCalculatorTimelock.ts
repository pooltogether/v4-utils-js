import { Interface } from "@ethersproject/abi";

import ABI_DrawCalculatorTimelock from "@pooltogether/v4-timelocks/abis/DrawCalculatorTimelock.json";

export const InterfaceDrawCalculatorTimelock = new Interface(
  ABI_DrawCalculatorTimelock
);
