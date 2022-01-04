import { ethers } from 'ethers';
import { findBitMatchesAtIndex } from '../../src/utils/findBitMatchesAtIndex';

const bn = (num: any) => ethers.BigNumber.from(num);
const bin = (binaryString: string) => bn(parseInt(binaryString, 2));

describe('findBitMatchesAtIndex', () => {
  it('should match the last number', () => {
    expect(
      findBitMatchesAtIndex(bin('11001111'), bin('10101111'), 0, 4)
    ).toBeTruthy();
    expect(
      findBitMatchesAtIndex(bin('11001110'), bin('10101111'), 1, 4)
    ).toBeFalsy();
  });

  it('should match for odd bits', () => {
    expect(
      findBitMatchesAtIndex(bin('111001111'), bin('111100111'), 0, 3)
    ).toBeTruthy();
    expect(
      findBitMatchesAtIndex(bin('111001111'), bin('111100111'), 1, 3)
    ).toBeFalsy();
    expect(
      findBitMatchesAtIndex(bin('111001111'), bin('111100111'), 2, 3)
    ).toBeTruthy();
  });
});
