// @ts-nocheck
import { BigNumber, ethers } from 'ethers';
import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data'
import PoolTogetherV4, { computePrizeDistribution } from '../src';
import { ContractAddressWithNetwork } from '../src/types'
import { getProviderFromChainId, validateContractListIsConnected } from '../src/utils';
const debug = require("debug")("v4-js-core:test");

describe('computePrizeDistribution', () => {
  const providerMainnet = ethers.getDefaultProvider('mainnet');
  const providerRinkeby = ethers.getDefaultProvider('rinkeby');
  const providerPolygon = getProviderFromChainId(137);

  const poolTogetherV4 = new PoolTogetherV4({ 1: providerMainnet, 4: providerRinkeby, 138: providerPolygon }, mainnetContractList)

  it('should succeed to calculate a PrizeDistribution', async () => {
    const draw = {
      winningRandomNumber: BigNumber.from('21288413488180966377126236036201345909019919575750940621513526137694302720820'),
      drawId: 1,
      timestamp: 1634410924,
      beaconPeriodStartedAt: 1634324400,
      beaconPeriodSeconds: 86400,
    }

    const prizeTierHistory: ContractAddressWithNetwork = {
      name: 'PrizeTierHistory',
      address: '0xdD1cba915Be9c7a1e60c4B99DADE1FC49F67f80D',
      network: 'mainnet',
      chainId: 1
    }

    const ticketL1: ContractAddressWithNetwork = {
      name: 'Ticket',
      address: '0xdd4d117723C257CEe402285D3aCF218E9A8236E1',
      network: 'mainnet',
      chainId: 1
    }

    const ticketL2: ContractAddressWithNetwork = {
      name: 'Ticket',
      address: '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076',
      network: 'polygon-mainnet',
      chainId: 137
    }

    const prizeTierHistoryContract = poolTogetherV4.getContract(prizeTierHistory.address)
    const ticketPrimary = poolTogetherV4.getContract(ticketL1.address)
    const ticketSecondary = poolTogetherV4.getContract(ticketL2.address)
    console.log(ticketSecondary, 'ticketSecondary')
    validateContractListIsConnected([ticketSecondary])
    // const results = await computePrizeDistribution(draw, prizeTierHistory.address, ticketL2.address, [ticketL2.address]).catch(e => console.log(e))
    // debug('computePrizeDistribution:results', results)
    // expect(results).toEqual(expectation);
  });
});

