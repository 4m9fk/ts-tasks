import { myFind } from "./index";

describe("myFind", () => {
  it("should return 4", () => {
    expect(myFind([1, 3, 4, 5, 6, 9], (element) => element % 2 === 0)).toBe(4);
  });
  it("should return Alisa", () => {
    expect(
      myFind(["Mike", "Ben", "Alisa", "Taylor", "Ann", "Maria"], (element) => element[0] === "A"),
    ).toBe("Alisa");
  });
});
