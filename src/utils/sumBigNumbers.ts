import { BigNumber, BigNumberish } from '@ethersproject/bignumber';

export function sumTwoBigNumbers(
    bn1: BigNumberish,
    bn2: BigNumberish
): BigNumber {
    return BigNumber.from(bn1).add(BigNumber.from(bn2));
}

export function sumBigNumbers(numbers: BigNumberish[]): BigNumberish {
    return numbers.reduce(sumTwoBigNumbers, BigNumber.from(0));
}
