import { productOfPrimes } from "./index";
describe("productOfPrimes", () => {
  it("should return true", () => {
    expect(productOfPrimes(9)).toBeTruthy();
  });
  it("should return false", () => {
    expect(productOfPrimes(12)).toBeFalsy();
  });
});
