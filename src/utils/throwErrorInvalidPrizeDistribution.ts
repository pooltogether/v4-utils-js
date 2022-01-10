import { sanityCheckPrizeDistribution } from '.';
import { PrizeDistribution } from '../types';

function throwErrorInvalidPrizeDistribution(
  prizeDistribution: PrizeDistribution
) {
  // first check PrizeDistribution passed is sane
  const sanityCheckPrizeDistrbutionResult = sanityCheckPrizeDistribution(
    prizeDistribution
  );
  if (sanityCheckPrizeDistrbutionResult !== '') {
    throw new Error(
      `PrizeDistribution invalid: ${sanityCheckPrizeDistrbutionResult}`
    );
  }
}

export default throwErrorInvalidPrizeDistribution;
