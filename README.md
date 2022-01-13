<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

# 🧰 Javascript Utilility Library || PoolTogether V4
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
![Tests](https://github.com/pooltogether/v4-utils-js/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-utils-js/badge.svg?branch=master)](https://coveralls.io/github/pooltogether/v4-utils-js?branch=master)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

[Contracts](https://github.com/pooltogether/v4-core) | [Documentation](https://docs.pooltogether.com/) | [Frontend Client](https://github.com/pooltogether/v4-js-client) | [Draw Calculator](https://github.com/pooltogether/draw-calculator-cli) | [API](https://github.com/pooltogether/v4-draw-results)


## Calculations, Computations and Core Logic

The `v4-utils-js` is a Javascript module to assist with off-chain calculations and computations in the PoolTogether V4 protocol. 

**Caclulations:**

Basic arithmatic and operations for the V4 protocol: cardinality, number of picks, hashed address.

- [calculateCardinality](docs/modules.md#calculatecardinality)
- [calculateFractionOfPrize](docs/modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](docs/modules.md#calculatenormalizedbalancepicksfromtotalpicks)
- [calculateNumberOfMatches](docs/modules.md#calculatenumberofmatches)
- [calculateNumberOfPrizesForTierIndex](docs/modules.md#calculatenumberofprizesfortierindex)
- [calculatePick](docs/modules.md#calculatepick)
- [calculatePicks](docs/modules.md#calculatepicks)
- [calculatePicksFromAverageTotalSuppliesBetween](docs/modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeForTierPercentage](docs/modules.md#calculateprizefortierpercentage)
- [calculateTierIndexFromMatches](docs/modules.md#calculatetierindexfrommatches)

**Computations:** 

Consume protocol current/potential state (Draws/PrizeDistributions) and return computed outcomes.

- [computeDrawResults](docs/modules.md#computedrawresults)
- [computePickPrize](docs/modules.md#computepickprize)
- [computePicksPrizes](docs/modules.md#computepicksprizes)
- [computePrizeAmount](docs/modules.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](docs/modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](docs/modules.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](docs/modules.md#computeuserwinningpicksforrandomnumber)
- [computeWinningPicks](docs/modules.md#computewinningpicks)

**Core:**

Gain insights into the protocol state by analyzing and encoding historical chain state.

- [encodeWinningPicks](docs/modules.md#encodewinningpicks)
- [winningPicks](docs/modules.md#winningpicks)

*Potential Additions*

- poolAverageYieldBetweenTimestamps
- userAverageYieldBetweenTimestamps
- oddsPerPrizeTierUsingNormalizedBalance
- encodeDrawPercentageRateAtomicUpdatesAcrossChains

# 💾 Installation

This project is available as an NPM package:

```sh
npm install @pooltogether/v4-utils-js
```

```sh
yarn add @pooltogether/v4-utils-js
```

The repo can be cloned from Github for contributions.

```sh
git clone https://github.com/pooltogether/v4-utis-js
```

# 💻 Developer Experience

The package is setup using the TSDX zero-config CLI tool. Which includes:

- Typescript
- Rollup
- Jest
- Prettier
- ESLint

**Minor changes are made to extend the default configuration.**

## ESLint

The TSDX linting configuration is overwritten to include override(s).

- Import/Order (used to enforce consistent module import ordering)

# 🏆 Quickstart (Claim Winning Picks)

Core utility functions like `winningPicks(user, draw, prizeDistribution)` calculate, compute and encode any EVM chain compatible transaction with the maximum number of winning picks using the input arguments.

In short, if you just need to calulcate winning picks and claim prizes the `winningPicks` function is for you 👋 
```ts
import { Wallet } from '@ethersproject/wallet';
import { providers } from '@ethersproject/provider';
import { winningPicks, computeWinningPicks, encodeWinningPicks } from '@pooltogether/v4-utils-js';

// Compute and Encode Winning Picks Seperately
const computedPicks = computeWinningPicks(user, [draw], [prizeDistribution]);
const encodePicks = encodeWinningPicks(user, computedWinningPicks);

// Compute and Encode Winning Picks Together
const computedAndEncodedWinningPicks = winningPicks(user, [draw], [prizeDistribution]);

// Send Encoded Transaction to Mainnet
const wallet = Wallet.createRandom().connect(providers.getDefaultProvider())
wallet.sendTransaction(computedAndEncodedWinningPicks.encodedWinningPickIndices)

```


# 🪜 Examples

```ts
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { winningPicks, utils } from '@pooltogether/v4-utils-js';

const user = {
    address: '0x0000000000000000000000000000000000000001',
    normalizedBalances: [
        parseEther('0.1'), // 10% of totalSupply
    ],
};

const draw = {
    drawId: 1,
    winningRandomNumber: BigNumber.from(
        '0x0000000000000000000000000000000000000000000000000000000000000001'
    ),
};

const prizeDistribution = {
    bitRangeSize: 4,
    matchCardinality: 10,
    numberOfPicks: 1000,
    prize: parseEther('1000'),
    maxPicksPerUser: 30,
    tiers: [
        // Tier prizeAmount is 100% split between 10 tiers. 
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        utils.formatTierPercentage('0.1'),
        0,
        0,
        0,
        0,
        0,
        0,
    ],
};

const generatedPicks = winningPicks(user, [draw], [prizeDistribution]);
```

# 📖 Documentation

### Namespaces

- [utils](docs/modules/utils.md)

### Functions

- [calculateCardinality](docs/modules.md#calculatecardinality)
- [calculateFractionOfPrize](docs/modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](docs/modules.md#calculatenormalizedbalancepicksfromtotalpicks)
- [calculateNumberOfMatches](docs/modules.md#calculatenumberofmatches)
- [calculateNumberOfPrizesForTierIndex](docs/modules.md#calculatenumberofprizesfortierindex)
- [calculatePick](docs/modules.md#calculatepick)
- [calculatePicks](docs/modules.md#calculatepicks)
- [calculatePicksFromAverageTotalSuppliesBetween](docs/modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeForTierPercentage](docs/modules.md#calculateprizefortierpercentage)
- [calculateTierIndexFromMatches](docs/modules.md#calculatetierindexfrommatches)
- [computeDrawResults](docs/modules.md#computedrawresults)
- [computePickPrize](docs/modules.md#computepickprize)
- [computePicksPrizes](docs/modules.md#computepicksprizes)
- [computePrizeAmount](docs/modules.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](docs/modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](docs/modules.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](docs/modules.md#computeuserwinningpicksforrandomnumber)
- [computeWinningPicks](docs/modules.md#computewinningpicks)
- [encodeWinningPicks](docs/modules.md#encodewinningpicks)
- [winningPicks](docs/modules.md#winningpicks)

## Functions

### calculateCardinality

▸ **calculateCardinality**(`bitRangeSize`, `totalSupply`, `decimals`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `BigNumberish` |
| `totalSupply` | `BigNumberish` |
| `decimals` | `BigNumberish` |

#### Returns

`number`

#### Defined in

[calculate/calculateCardinality.ts:6](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateCardinality.ts#L6)

___

### calculateFractionOfPrize

▸ **calculateFractionOfPrize**(`tierTotalPrizes`, `tierValue`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tierTotalPrizes` | `BigNumberish` |
| `tierValue` | `BigNumberish` |

#### Returns

`BigNumber`

#### Defined in

[calculate/calculateFractionOfPrize.ts:4](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateFractionOfPrize.ts#L4)

___

### calculateNormalizedBalancePicksFromTotalPicks

▸ **calculateNormalizedBalancePicksFromTotalPicks**(`numberOfPicks`, `normalizedBalance`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberOfPicks` | `BigNumberish` |
| `normalizedBalance` | `BigNumberish` |

#### Returns

`BigNumber`

#### Defined in

[calculate/calculateNormalizedBalancePicksFromTotalPicks.ts:3](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateNormalizedBalancePicksFromTotalPicks.ts#L3)

___

### calculateNumberOfMatches

▸ **calculateNumberOfMatches**(`pickNumber`, `winningRandomNumber`, `matchCardinality`, `bitRangeSize`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pickNumber` | `BigNumberish` |
| `winningRandomNumber` | `BigNumberish` |
| `matchCardinality` | `number` |
| `bitRangeSize` | `number` |

#### Returns

`number`

#### Defined in

[calculate/calculateNumberOfMatches.ts:5](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateNumberOfMatches.ts#L5)

___

### calculateNumberOfPrizesForTierIndex

▸ **calculateNumberOfPrizesForTierIndex**(`bitRangeSize`, `tierIndex`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitRangeSize` | `number` |
| `tierIndex` | `number` |

#### Returns

`number`

#### Defined in

[calculate/calculateNumberOfPrizesForTierIndex.ts:1](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateNumberOfPrizesForTierIndex.ts#L1)

___

### calculatePick

▸ **calculatePick**(`address`, `pick`): `Pick`

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `pick` | `BigNumberish` |

#### Returns

`Pick`

#### Defined in

[calculate/calculatePick.ts:6](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculatePick.ts#L6)

___

### calculatePicks

▸ **calculatePicks**(`address`, `picks`): `Pick`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `picks` | `BigNumber`[] |

#### Returns

`Pick`[]

#### Defined in

[calculate/calculatePicks.ts:6](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculatePicks.ts#L6)

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

[calculate/calculatePicksFromAverageTotalSuppliesBetween.ts:7](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculatePicksFromAverageTotalSuppliesBetween.ts#L7)

___

### calculatePrizeForTierPercentage

▸ **calculatePrizeForTierPercentage**(`tierIndex`, `tierValue`, `bitRangeSize`, `prizeAmount`): `BigNumber`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tierIndex` | `number` |
| `tierValue` | `BigNumberish` |
| `bitRangeSize` | `number` |
| `prizeAmount` | `BigNumber` |

#### Returns

`BigNumber`

#### Defined in

[calculate/calculatePrizeForTierPercentage.ts:6](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculatePrizeForTierPercentage.ts#L6)

___

### calculateTierIndexFromMatches

▸ **calculateTierIndexFromMatches**(`matchCardinality`, `numberOfMatches`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matchCardinality` | `number` |
| `numberOfMatches` | `number` |

#### Returns

`number`

#### Defined in

[calculate/calculateTierIndexFromMatches.ts:1](https://github.com/pooltogether/v4-js/blob/58aa21e/src/calculate/calculateTierIndexFromMatches.ts#L1)

___

### computeDrawResults

▸ **computeDrawResults**(`draw`, `picks`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): `DrawResults`

#### Parameters

| Name | Type |
| :------ | :------ |
| `draw` | `Draw` |
| `picks` | `Pick`[] |
| `bitRangeSize` | `number` |
| `matchCardinality` | `number` |
| `prize` | `BigNumber` |
| `tiers` | `any`[] |

#### Returns

`DrawResults`

#### Defined in

[compute/computeDrawResults.ts:10](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computeDrawResults.ts#L10)

___

### computePickPrize

▸ **computePickPrize**(`pickHash`, `winningRandomNumber`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): `PickPrize`

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

`PickPrize`

#### Defined in

[compute/computePickPrize.ts:8](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computePickPrize.ts#L8)

___

### computePicksPrizes

▸ **computePicksPrizes**(`picks`, `winningRandomNumber`, `bitRangeSize`, `matchCardinality`, `prize`, `tiers`): `PickPrize`[]

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

`PickPrize`[]

#### Defined in

[compute/computePicksPrizes.ts:6](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computePicksPrizes.ts#L6)

___

### computePrizeAmount

▸ **computePrizeAmount**(`tierIndex`, `tierValue`, `bitRangeSize`, `prizeAmount`): `PickPrize`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tierIndex` | `number` |
| `tierValue` | `BigNumberish` |
| `bitRangeSize` | `number` |
| `prizeAmount` | `BigNumber` |

#### Returns

`PickPrize`

#### Defined in

[compute/computePrizeAmount.ts:8](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computePrizeAmount.ts#L8)

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

[compute/computePrizeDistributionFromTicketAverageTotalSupplies.ts:12](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computePrizeDistributionFromTicketAverageTotalSupplies.ts#L12)

___

### computeUserPicks

▸ **computeUserPicks**(`totalNumberOfPicks`, `address`, `normalizedBalance`): `Pick`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `totalNumberOfPicks` | `BigNumberish` |
| `address` | `string` |
| `normalizedBalance` | `BigNumber` |

#### Returns

`Pick`[]

#### Defined in

[compute/computeUserPicks.ts:10](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computeUserPicks.ts#L10)

___

### computeUserWinningPicksForRandomNumber

▸ **computeUserWinningPicksForRandomNumber**(`randomNumber`, `bitRangeSize`, `matchCardinality`, `numberOfPicks`, `prize`, `tiers`, `userAddress`, `userNormalizedBalance`): `DrawResults`

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

`DrawResults`

#### Defined in

[compute/computeUserWinningPicksForRandomNumber.ts:11](https://github.com/pooltogether/v4-js/blob/58aa21e/src/compute/computeUserWinningPicksForRandomNumber.ts#L11)

___

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

computeWinningPicks.ts:4

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

encodeWinningPicks.ts:7

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

winningPicks.ts:5
