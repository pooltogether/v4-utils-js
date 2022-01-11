function calculateNumberOfPrizesForTierIndex(
  bitRangeSize: number,
  tierIndex: number
): number {
  let bitRangeDecimal = 2 ** bitRangeSize;
  let numberOfPrizesForIndex = bitRangeDecimal ** tierIndex;

  while (tierIndex > 0) {
    numberOfPrizesForIndex -= bitRangeDecimal ** (tierIndex - 1);
    tierIndex--;
  }

  return numberOfPrizesForIndex;
}

export default calculateNumberOfPrizesForTierIndex;
