import { mainnet as mainnetContractList } from "@pooltogether/v4-pool-data";
import PoolTogetherV4, { calculatePicks, config } from "../src";
import { DAYS_IN_SECONDS } from "../src/constants";

describe("calculatePicks", () => {
  let ptv4: PoolTogetherV4;
  beforeAll(() => {
    ptv4 = new PoolTogetherV4(
      config.providers.providersAll,
      mainnetContractList
    );
  });

  const ticketL1 = "0xdd4d117723C257CEe402285D3aCF218E9A8236E1";
  const ticketL2 = "0x6a304dFdb9f808741244b6bfEe65ca7B3b3A6076";

  it("should calculate picks for the L1 ticket", async () => {
    const bitRange = 2;
    const cardinality = 10;
    const startTime = 1634410924 - DAYS_IN_SECONDS;
    const endTime = startTime + DAYS_IN_SECONDS;
    const ticket = ptv4.getContract(ticketL1);
    const ticketOther = ptv4.getContract(ticketL2);
    const calculatedPicks = await calculatePicks(
      bitRange,
      cardinality,
      startTime,
      endTime,
      ticket,
      ticketOther
    );
    expect(calculatedPicks).toEqual(319600);
  });

  it("should calculate picks for the L2 ticket", async () => {
    const bitRange = 2;
    const cardinality = 10;
    const startTime = 1634410924 - DAYS_IN_SECONDS;
    const endTime = startTime + DAYS_IN_SECONDS;
    const ticket = ptv4.getContract(ticketL2);
    const ticketOther = ptv4.getContract(ticketL1);
    const calculatedPicks = await calculatePicks(
      bitRange,
      cardinality,
      startTime,
      endTime,
      ticket,
      ticketOther
    );
    expect(calculatedPicks).toEqual(728975);
  });
});
