[@pooltogether/v4-utils-js](README.md) / Exports

# @pooltogether/v4-utils-js

## Table of contents

### References

- [calculateCardinality](modules.md#calculatecardinality)
- [calculateFractionOfPrize](modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](modules.md#calculatenormalizedbalancepicksfromtotalpicks)
- [calculateNumberOfMatches](modules.md#calculatenumberofmatches)
- [calculateNumberOfPrizesForTierIndex](modules.md#calculatenumberofprizesfortierindex)
- [calculatePick](modules.md#calculatepick)
- [calculatePicks](modules.md#calculatepicks)
- [calculatePicksFromAverageTotalSuppliesBetween](modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeForTierPercentage](modules.md#calculateprizefortierpercentage)
- [calculateTierIndexFromMatches](modules.md#calculatetierindexfrommatches)
- [computeDrawResults](modules.md#computedrawresults)
- [computePickPrize](modules.md#computepickprize)
- [computePicksPrizes](modules.md#computepicksprizes)
- [computePrizeAmount](modules.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](modules.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](modules.md#computeuserwinningpicksforrandomnumber)

### Namespaces

- [calculate](modules/calculate.md)
- [compute](modules/compute.md)
- [utils](modules/utils.md)

### Functions

- [computeWinningPicks](modules.md#computewinningpicks)
- [encodeWinningPicks](modules.md#encodewinningpicks)
- [winningPicks](modules.md#winningpicks)

## References

### calculateCardinality

Re-exports [calculateCardinality](modules/calculate.md#calculatecardinality)

___

### calculateFractionOfPrize

Re-exports [calculateFractionOfPrize](modules/calculate.md#calculatefractionofprize)

___

### calculateNormalizedBalancePicksFromTotalPicks

Re-exports [calculateNormalizedBalancePicksFromTotalPicks](modules/calculate.md#calculatenormalizedbalancepicksfromtotalpicks)

___

### calculateNumberOfMatches

Re-exports [calculateNumberOfMatches](modules/calculate.md#calculatenumberofmatches)

___

### calculateNumberOfPrizesForTierIndex

Re-exports [calculateNumberOfPrizesForTierIndex](modules/calculate.md#calculatenumberofprizesfortierindex)

___

### calculatePick

Re-exports [calculatePick](modules/calculate.md#calculatepick)

___

### calculatePicks

Re-exports [calculatePicks](modules/calculate.md#calculatepicks)

___

### calculatePicksFromAverageTotalSuppliesBetween

Re-exports [calculatePicksFromAverageTotalSuppliesBetween](modules/calculate.md#calculatepicksfromaveragetotalsuppliesbetween)

___

### calculatePrizeForTierPercentage

Re-exports [calculatePrizeForTierPercentage](modules/calculate.md#calculateprizefortierpercentage)

___

### calculateTierIndexFromMatches

Re-exports [calculateTierIndexFromMatches](modules/calculate.md#calculatetierindexfrommatches)

___

### computeDrawResults

Re-exports [computeDrawResults](modules/compute.md#computedrawresults)

___

### computePickPrize

Re-exports [computePickPrize](modules/compute.md#computepickprize)

___

### computePicksPrizes

Re-exports [computePicksPrizes](modules/compute.md#computepicksprizes)

___

### computePrizeAmount

Re-exports [computePrizeAmount](modules/compute.md#computeprizeamount)

___

### computePrizeDistributionFromTicketAverageTotalSupplies

Re-exports [computePrizeDistributionFromTicketAverageTotalSupplies](modules/compute.md#computeprizedistributionfromticketaveragetotalsupplies)

___

### computeUserPicks

Re-exports [computeUserPicks](modules/compute.md#computeuserpicks)

___

### computeUserWinningPicksForRandomNumber

Re-exports [computeUserWinningPicksForRandomNumber](modules/compute.md#computeuserwinningpicksforrandomnumber)

## Functions

### computeWinningPicks

▸ **computeWinningPicks**(`user`, `draws`, `prizeDistributions`): `DrawResults`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |
| `draws` | `Draw`[] |
| `prizeDistributions` | `PrizeDistribution`[] |

#### Returns

`DrawResults`[]

#### Defined in

[computeWinningPicks.ts:4](https://github.com/pooltogether/v4-js/blob/fc653a7/src/computeWinningPicks.ts#L4)

___

### encodeWinningPicks

▸ **encodeWinningPicks**(`user`, `drawResults`): `Claim`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |
| `drawResults` | `DrawResults`[] |

#### Returns

`Claim`

#### Defined in

[encodeWinningPicks.ts:7](https://github.com/pooltogether/v4-js/blob/fc653a7/src/encodeWinningPicks.ts#L7)

___

### winningPicks

▸ **winningPicks**(`user`, `draws`, `prizeDistributions`): `Claim`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |
| `draws` | `Draw`[] |
| `prizeDistributions` | `PrizeDistribution`[] |

#### Returns

`Claim`

#### Defined in

[winningPicks.ts:5](https://github.com/pooltogether/v4-js/blob/fc653a7/src/winningPicks.ts#L5)
