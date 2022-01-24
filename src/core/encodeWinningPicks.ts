import { defaultAbiCoder } from '@ethersproject/abi';
import { BigNumber } from '@ethersproject/bignumber';

import { User, DrawResults, Claim } from '../types';
import { sortByBigNumberAsc } from '../utils';

function encodeWinningPicks(user: User, drawResults: DrawResults[]): Claim {
    let claim: Claim = {
        userAddress: user.address,
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
    claim.encodedWinningPickIndices = defaultAbiCoder.encode(
        ['uint256[][]'],
        [claim.winningPickIndices]
    );
    return claim;
}

export default encodeWinningPicks;
