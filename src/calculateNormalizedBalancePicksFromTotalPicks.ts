import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

function calculateNormalizeBalancePicksFromTotalPicks(
  numberOfPicks: BigNumberish,
  normalizedBalance: BigNumberish
): BigNumber {
  if (!numberOfPicks || !normalizedBalance) return BigNumber.from(0);
  return BigNumber.from(numberOfPicks)
    .mul(BigNumber.from(normalizedBalance))
    .div(BigNumber.from("1000000000000000000"))
}

export default calculateNormalizeBalancePicksFromTotalPicks
