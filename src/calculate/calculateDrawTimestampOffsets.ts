import { Draw, PrizeDistribution } from '../types';

export function calculateDrawTimestampOffsets(
    prizeDistribution: PrizeDistribution,
    draw: Draw
) {
    const endTimestampOffset = prizeDistribution.endTimestampOffset;
    const startTimestampOffset = draw.beaconPeriodSeconds;
    const startTime = draw.timestamp.sub(startTimestampOffset);
    const endTime = draw.timestamp.sub(endTimestampOffset);

    return [startTime, endTime];
}

export default calculateDrawTimestampOffsets;
