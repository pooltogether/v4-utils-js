import { Draw, PrizeTier } from '../types';

export function calculateDrawTimestampOffsets(
    prizeTier: PrizeTier,
    draw: Draw
) {
    const endTimestampOffset = prizeTier.endTimestampOffset;
    const startTimestampOffset = draw.beaconPeriodSeconds;
    const startTime = draw.timestamp.sub(startTimestampOffset);
    const endTime = draw.timestamp.sub(endTimestampOffset);

    return [startTime, endTime];
}

export default calculateDrawTimestampOffsets;
