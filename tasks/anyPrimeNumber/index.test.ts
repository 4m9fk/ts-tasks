import { primeInRange } from "./index";

describe("primeInRange", () => {
  it(" Prime numbers 10, 15", () => {
    expect(primeInRange(10, 15)).toBeTruthy();
  });
});

describe("primeInRange", () => {
  it("Prime numbers 62, 66", () => {
    expect(primeInRange(62, 66)).toBeFalsy();
  });
});

describe("primeInRange", () => {
  it("Prime numbers 3, 5", () => {
    expect(primeInRange(3, 5)).toBeTruthy();
  });
});
