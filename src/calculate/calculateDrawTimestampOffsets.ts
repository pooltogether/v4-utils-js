import { BigNumber } from 'ethers';

export function calculateDrawTimestampOffsets(
    endTimestampOffset: number,
    beaconPeriodSeconds: number,
    drawTimestamp: BigNumber
) {
    const startTime = drawTimestamp.sub(beaconPeriodSeconds);
    const endTime = drawTimestamp.sub(endTimestampOffset);
    return { startTime, endTime };
}

export default calculateDrawTimestampOffsets;
