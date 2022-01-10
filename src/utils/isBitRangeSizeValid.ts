function isBitRangeSizeValid(
  bitRangeSize: number,
  matchCardinality: number
): boolean {
  return bitRangeSize <= Math.floor(256 / matchCardinality);
}

export default isBitRangeSizeValid;
