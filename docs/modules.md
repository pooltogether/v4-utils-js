[@pooltogether/v4-utils-js](README.md) / Exports

# @pooltogether/v4-utils-js

## Table of contents

### Namespaces

- [utils](modules/utils.md)

### Functions

- [batchCalculateDrawResults](modules.md#batchcalculatedrawresults)
- [calculateDrawResults](modules.md#calculatedrawresults)
- [calculateFractionOfPrize](modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](modules.md#calculateNormalizedBalancePicksFromTotalPicks)
- [calculateNumberOfPrizesForTierIndex](modules.md#calculateNumberOfPrizesForTierIndex)
- [computePickPrize](modules.md#computePickPrize)
- [calculatePicksFromAverageTotalSuppliesBetween](modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [computePrizeAmount](modules.md#computePrizeAmount)
- [calculatePrizeForTierPercentage](modules.md#calculatePrizeForTierPercentage)
- [calculateCardinality](modules.md#calculateCardinality)
- [computeDrawResults](modules.md#computedrawresults)
- [calculatePick](modules.md#calculatePick)
- [calculatePicks](modules.md#calculatePicks)
- [computePrizeDistributionFromTicketAverageTotalSupplies](modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [generatePicks](modules.md#generatepicks)
- [prepareClaims](modules.md#prepareclaims)
- [sortByBigNumberAsc](modules.md#sortbybignumberasc)
- [sortByBigNumberDesc](modules.md#sortbybignumberdesc)

## Functions

### batchCalculateDrawResults

▸ **batchCalculateDrawResults**(`prizeDistribution`, `draws`, `user`): `DrawResults`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution`[] |
| `draws` | `Draw`[] |
| `user` | `User` |

#### Returns

`DrawResults`[]

#### Defined in

[batchCalculateDrawResults.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/batchCalculateDrawResults.ts#L6)

___

### calculateDrawResults

▸ **calculateDrawResults**(`prizeDistribution`, `draw`, `user`, `drawIndex?`): `DrawResults`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` | `undefined` |
| `draw` | `Draw` | `undefined` |
| `user` | `User` | `undefined` |
| `drawIndex` | `number` | `0` |

#### Returns

`DrawResults`

#### Defined in

[calculateDrawResults.ts:10](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculateDrawResults.ts#L10)

___

### calculateFractionOfPrize

▸ **calculateFractionOfPrize**(`prizeDistributionIndex`, `prizeDistribution`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistributionIndex` | `number` |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`BigNumber`

#### Defined in

[calculateFractionOfPrize.ts:9](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculateFractionOfPrize.ts#L9)

___

### calculateNormalizedBalancePicksFromTotalPicks

▸ **calculateNormalizedBalancePicksFromTotalPicks**(`drawSettings`, `normalizedBalance`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawSettings` | `PrizeDistribution` |
| `normalizedBalance` | `BigNumber` |

#### Returns

`number`

#### Defined in

[calculateNormalizedBalancePicksFromTotalPicks.ts:5](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculateNormalizedBalancePicksFromTotalPicks.ts#L5)

___

### calculateNumberOfPrizesForTierIndex

▸ **calculateNumberOfPrizesForTierIndex**(`bitRangeSize`, `prizeDistributionIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `number` |
| `prizeDistributionIndex` | `number` |

#### Returns

`number`

#### Defined in

[calculateNumberOfPrizesForTierIndex.ts:1](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculateNumberOfPrizesForTierIndex.ts#L1)

___

### computePickPrize

▸ **computePickPrize**(`randomNumberThisPick`, `winningRandomNumber`, `prizeDistribution`): `PickPrize` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `randomNumberThisPick` | `string` |
| `winningRandomNumber` | `BigNumber` |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`PickPrize` \| `undefined`

#### Defined in

[computePickPrize.ts:10](https://github.com/pooltogether/v4-js/blob/082f5ed/src/computePickPrize.ts#L10)

___

### calculatePicksFromAverageTotalSuppliesBetween

▸ **calculatePicksFromAverageTotalSuppliesBetween**(`totalPicks`, `ticketPrimaryTotalSupply`, `otherTicketsTotalSupply`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `totalPicks` | `number` |
| `ticketPrimaryTotalSupply` | `BigNumber` |
| `otherTicketsTotalSupply` | `BigNumber` |

#### Returns

`number` \| `undefined`

#### Defined in

[calculatePicksFromAverageTotalSuppliesBetween.ts:7](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculatePicksFromAverageTotalSuppliesBetween.ts#L7)

___

### computePrizeAmount

▸ **computePrizeAmount**(`prizeDistribution`, `matches`): `PickPrize` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |
| `matches` | `number` |

#### Returns

`PickPrize` \| `undefined`

#### Defined in

[computePrizeAmount.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/computePrizeAmount.ts#L6)

___

### calculatePrizeForTierPercentage

▸ **calculatePrizeForTierPercentage**(`distributionIndex`, `prizeDistrbution`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distributionIndex` | `number` |
| `prizeDistrbution` | `PrizeDistribution` |

#### Returns

`BigNumber`

#### Defined in

[calculatePrizeForTierPercentage.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculatePrizeForTierPercentage.ts#L6)

___

### calculateCardinality

▸ **calculateCardinality**(`bitRangeSize`, `totalSupply`, `totalSupplyDecimals`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `BigNumber` |
| `totalSupply` | `BigNumber` |
| `totalSupplyDecimals` | `BigNumber` |

#### Returns

`number`

#### Defined in

[calculateCardinality.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculateCardinality.ts#L6)

___

### computeDrawResults

▸ **computeDrawResults**(`drawSettings`, `draw`, `picks`): `DrawResults`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawSettings` | `PrizeDistribution` |
| `draw` | `Draw` |
| `picks` | `Pick`[] |

#### Returns

`DrawResults`

#### Defined in

[computeDrawResults.ts:13](https://github.com/pooltogether/v4-js/blob/082f5ed/src/computeDrawResults.ts#L13)

___

### calculatePick

▸ **calculatePick**(`address`, `pick`): `Pick`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `pick` | `number` |

#### Returns

`Pick`

#### Defined in

[calculatePick.ts:7](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculatePick.ts#L7)

___

### calculatePicks

▸ **calculatePicks**(`address`, `pickIndices`): `Pick`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `pickIndices` | `BigNumber`[] |

#### Returns

`Pick`[]

#### Defined in

[calculatePicks.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/calculatePicks.ts#L6)

___

### computePrizeDistributionFromTicketAverageTotalSupplies

▸ **computePrizeDistributionFromTicketAverageTotalSupplies**(`draw`, `prizeTier?`, `ticketPrimaryAverageTotalSupply?`, `ticketSecondaryListAverageTotalSupply?`, `decimals?`): `Promise`<`PrizeDistribution` \| `undefined`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `draw` | `Draw` | `undefined` |
| `prizeTier?` | `PrizeTier` | `undefined` |
| `ticketPrimaryAverageTotalSupply?` | `BigNumberish` | `undefined` |
| `ticketSecondaryListAverageTotalSupply?` | `BigNumberish`[] | `undefined` |
| `decimals` | `BigNumberish` | `18` |

#### Returns

`Promise`<`PrizeDistribution` \| `undefined`\>

#### Defined in

[computePrizeDistributionFromTicketAverageTotalSupplies.ts:14](https://github.com/pooltogether/v4-js/blob/082f5ed/src/computePrizeDistributionFromTicketAverageTotalSupplies.ts#L14)

___

### generatePicks

▸ **generatePicks**(`prizeDistribution`, `address`, `normalizedBalance`): `Pick`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |
| `address` | `string` |
| `normalizedBalance` | `BigNumber` |

#### Returns

`Pick`[]

#### Defined in

[generatePicks.ts:7](https://github.com/pooltogether/v4-js/blob/082f5ed/src/generatePicks.ts#L7)

___

### prepareClaims

▸ **prepareClaims**(`user`, `drawResults`): `Claim`

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | `User` |
| `drawResults` | `DrawResults`[] |

#### Returns

`Claim`

#### Defined in

[prepareClaims.ts:7](https://github.com/pooltogether/v4-js/blob/082f5ed/src/prepareClaims.ts#L7)

___

### sortByBigNumberAsc

▸ `Const` **sortByBigNumberAsc**(`a`, `b`): ``0`` \| ``1`` \| ``-1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BigNumber` |
| `b` | `BigNumber` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

[sortByBigNumber.ts:3](https://github.com/pooltogether/v4-js/blob/082f5ed/src/sortByBigNumber.ts#L3)

___

### sortByBigNumberDesc

▸ `Const` **sortByBigNumberDesc**(`a`, `b`): ``0`` \| ``1`` \| ``-1``

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `BigNumber` |
| `b` | `BigNumber` |

#### Returns

``0`` \| ``1`` \| ``-1``

#### Defined in

[sortByBigNumber.ts:10](https://github.com/pooltogether/v4-js/blob/082f5ed/src/sortByBigNumber.ts#L10)
