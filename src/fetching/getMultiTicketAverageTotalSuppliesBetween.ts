import { Contract } from "@ethersproject/contracts";
import { BigNumberish } from "ethers";

export async function getMultiTicketAverageTotalSuppliesBetween(tickets: Contract[], startTime?: BigNumberish, endTime?: BigNumberish): Promise<any | undefined> {
  if (!tickets || !startTime || !endTime) return undefined;
  return await Promise.all(tickets.map(async (contract) => {
    return (await contract.getAverageTotalSuppliesBetween(
      [startTime],
      [endTime]
    ))[0];
  }))

}

export default getMultiTicketAverageTotalSuppliesBetween