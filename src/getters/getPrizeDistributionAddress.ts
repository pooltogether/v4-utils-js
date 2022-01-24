import { getAddressFromDeploymentFile } from "../utils";

export function getPrizeDistributionBufferAddress(chainId: string): string {
    return getAddressFromDeploymentFile(chainId, "PrizeDistributionBuffer");
}
