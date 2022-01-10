import { ethers, BigNumber } from 'ethers';

import { findBitMatchesAtIndex } from '../../src/utils';

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

  it('Can findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(61676),
      BigNumber.from(61612),
      1,
      8
    );
    expect(result).toBeTruthy();
  });

  it('Can NOT findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(61676),
      BigNumber.from(61612),
      1,
      6
    );
    expect(result).toBeFalsy();
  });

  it('Can findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(
        '24703804328475188150699190457572086651745971796997325887553663750514688469872'
      ),
      BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      1,
      8
    );
    expect(result).toBeTruthy();
  });

  it('Can NOT findBitMatchesAtIndex', async () => {
    const result = findBitMatchesAtIndex(
      BigNumber.from(
        '24703804328475188150699190457572086651745971796997325887553663750514688469872'
      ),
      BigNumber.from(
        '8781184742215173699638593792190316559257409652205547100981219837421219359728'
      ),
      2,
      8
    );
    expect(result).toBeFalsy();
  });
});
