<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

# 🧰 Javascript Utilility Library - PoolTogether V4
![Tests](https://github.com/pooltogether/v4-utils-js/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-utils-js/badge.svg?branch=main)](https://coveralls.io/github/pooltogether/v4-utils-js?branch=main)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
![npm](https://img.shields.io/npm/v/@pooltogether/v4-utils-js)

[Application](https://app.pooltogether.com/) | [Contracts](https://github.com/pooltogether/v4-core) | [Documentation](https://docs.pooltogether.com/) | [Draw Calculator](https://github.com/pooltogether/draw-calculator-cli) | [Frontend Client](https://github.com/pooltogether/v4-js-client) | [Static Cache](https://github.com/pooltogether/v4-draw-results)

## Calculations, Computations and Core Logic

The `@pooltogether/v4-utils-js` [node module package](https://www.npmjs.com/package/@pooltogether/v4-utils-js) provides calculations, computations and core logic for the PoolTogether V4 protocol.

Assisting with low-level tasks like hashing addresses to generate picks and calculating the total number of prizes for a prize tier. The `calculations` namespaced functions are modular: consuming low-level inputs/types to parity smart contract EVM operations.

High-order operations like filtering for a users winning picks and processing chain state (draws, prizeDistributions, etc..) to analyze/predict short and long term outcomes are included in the `computations` namespaced functions.

**🧮 Caclulations:**

Arithmetic and operations to match `v4-core` [smart contract](https://github.com/pooltogether/v4-core) operations:

- [calculateCardinality](docs/md/modules.md#calculatecardinality)
- [calculateFractionOfPrize](docs/md/modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](docs/md/modules.md#calculatenormalizedbalancepicksfromtotalpicks)
- [calculateNumberOfMatches](docs/md/modules.md#calculatenumberofmatches)
- [calculateNumberOfPrizesForTierIndex](docs/md/modules.md#calculatenumberofprizesfortierindex)
- [calculatePick](docs/md/modules.md#calculatepick)
- [calculatePicks](docs/md/modules.md#calculatepicks)
- [calculatePicksFromAverageTotalSuppliesBetween](docs/md/modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeForTierPercentage](docs/md/modules.md#calculateprizefortierpercentage)
- [calculateTierIndexFromMatches](docs/md/modules.md#calculatetierindexfrommatches)

**🖥️ Computations:** 

Consume protocol chain state and return computed outcomes:

- [computeDrawResults](docs/md/modules.md#computedrawresults)
- [computePickPrize](docs/md/modules.md#computepickprize)
- [computePicksPrizes](docs/md/modules.md#computepicksprizes)
- [computePrizeAmount](docs/md/modules.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](docs/md/modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](docs/md/modules.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](docs/md/modules.md#computeuserwinningpicksforrandomnumber)
- [computeWinningPicks](docs/md/modules.md#computewinningpicks)

**🏆 Core:**

Gain insights into the protocol state by analyzing and encoding historical and potential chain state.

- [encodeWinningPicks](docs/md/modules.md#encodewinningpicks)
- [winningPicks](docs/md/modules.md#winningpicks)

🙋 *Potential Additions:*

- poolAverageYieldBetweenTimestamps
- userAverageYieldBetweenTimestamps
- oddsPerPrizeTierUsingNormalizedBalance
- encodeDrawPercentageRateAtomicUpdatesAcrossChains

[Create Issue](https://github.com/pooltogether/v4-utils-js/issues) to request new features.<br/>[Open Pull Request](#) adhering to Contribution guidelines.


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

# 📖 Documentation

### Namespaces

- [calculate](docs/md/modules/calculate.md)
- [compute](docs/md/modules/compute.md)
- [utils](docs/md/modules/utils.md)

### References

- [calculateCardinality](docs/md/modules.md#calculatecardinality)
- [calculateFractionOfPrize](docs/md/modules.md#calculatefractionofprize)
- [calculateNormalizedBalancePicksFromTotalPicks](docs/md/modules.md#calculatenormalizedbalancepicksfromtotalpicks)
- [calculateNumberOfMatches](docs/md/modules.md#calculatenumberofmatches)
- [calculateNumberOfPrizesForTierIndex](docs/md/modules.md#calculatenumberofprizesfortierindex)
- [calculatePick](docs/md/modules.md#calculatepick)
- [calculatePicks](docs/md/modules.md#calculatepicks)
- [calculatePicksFromAverageTotalSuppliesBetween](docs/md/modules.md#calculatepicksfromaveragetotalsuppliesbetween)
- [calculatePrizeForTierPercentage](docs/md/modules.md#calculateprizefortierpercentage)
- [calculateTierIndexFromMatches](docs/md/modules.md#calculatetierindexfrommatches)
- [computeDrawResults](docs/md/modules.md#computedrawresults)
- [computePickPrize](docs/md/modules.md#computepickprize)
- [computePicksPrizes](docs/md/modules.md#computepicksprizes)
- [computePrizeAmount](docs/md/modules.md#computeprizeamount)
- [computePrizeDistributionFromTicketAverageTotalSupplies](docs/md/modules.md#computeprizedistributionfromticketaveragetotalsupplies)
- [computeUserPicks](docs/md/modules.md#computeuserpicks)
- [computeUserWinningPicksForRandomNumber](docs/md/modules.md#computeuserwinningpicksforrandomnumber)
- [computeWinningPicks](docs/md/modules.md#computewinningpicks)
- [encodeWinningPicks](docs/md/modules.md#encodewinningpicks)
- [winningPicks](docs/md/modules.md#winningpicks)
