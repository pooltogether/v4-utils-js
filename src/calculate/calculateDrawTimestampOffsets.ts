export function calculateDrawTimestampOffsets(prizeTier: any, draw: any) {
    const endTimestampOffset = prizeTier.endTimestampOffset;
    const startTimestampOffset = draw.beaconPeriodSeconds;
    const startTime = draw.timestamp - startTimestampOffset;
    const endTime = draw.timestamp - endTimestampOffset;

    return [startTime, endTime];
}

export default calculateDrawTimestampOffsets;
