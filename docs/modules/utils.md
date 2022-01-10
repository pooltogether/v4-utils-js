[@pooltogether/v4-utils-js](../README.md) / [Exports](../modules.md) / utils

# Namespace: utils

## Table of contents

### Functions

- [filterResultsByValue](utils.md#filterresultsbyvalue)
- [findBitMatchesAtIndex](utils.md#findbitmatchesatindex)
- [formatDistributionNumber](utils.md#formatdistributionnumber)
- [formatTierToBasePercentage](utils.md#formattiertobasepercentage)
- [isDrawStructSet](utils.md#isdrawstructset)
- [isPrizeDistributionStructSet](utils.md#isprizedistributionstructset)
- [sanityCheckPrizeDistribution](utils.md#sanitycheckprizedistribution)
- [sumBigNumbers](utils.md#sumbignumbers)
- [throwErrorInvalidPrizeDistribution](utils.md#throwerrorinvalidprizedistribution)

## Functions

### filterResultsByValue

▸ **filterResultsByValue**(`drawResults`, `maxPicksPerUser`): `DrawResults`

#### Parameters

| Name | Type |
| :------ | :------ |
| `drawResults` | `DrawResults` |
| `maxPicksPerUser` | `number` |

#### Returns

`DrawResults`

#### Defined in

[utils/filterResultsByValue.ts:8](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/filterResultsByValue.ts#L8)

___

### findBitMatchesAtIndex

▸ **findBitMatchesAtIndex**(`word1`, `word2`, `matchIndex`, `bitRangeSize`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `word1` | `BigNumber` |
| `word2` | `BigNumber` |
| `matchIndex` | `number` |
| `bitRangeSize` | `number` |

#### Returns

`boolean`

#### Defined in

[utils/findBitMatchesAtIndex.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/findBitMatchesAtIndex.ts#L6)

___

### formatDistributionNumber

▸ `Const` **formatDistributionNumber**(`distribution`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distribution` | `string` |

#### Returns

`number`

#### Defined in

[utils/formatDistributionNumber.ts:3](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/formatDistributionNumber.ts#L3)

___

### formatTierToBasePercentage

▸ **formatTierToBasePercentage**(`distribution`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `distribution` | `string` |

#### Returns

`BigNumber`

#### Defined in

[utils/formatTierToBasePercentage.ts:6](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/formatTierToBasePercentage.ts#L6)

___

### isDrawStructSet

▸ **isDrawStructSet**(`draw`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `draw` | `Draw` |

#### Returns

`boolean`

#### Defined in

[utils/isDrawStructSet.ts:4](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/isDrawStructSet.ts#L4)

___

### isPrizeDistributionStructSet

▸ **isPrizeDistributionStructSet**(`prizeDistribution`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`boolean`

#### Defined in

[utils/isPrizeDistributionStructSet.ts:4](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/isPrizeDistributionStructSet.ts#L4)

___

### sanityCheckPrizeDistribution

▸ **sanityCheckPrizeDistribution**(`prizeDistribution`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`string`

#### Defined in

[utils/sanityCheckPrizeDistribution.ts:5](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/sanityCheckPrizeDistribution.ts#L5)

___

### sumBigNumbers

▸ **sumBigNumbers**(`numbers`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numbers` | `BigNumber`[] |

#### Returns

`BigNumber`

#### Defined in

[utils/sumBigNumbers.ts:7](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/sumBigNumbers.ts#L7)

___

### throwErrorInvalidPrizeDistribution

▸ **throwErrorInvalidPrizeDistribution**(`prizeDistribution`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prizeDistribution` | `PrizeDistribution` |

#### Returns

`void`

#### Defined in

[utils/throwErrorInvalidPrizeDistribution.ts:4](https://github.com/pooltogether/v4-js/blob/082f5ed/src/utils/throwErrorInvalidPrizeDistribution.ts#L4)
