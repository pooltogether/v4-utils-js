import { Draw, PrizeDistribution } from '../types';

export function calculateDrawTimestampOffsets(
    prizeDistribution: PrizeDistribution,
    draw: Draw
) {
    const endTimestampOffset = prizeDistribution.endTimestampOffset;
    const startTimestampOffset = draw.beaconPeriodSeconds;
    const startTime = draw.timestamp - startTimestampOffset;
    const endTime = draw.timestamp - endTimestampOffset;

    return [startTime, endTime];
}

export default calculateDrawTimestampOffsets;
