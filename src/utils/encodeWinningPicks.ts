import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';

import { Claim, DrawResults } from '../types';
import { sortByBigNumberAsc } from '.';

function encodeWinningPicks(
    userAddress: string,
    drawResults: DrawResults[],
    ticketAddress?: string
): Claim {
    let claim: Claim = {
        ticketAddress,
        userAddress,
        drawIds: [],
        winningPickIndices: [],
        encodedWinningPickIndices: '',
    };
    if (drawResults.length === 0) {
        return claim;
    }

    drawResults.forEach(drawResult => {
        if (drawResult.totalValue.gt(BigNumber.from(0))) {
            claim.drawIds.push(drawResult.drawId);
            // now add the pickIndices data
            let winningPicks: BigNumber[] = [];
            for (const prizeAwardable of drawResult.prizes) {
                winningPicks.push(BigNumber.from(prizeAwardable.pick));
            }
            claim.winningPickIndices.push(winningPicks);
        }
    });

    claim.winningPickIndices = claim.winningPickIndices.map(data =>
        data.sort(sortByBigNumberAsc)
    );
    // @dev The ticket address is optional. If "undefined" it's for v4 and if available for v5
    if(!ticketAddress) {
        claim.encodedWinningPickIndices = defaultAbiCoder.encode(
            ['uint256[][]'],
            [claim.winningPickIndices]
        );
    } else {
        claim.encodedWinningPickIndices = defaultAbiCoder.encode(
            ['uint64[][]'],
            [claim.winningPickIndices]
        );
    }

    return claim;
}

export default encodeWinningPicks;
