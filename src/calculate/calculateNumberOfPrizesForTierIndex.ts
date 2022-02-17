function calculateNumberOfPrizesForTierIndex(
    bitRangeSize: number,
    tierIndex: number
): number {
    if (tierIndex > 0) {
        return (
            (1 << (bitRangeSize * tierIndex)) -
            (1 << (bitRangeSize * (tierIndex - 1)))
        );
    } else {
        return 1;
    }
}

export default calculateNumberOfPrizesForTierIndex;
