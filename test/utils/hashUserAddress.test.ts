import { hashUserAddress } from '../../src/utils';

describe('hashUserAddress', () => {
    it('should hash an address', () => {
        expect(
            hashUserAddress('0x0000000000000000000000000000000000000001')
        ).toEqual(
            '0x1468288056310c82aa4c01a7e12a10f8111a0560e72b700555479031b86c357d'
        );
    });
});
