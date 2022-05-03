import { BigNumber } from 'ethers';

function computeTotalPicks(
    bitRange: number,
    cardinality: number,
    totalPoolStaked: BigNumber,
    gaugeScaledAverage: BigNumber
): BigNumber {
    const totalChances = BigNumber.from(2)
        .pow(bitRange)
        .pow(cardinality);
    return gaugeScaledAverage.mul(totalChances).div(totalPoolStaked);
}

export default computeTotalPicks;
