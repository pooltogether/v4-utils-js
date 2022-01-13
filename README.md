@pooltogether/v4-utils-js / [Exports](docs/modules.md)

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

The `@pooltogether/v4-utils-js` [node module package](https://www.npmjs.com/package/@pooltogether/v4-utils-js) provides calculations, computations and core logic for PoolTogether V4 protocol.

Assisting with low-level tasks like hashing addresses to generate picks and calculating the total number of prizes for a prize tier.

Additionally, high-order operations like filtering for a users winning picks and processing chain state (draws, prizeDistributions, etc..) to analyze/predict short and long term outcomes are included.

[Open an Issue](https://github.com/pooltogether/v4-utils-js/issues) to request new features.

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

*Potential Additions:*

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
git clone https://github.com/pooltogether/v4-utils-js
```

# 💻 Developer Experience

The package is setup using the [TSDX zero-config CLI](https://tsdx.io/) which includes:

- Typescript
- Rollup
- Jest
- Prettier
- ESLint

**Minor changes have been made to extend the default configuration.**

### ESLint

The TSDX linting configuration is overwritten to include override(s)* for:

- Import/Order (used to enforce consistent module import ordering)

###### *The ESLint overrides may incorrectly be interpreted by VSCode since the nested config file is ignored in the IDE

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
wallet.send(computedAndEncodedWinningPicks.encodedWinningPickIndices)

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
/**
userAddress: string;
drawIds: number[];
winningPickIndices: BigNumber[][];
encodedWinningPickIndices: string;
* -------------------
userAddress: '0x0000000000000000000000000000000000000001',
drawIds: [1],
winningPickIndices: [[1]],
encodedWinningPickIndices: '0x000...2000...0001'
* /
```

# 📖 Documentation

### Namespaces

- [calculate](docs/modules/calculate.md)
- [compute](docs/modules/compute.md)
- [utils](docs/modules/utils.md)

### References

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
