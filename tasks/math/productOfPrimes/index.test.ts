import { productOfPrimes } from "./index";
describe("productOfPrimes", () => {
  it("should return true", () => {
    expect(productOfPrimes(25).valueOf());
  });
  it("should return false", () => {
    expect(productOfPrimes(10).valueOf());
  });
});
