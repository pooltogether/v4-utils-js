<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

# PoolTogether V4 JS
![Tests](https://github.com/pooltogether/v4-js/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-js/badge.svg?branch=master)](https://coveralls.io/github/pooltogether/v4-js?branch=master)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

The `v4-js` module is a general purpose JS library for reading/writing to the Pooltogether V4 protocol.

# Installation

This project is available as an NPM package:

```sh
npm install @pooltogether/v4-js
```

```sh
yarn add @pooltogether/v4-js
```

The repo can be cloned from Github for contributions.

```sh
git clone https://github.com/pooltogether/v4-core
```

# Overview

## Setup
- [PoolTogetherV4]()
- [initialize]()

## Core
- [batchCalculateDrawResults](https://github.com/pooltogether/v4-js/blob/master/src/batchCalculateDrawResults.ts)
- [calculateDrawResults]()
- [calculatePicks]()
- [calculatePicksFromAverageTotalSuppliesBetween]()
- [computeCardinality]()
- [computeDrawResults]()
- [computePicks]()
- [computePrizeDistribution]()
- [generatePicks]()
- [prepareClaims]()
- [isPrizeDistributionStructSet]()

## Config
- [bridging]()
- [chains]()
- [networks]()
## Fetching
- [getMultiTicketAverageTotalSuppliesBetween]()

## Utils
- [createContract]()
- [createInterface]()
- [getJsonRpcProvider]()
- [getProviderFromChainId]()
- [getProviderFromNetwork]()
- [isContractConnectedToProvider]()
- [isContractConnectedToSigner]()
- [sumBigNumbers]()
- [validateContractListIsConnected]()

# Getting Started

## Initializing

The `v4-js` module must be initialized with providers and a contract list.

Current `mainnet` and `testnet` contract lists can be used via the `@pooltogether/v4-pool-data` NPM package

The `v4-js` module must be initialized before blockchain read requests be executed.

```js
import PoolTogetherV4, { config } from 'pooltogether/v4-js';

const ptv4 = new PoolTogetherV4(config.providersMainnet, mainnetContractList)
```

*or*

```js
import { initialize, config } from 'pooltogether/v4-js';

const ptv4 = initialize(config.providersMainnet, mainnetContractList)
```

## Providers
Providers being passed must inherit the Provider type interface from `@ethersproject/abstract-provider`. In other words, ethers provider interfaces like JsonRpcProvider, InfuraProvider, FallbackProvider, etc... are usable as Provider interfaces.

```js
const providerMainnet = ethers.getDefaultProvider('mainnet');
const providerRinkeby = new ethers.providers.InfuraProvider('rinkeby', key)
const providerMumbai = new ethers.providers.JsonRpcProvider("https://rpc-mumbai.maticvigil.com");
const providers = { 1: providerMainnet, 4: providerRinkeby, 80001: providerMumbai }
```

### `computePrizeDistribution`

To compute a PrizeDistribution for a specific PrizePool/Ticket supply a Draw (from the DrawBuffer) and contract addresses for L1 PrizeTierHistory and the target Ticket contract, plus secondary Ticket contract addresses in a list.

```js
import { computePrizeDistribution } from '../src';

const draw = {
  winningRandomNumber: BigNumber.from('21288413488180966377126236036201345909019919575750940621513526137694302720820'),
  drawId: 1,
  timestamp: 1634410924,
  beaconPeriodStartedAt: 1634324400,
  beaconPeriodSeconds: 86400,
}

const prizeTierHistory = '0xdD1cba915Be9c7a1e60c4B99DADE1FC49F67f80D'
const ticketL1 = '0xdd4d117723C257CEe402285D3aCF218E9A8236E1'
const ticketL2 = '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076'

const results = await computePrizeDistribution(draw, prizeTierHistory, ticketL1, [ticketL2])
```