# PoolTogether V4 JS 

The `v4-js` module handles calculations and computations for PoolTogether V4 operations.

# Installation

This project is available as an NPM package:

```sh
yarn add @pooltogether/v4-js
```

```sh
git clone https://github.com/pooltogether/v4-core
```

# How to use

## Initializing

The `v4-js` module must be initialized with both providers and a contract list.

Current `mainnet` and `testnet` contract lists can be used via the `@pooltogether/v4-pool-data` NPM package

```js
import PoolTogetherV4 from 'pooltogether/v4-js';

const ptv4 = new PoolTogetherV4(providers, mainnetContractList)
```

*or*

```js
import { initialize } from 'pooltogether/v4-js';

const ptv4 = initialize(providers, mainnetContractList)
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

```js
import { computePrizeDistribution } from '../src';

const results = await computePrizeDistribution(draw, prizeTierHistory, ticketL1, [ticketL2])
```