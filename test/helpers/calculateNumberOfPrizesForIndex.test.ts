import { calculateNumberOfPrizesForIndex } from "../../src/helpers";

describe("calculateNumberOfPrizesForIndex.test", () => {
  it("0", () => expect(calculateNumberOfPrizesForIndex(2, 0)).toEqual(1));
  it("1", () => expect(calculateNumberOfPrizesForIndex(2, 1)).toEqual(3));
  it("2", () => expect(calculateNumberOfPrizesForIndex(2, 2)).toEqual(12));
  it("3", () => expect(calculateNumberOfPrizesForIndex(2, 3)).toEqual(48));
  it("4", () => expect(calculateNumberOfPrizesForIndex(2, 4)).toEqual(192));
});
