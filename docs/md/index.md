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

The most straight-forward approach to calculate winning picks is to call `winningPicks` with historical Draw and PrizeDistrubtion parameters.

Fetching protocol chain state can be completed using the [v4-js-client](https://github.com/pooltogether/v4-js-client) module.

In short, before calling `winningPicks` first call X function in `v4-js-client` to fetch the required EVM struct data.

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
