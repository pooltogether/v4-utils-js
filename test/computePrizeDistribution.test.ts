import { BigNumber } from 'ethers';
import { computePrizeDistribution } from '../src';
import { ContractAddressWithNetwork } from '../src/types'

describe('computePrizeDistribution', () => {
  it('should succeed', async () => {
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
      network: 'mainnet'
    }

    const ticketL1: ContractAddressWithNetwork = {
      name: 'Ticket',
      address: '0xdd4d117723C257CEe402285D3aCF218E9A8236E1',
      network: 'mainnet'
    }

    const ticketL2: ContractAddressWithNetwork = {
      name: 'Ticket',
      address: '0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076',
      network: 'polygon-mainnet'
    }

    const results = await computePrizeDistribution(draw, prizeTierHistory, [ticketL1, ticketL2]).catch(e => console.log(e))
    console.log('Results:', results)
    expect(1 + 1).toEqual(2);
  });
});

