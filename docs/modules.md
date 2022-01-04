[@pooltogether/v4-js](README.md) / Exports

# @pooltogether/v4-js

## Table of contents

### Namespaces

- [utils](modules/utils.md)

### Functions

- [batchCalculateDrawResults](modules.md#batchcalculatedrawresults)
- [calculateDrawResults](modules.md#calculatedrawresults)
- [calculateFractionOfPrize](modules.md#calculatefractionofprize)
- [calculateNumberOfPicksForUser](modules.md#calculatenumberofpicksforuser)
- [calculateNumberOfPrizesForIndex](modules.md#calculatenumberofprizesforindex)
- [calculatePickPrize](modules.md#calculatepickprize)
- [calculatePicksFromAverageTotalSuppliesBetween](modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeAmount](modules.md#calculateprizeamount)
- [calculatePrizeForDistributionIndex](modules.md#calculateprizefordistributionindex)
- [computeCardinality](modules.md#computecardinality)
- [computeDrawResults](modules.md#computedrawresults)
- [computePick](modules.md#computepick)
- [computePicks](modules.md#computepicks)
- [computePrizeDistributionFromTicketAverageTotalSupplies](modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [generatePicks](modules.md#generatepicks)
- [prepareClaims](modules.md#prepareclaims)

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

[batchCalculateDrawResults.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/batchCalculateDrawResults.ts#L5)

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

[calculateDrawResults.ts:10](https://github.com/pooltogether/v4-js/blob/789649e/src/calculateDrawResults.ts#L10)

___

### calculateFractionOfPrize

▸ **calculateFractionOfPrize**(`prizeDistributionIndex`, `drawSettings`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistributionIndex` | `number` |
| `drawSettings` | `PrizeDistribution` |

#### Returns

`BigNumber`

#### Defined in

[calculateFractionOfPrize.ts:7](https://github.com/pooltogether/v4-js/blob/789649e/src/calculateFractionOfPrize.ts#L7)

___

### calculateNumberOfPicksForUser

▸ **calculateNumberOfPicksForUser**(`drawSettings`, `normalizedBalance`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawSettings` | `PrizeDistribution` |
| `normalizedBalance` | `BigNumber` |

#### Returns

`number`

#### Defined in

[calculateNumberOfPicksForUser.ts:4](https://github.com/pooltogether/v4-js/blob/789649e/src/calculateNumberOfPicksForUser.ts#L4)

___

### calculateNumberOfPrizesForIndex

▸ **calculateNumberOfPrizesForIndex**(`bitRangeSize`, `prizeDistributionIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `number` |
| `prizeDistributionIndex` | `number` |

#### Returns

`number`

#### Defined in

[calculateNumberOfPrizesForIndex.ts:1](https://github.com/pooltogether/v4-js/blob/789649e/src/calculateNumberOfPrizesForIndex.ts#L1)

___

### calculatePickPrize

▸ **calculatePickPrize**(`randomNumberThisPick`, `winningRandomNumber`, `prizeDistribution`): `PickPrize` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `randomNumberThisPick` | `string` |
| `winningRandomNumber` | `BigNumber` |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`PickPrize` \| `undefined`

#### Defined in

[calculatePickPrize.ts:9](https://github.com/pooltogether/v4-js/blob/789649e/src/calculatePickPrize.ts#L9)

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

[calculatePicksFromAverageTotalSuppliesBetween.ts:6](https://github.com/pooltogether/v4-js/blob/789649e/src/calculatePicksFromAverageTotalSuppliesBetween.ts#L6)

___

### calculatePrizeAmount

▸ **calculatePrizeAmount**(`prizeDistribution`, `matches`): `PickPrize` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |
| `matches` | `number` |

#### Returns

`PickPrize` \| `undefined`

#### Defined in

[calculatePrizeAmount.ts:7](https://github.com/pooltogether/v4-js/blob/789649e/src/calculatePrizeAmount.ts#L7)

___

### calculatePrizeForDistributionIndex

▸ **calculatePrizeForDistributionIndex**(`distributionIndex`, `prizeDistrbution`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distributionIndex` | `number` |
| `prizeDistrbution` | `PrizeDistribution` |

#### Returns

`BigNumber`

#### Defined in

[calculatePrizeForDistributionIndex.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/calculatePrizeForDistributionIndex.ts#L5)

___

### computeCardinality

▸ **computeCardinality**(`bitRangeSize`, `totalSupply`, `totalSupplyDecimals`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `BigNumber` |
| `totalSupply` | `BigNumber` |
| `totalSupplyDecimals` | `BigNumber` |

#### Returns

`number`

#### Defined in

[computeCardinality.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/computeCardinality.ts#L5)

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

[computeDrawResults.ts:12](https://github.com/pooltogether/v4-js/blob/789649e/src/computeDrawResults.ts#L12)

___

### computePick

▸ **computePick**(`address`, `pick`): `Pick`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `pick` | `number` |

#### Returns

`Pick`

#### Defined in

[computePick.ts:6](https://github.com/pooltogether/v4-js/blob/789649e/src/computePick.ts#L6)

___

### computePicks

▸ **computePicks**(`address`, `pickIndices`): `Pick`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `pickIndices` | `BigNumber`[] |

#### Returns

`Pick`[]

#### Defined in

[computePicks.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/computePicks.ts#L5)

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

[computePrizeDistributionFromTicketAverageTotalSupplies.ts:12](https://github.com/pooltogether/v4-js/blob/789649e/src/computePrizeDistributionFromTicketAverageTotalSupplies.ts#L12)

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

[generatePicks.ts:6](https://github.com/pooltogether/v4-js/blob/789649e/src/generatePicks.ts#L6)

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

[prepareClaims.ts:4](https://github.com/pooltogether/v4-js/blob/789649e/src/prepareClaims.ts#L4)
