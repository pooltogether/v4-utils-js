import { getAddressFromDeploymentFile } from "../utils";

function getDrawBufferAddress(network: string): string {
    return getAddressFromDeploymentFile(network, "DrawBuffer");
}

export default getDrawBufferAddress;