import { initialize, config } from "../src";
import { contactList } from './constants'

describe("initialize", () => {
  it("should succeed to initialize PoolTogetherV4 using the initialize function", async () => {
    const pt4 = initialize(config.providersAll, contactList);
    expect(pt4.isInitialized).toBeTruthy();
  });
});
