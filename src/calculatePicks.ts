import { Contract } from '@ethersproject/contracts';
import { ethers } from 'ethers';

export async function calculatePicks(
  bitRange: number,
  cardinality: number,
  startTime: number,
  endTime: number,
  ticket: Contract,
  otherTicket: Contract
) {
  const totalPicks = (2 ** bitRange) ** cardinality;
  const ticketTotalSupply = (
    await ticket.getAverageTotalSuppliesBetween([startTime], [endTime])
  )[0];

  const otherTicketTotalSupply = (
    await otherTicket.getAverageTotalSuppliesBetween([startTime], [endTime])
  )[0];

  let numberOfPicks;
  if (ticketTotalSupply.gt('0')) {
    numberOfPicks = ticketTotalSupply
      .mul(totalPicks)
      .div(otherTicketTotalSupply.add(ticketTotalSupply));
  } else {
    numberOfPicks = ethers.BigNumber.from('0');
  }
  console.log(`returning numberOfPicks ${Math.floor(numberOfPicks)}`);
  return Math.floor(numberOfPicks);
}

export default calculatePicks;
