import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { findBitMatchesAtIndex } from "./utils";

function calculateNumberOfMatches(
    pickNumber: BigNumberish,
    winningRandomNumber: BigNumberish,
    matchCardinality: number,
    bitRangeSize: number,
) {
    const _pickNumber = BigNumber.from(pickNumber);
    const _winningRandomNumber = BigNumber.from(winningRandomNumber);
    let numberOfMatches = 0;
    for (
        let matchIndex = 0;
        matchIndex < matchCardinality;
        matchIndex++
      ) {
        if (
          !findBitMatchesAtIndex(
            _pickNumber,
            _winningRandomNumber,
            matchIndex,
            bitRangeSize
          )
        ) {
          break;
        }
        numberOfMatches++;
      }

    return numberOfMatches;
}

export default calculateNumberOfMatches;