import { BigNumber } from 'ethers';
import { mainnet as mainnetContractList } from '@pooltogether/v4-pool-data'
import PoolTogetherV4, { computePrizeDistribution, config } from '../src';
const debug = require("debug")("v4-js-core:test");

describe('computePrizeDistribution', () => {
  beforeAll(() => {
    new PoolTogetherV4(config.providersAll, mainnetContractList)
  })

  it('should succeed to calculate a PrizeDistribution', async () => {
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

    const expectation = {
      bitRangeSize: 2,
      matchCardinality: 10,
      tiers: [
        166889185, 0, 0,
        320427236, 0, 512683578,
        0, 0, 0,
        0, 0, 0,
        0, 0, 0,
        0
      ],
      maxPicksPerUser: 2,
      expiryDuration: 5184000,
      numberOfPicks: BigNumber.from({ _hex: '0x04dc79', _isBigNumber: true }),
      startTimestampOffset: 86400,
      prize: BigNumber.from({ _hex: '0x037ce0a900', _isBigNumber: true }),
      endTimestampOffset: 900
    }

    const results = await computePrizeDistribution(draw, prizeTierHistory, ticketL1, [ticketL2])
    debug('computePrizeDistribution:results', results)
    expect(results).toEqual(expectation);
  });
});

