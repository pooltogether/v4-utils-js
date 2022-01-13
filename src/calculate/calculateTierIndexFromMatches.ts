function calculateTierIndexFromMatches(
    matchCardinality: number,
    numberOfMatches: number
) {
    if (numberOfMatches > matchCardinality)
        throw new Error(
            'numberOfMatches cannot be greater than matchCardinality'
        );
    return matchCardinality - numberOfMatches;
}

export default calculateTierIndexFromMatches;
