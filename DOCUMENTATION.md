# Utility Library
![Tests](https://github.com/pooltogether/v4-utils-js/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-utils-js/badge.svg?branch=main)](https://coveralls.io/github/pooltogether/v4-utils-js?branch=main)
![ts](https://badgen.net/badge/-/TypeScript?icon=typescript&label&labelColor=blue&color=555555)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)
![npm](https://img.shields.io/npm/v/@pooltogether/v4-utils-js)

The `@pooltogether/v4-utils-js` [node module package](https://www.npmjs.com/package/@pooltogether/v4-utils-js) provides calculations, computations and core logic for the PoolTogether V4 protocol.

Assisting with low-level tasks like hashing addresses to generate picks and calculating the total number of prizes for a prize tier. The `calculations` namespaced functions are modular: consuming low-level inputs/types to parity smart contract EVM operations.

High-order operations like filtering for a users winning picks and processing chain state (draws, prizeDistributions, etc..) to analyze/predict short and long term outcomes are included in the `computations` namespaced functions.

## Installation

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

# Quickstart

The utility library offers low-level calculation/computation functions, but also includes `core` functions like `winningPicks` to encapsulate primary logic patterns.

### Winnings Picks (Encapsulate Compute & Encode)
```ts
import { winningPicks } from '@pooltogether/v4-utils-js';
const computedAndEncodedWinningPicks = winningPicks(wallet.address, [draw], [prizeDistribution]);
wallet.send(computedAndEncodedWinningPicks.encodedWinningPickIndices)
```

### Compute & Encode Winnings Picks
```ts
import { computeWinningPicks, encodeWinningPicks } from '@pooltogether/v4-utils-js';
const computedPicks = computeWinningPicks(wallet.address, [draw], [prizeDistribution]);
const transaction = encodeWinningPicks(wallet.address, computedWinningPicks);
wallet.send(transaction.encodedWinningPickIndices)
```

Draw and PrizeDistrubtion structs should be fetched using the [v4-js-client](https://github.com/pooltogether/v4-js-client) module.


# Examples

## Compute User Picks (computeUserPicks)

Each depositor owns a fraction of the total network liquidity.

Their percentage of the `totalSupply` is represented as `normalizedBalance`.

The `normalizedBalance` in combination with the `PrizeDistribution.totalPicks` allows us to generate the highest number of potential picks for a individual account deposit. Each pick index is hashed with the wallet address to generate a unick pick hash.

```ts
import { BigNumber } from '@ethersproject/bignumber';
import { parseEther } from '@ethersproject/units';
import { computeUserPicks } from '@pooltogether/v4-utils-js';

const userPicksIndexAndHash = computeUserPicks(
    BigNumber.from('1000'), // TotalPicks
    wallet.address, // address
    parseEther('0.1') // NormalizeBalance
);
```