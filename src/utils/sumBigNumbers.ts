import { BigNumber } from "ethers";

function sumTwoBigNumbers(bn1: BigNumber, bn2: BigNumber): BigNumber {
  console.log(bn1, 'bn1')
  console.log(bn2, 'bn2')
  return bn1.add(bn2)
}

export function sumBigNumbers(numbers: BigNumber[]) {
  return numbers.reduce(sumTwoBigNumbers)
}