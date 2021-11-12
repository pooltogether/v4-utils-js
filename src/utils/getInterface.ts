import { Interface } from "@ethersproject/abi";

export function getInterface(abi: any) {
  return new Interface(abi);
}

export default getInterface;
