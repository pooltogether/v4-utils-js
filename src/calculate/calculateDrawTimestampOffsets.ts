import { Draw, PrizeConfig } from '../types';

export function calculateDrawTimestampOffsets(
    prizeConfig: PrizeConfig,
    draw: Draw
) {
    const endTimestampOffset = prizeConfig.endTimestampOffset;
    const startTimestampOffset = draw.beaconPeriodSeconds;
    const startTime = draw.timestamp.sub(startTimestampOffset);
    const endTime = draw.timestamp.sub(endTimestampOffset);

    return [startTime, endTime];
}

export default calculateDrawTimestampOffsets;
