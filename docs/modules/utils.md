[@pooltogether/v4-js](../README.md) / [Exports](../modules.md) / utils

# Namespace: utils

## Table of contents

### Functions

- [filterResultsByValue](utils.md#filterresultsbyvalue)
- [findBitMatchesAtIndex](utils.md#findbitmatchesatindex)
- [formatTierToBasePercentage](utils.md#formattiertobasepercentage)
- [isDrawStructSet](utils.md#isdrawstructset)
- [isPrizeDistributionStructSet](utils.md#isprizedistributionstructset)
- [sanityCheckPrizeDistribution](utils.md#sanitycheckprizedistribution)
- [sumBigNumbers](utils.md#sumbignumbers)

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

[utils/filterResultsByValue.ts:7](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/filterResultsByValue.ts#L7)

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

[utils/findBitMatchesAtIndex.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/findBitMatchesAtIndex.ts#L5)

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

[utils/formatTierToBasePercentage.ts:5](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/formatTierToBasePercentage.ts#L5)

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

[utils/isDrawStructSet.ts:4](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/isDrawStructSet.ts#L4)

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

[utils/isPrizeDistributionStructSet.ts:4](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/isPrizeDistributionStructSet.ts#L4)

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

[utils/sanityCheckPrizeDistribution.ts:4](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/sanityCheckPrizeDistribution.ts#L4)

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

[utils/sumBigNumbers.ts:7](https://github.com/pooltogether/v4-js/blob/789649e/src/utils/sumBigNumbers.ts#L7)
