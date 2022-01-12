<p align="center">
  <a href="https://github.com/pooltogether/pooltogether--brand-assets">
    <img src="https://github.com/pooltogether/pooltogether--brand-assets/blob/977e03604c49c63314450b5d432fe57d34747c66/logo/pooltogether-logo--purple-gradient.png?raw=true" alt="PoolTogether Brand" style="max-width:100%;" width="200">
  </a>
</p>

<br />

# Utility Library for PoolTogether V4
![Tests](https://github.com/pooltogether/v4-utils-js/actions/workflows/main.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/pooltogether/v4-utils-js/badge.svg?branch=master)](https://coveralls.io/github/pooltogether/v4-utils-js?branch=master)
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)

The `v4-utils-js` is a Javascript module to assist with with calculation/computation of the PoolTogether V4 protocol.

**Caclulations:** Basic arithmatic and operations for the V4 protocol: cardinality, number of picks, hashed address, etc... 

**Computations:** Consume protocol state (Draws/PrizeDistributions/RandomNumber) and return computed results.

# Installation

This project is available as an NPM package:

```sh
npm install @pooltogether/v4-utils-js
```

```sh
yarn add @pooltogether/v4-utils-js
```

The repo can be cloned from Github for contributions.

```sh
git clone https://github.com/pooltogether/v4-core
```

# Developer Experience

The package is setup using the TSDX zero-config CLI tool. Which includes:

- Typescript
- Rollup
- Jest
- Prettier
- ESLint

**Minor changes are made to extend the default configuration.**

## ESLint

The TSDX linting configuration is overwritten to include override(s).

- Import/Order