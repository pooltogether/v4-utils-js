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
- [computeWinningPicks](modules.md#computewinningpicks)

### Namespaces

- [calculate](modules/calculate.md)
- [compute](modules/compute.md)
- [utils](modules/utils.md)

### Functions

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

___

### computeWinningPicks

Re-exports [computeWinningPicks](modules/compute.md#computewinningpicks)

## Functions

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

[encodeWinningPicks.ts:7](https://github.com/pooltogether/v4-utils-js/blob/37c7c03/src/encodeWinningPicks.ts#L7)

___

### winningPicks

▸ **winningPicks**(`user`, `draws`, `prizeDistributions`): `Claim`

**`description`** Computes a User's winning picks for multiple Draws and returns an encoded transaction.

**`dev`** Before computation/encoding of winning picks the historical blockchain state must be first fetched.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `user` | `User` | Includes an account address and a list of normalized balances. |
| `draws` | `Draw`[] | Draw(s) should be fetched from DrawHistory contract |
| `prizeDistributions` | `PrizeDistribution`[] | PrizeDistribution(s) should be fetched from PrizeTierHistory contract |

#### Returns

`Claim`

Computed winning picks and encoded transaction ready for broadcast to an EVM blockchain.

#### Defined in

[winningPicks.ts:13](https://github.com/pooltogether/v4-utils-js/blob/37c7c03/src/winningPicks.ts#L13)
