import { BigNumber, BigNumberish } from 'ethers';

export const calculateTotalSupplyOfPicks = (
    bitRange: BigNumberish,
    cardinality: number
): number => (2 ** BigNumber.from(bitRange).toNumber()) ** cardinality;

export default calculateTotalSupplyOfPicks;
