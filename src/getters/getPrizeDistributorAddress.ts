import { getAddressFromDeploymentFile } from '../utils';

export function getPrizeDistributorAddress(chainId: string) {
    return getAddressFromDeploymentFile(chainId, 'PrizeDistributor');
}
