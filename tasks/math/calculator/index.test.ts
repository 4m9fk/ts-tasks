import { calculator } from "./index";

describe("calculator", () => {
  it("should return 4", () => {
    expect(calculator(2, "+", 2)).toBe(4);
  });
  it("should return 4", () => {
    expect(calculator(2, "*", 2)).toBe(4);
  });
  it("should return 2", () => {
    expect(calculator(4, "/", 2)).toBe(2);
  });
  it("should return 3", () => {
    expect(calculator(7, "-", 4)).toBe(3);
  });
  expect(calculator).toThrowError(new Error("Calculator does not support the provided operator"));
});
