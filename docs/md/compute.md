#  compute

## Table of contents

### Functions

- [computeDrawResults](compute.md#computedrawresults)
- [computePickPrize](compute.md#computepickprize)
- [computePicksPrizes](compute.md#computepicksprizes)
- [computePrizeAmount](compute.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](compute.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](compute.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](compute.md#computeuserwinningpicksforrandomnumber)
- [computeWinningPicks](compute.md#computewinningpicks)

## Functions

### computeDrawResults

▸ **computeDrawResults**(`draw`, `picks`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): [`DrawResults`](../modules#drawresults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `draw` | [`Draw`](../modules#draw) |
| `picks` | [`Pick`](../modules#pick)[] |
| `bitRangeSize` | `number` |
| `matchCardinality` | `number` |
| `prize` | `BigNumber` |
| `tiers` | `any`[] |

#### Returns

[`DrawResults`](../modules#drawresults)

#### Defined in

[compute/computeDrawResults.ts:10](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computeDrawResults.ts#L10)

___

### computePickPrize

▸ **computePickPrize**(`pickHash`, `winningRandomNumber`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): [`PickPrize`](../modules#pickprize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickHash` | `string` |
| `winningRandomNumber` | `BigNumber` |
| `bitRangeSize` | `number` |
| `matchCardinality` | `number` |
| `prize` | `BigNumber` |
| `tiers` | `any`[] |

#### Returns

[`PickPrize`](../modules#pickprize)

#### Defined in

[compute/computePickPrize.ts:8](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computePickPrize.ts#L8)

___

### computePicksPrizes

▸ **computePicksPrizes**(`picks`, `winningRandomNumber`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): [`PickPrize`](../modules#pickprize)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `picks` | `any`[] |
| `winningRandomNumber` | `BigNumber` |
| `bitRangeSize` | `number` |
| `matchCardinality` | `number` |
| `prize` | `BigNumber` |
| `tiers` | `any`[] |

#### Returns

[`PickPrize`](../modules#pickprize)[]

#### Defined in

[compute/computePicksPrizes.ts:6](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computePicksPrizes.ts#L6)

___

### computePrizeAmount

▸ **computePrizeAmount**(`tierIndex`, `tierValue`, `bitRangeSize`, `prizeAmount`): [`PickPrize`](../modules#pickprize)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tierIndex` | `number` |
| `tierValue` | `BigNumberish` |
| `bitRangeSize` | `number` |
| `prizeAmount` | `BigNumber` |

#### Returns

[`PickPrize`](../modules#pickprize)

#### Defined in

[compute/computePrizeAmount.ts:8](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computePrizeAmount.ts#L8)

___

### computePrizeDistributionFromTicketAverageTotalSupplies

▸ **computePrizeDistributionFromTicketAverageTotalSupplies**(`draw`, `prizeTier?`, `ticketPrimaryAverageTotalSupply?`, `ticketSecondaryListAverageTotalSupply?`, `decimals?`): `Promise`<[`PrizeDistribution`](../modules#prizedistribution) \| `undefined`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `draw` | [`Draw`](../modules#draw) | `undefined` |
| `prizeTier?` | [`PrizeTier`](../modules#prizetier) | `undefined` |
| `ticketPrimaryAverageTotalSupply?` | `BigNumberish` | `undefined` |
| `ticketSecondaryListAverageTotalSupply?` | `BigNumberish`[] | `undefined` |
| `decimals` | `BigNumberish` | `18` |

#### Returns

`Promise`<[`PrizeDistribution`](../modules#prizedistribution) \| `undefined`\>

#### Defined in

[compute/computePrizeDistributionFromTicketAverageTotalSupplies.ts:12](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computePrizeDistributionFromTicketAverageTotalSupplies.ts#L12)

___

### computeUserPicks

▸ **computeUserPicks**(`totalNumberOfPicks`, `address`, `normalizedBalance`): [`Pick`](../modules#pick)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `totalNumberOfPicks` | `BigNumberish` |
| `address` | `string` |
| `normalizedBalance` | `BigNumber` |

#### Returns

[`Pick`](../modules#pick)[]

#### Defined in

[compute/computeUserPicks.ts:10](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computeUserPicks.ts#L10)

___

### computeUserWinningPicksForRandomNumber

▸ **computeUserWinningPicksForRandomNumber**(`randomNumber`, `bitRangeSize`, `matchCardinality`, `numberOfPicks`, `prize`, `tiers`, `userAddress`, `userNormalizedBalance`): [`DrawResults`](../modules#drawresults)

#### Parameters

| Name | Type |
| :------ | :------ |
| `randomNumber` | `BigNumberish` |
| `bitRangeSize` | `number` |
| `matchCardinality` | `number` |
| `numberOfPicks` | `BigNumberish` |
| `prize` | `BigNumberish` |
| `tiers` | `any`[] |
| `userAddress` | `string` |
| `userNormalizedBalance` | `BigNumberish` |

#### Returns

[`DrawResults`](../modules#drawresults)

#### Defined in

[compute/computeUserWinningPicksForRandomNumber.ts:11](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computeUserWinningPicksForRandomNumber.ts#L11)

___

### computeWinningPicks

▸ **computeWinningPicks**(`user`, `draws`, `prizeDistributions`): [`DrawResults`](../modules#drawresults)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `user` | [`User`](../modules#user) |
| `draws` | [`Draw`](../modules#draw)[] |
| `prizeDistributions` | [`PrizeDistribution`](../modules#prizedistribution)[] |

#### Returns

[`DrawResults`](../modules#drawresults)[]

#### Defined in

[compute/computeWinningPicks.ts:4](https://github.com/pooltogether/v4-utils-js/blob/775b28c/src/compute/computeWinningPicks.ts#L4)
