import { BigNumber } from 'ethers';
import { prepareClaims } from '../src';
import { DrawResults, User } from '../src/types';
import { ADDRESS_DEAD } from './constants';

describe('prepareClaims', () => {
  it('should prepare claims for two draws using the dEaD address', () => {
    const user: User = {
      address: ADDRESS_DEAD,
      normalizedBalances: [
        BigNumber.from('1'),
        BigNumber.from('1'),
        BigNumber.from('1'),
      ],
      picks: [],
    };
    const drawResults: DrawResults[] = [
      {
        drawId: 1,
        totalValue: BigNumber.from('1000'),
        prizes: [
          {
            amount: BigNumber.from('100'),
            distributionIndex: 3,
            pick: BigNumber.from('10'),
          },
        ],
      },
      {
        drawId: 2,
        totalValue: BigNumber.from('1000'),
        prizes: [
          {
            amount: BigNumber.from('1000'),
            distributionIndex: 5,
            pick: BigNumber.from('10'),
          },
        ],
      },
    ];
    const claims = prepareClaims(user, drawResults);
    expect(claims.userAddress).toEqual(user.address);
    expect(claims.drawIds).toEqual([1, 2]);
    expect(claims.data[0][0]).toEqual(BigNumber.from('10'));
  });
});
