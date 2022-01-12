function calculateTierIndexFromMatches(
    matchCardinality: number,
    numberOfMatches: number
) {
    return matchCardinality - numberOfMatches;
}

export default calculateTierIndexFromMatches;
