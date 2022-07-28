import { findOccurrences } from "./index";

describe("findOccurrences", () => {
  it("return hello: 1 world: 1", () => {
    expect(findOccurrences("Hello World", "o")).toBe({
      hello: 1,
      world: 1,
    });
  });
});

describe("findOccurrences", () => {
  it("return create: 1, a: 0, nice: 1, juicy: 1, function: 1", () => {
    expect(findOccurrences("Create a nice JUICY function", "c")).toBe({
      create: 1,
      a: 0,
      nice: 1,
      juicy: 1,
      function: 1,
    });
  });
});

describe("findOccurrences", () => {
  it("return an: 1,apple: 1,a: 1,day: 1,keeps: 0,archeologist: 1,away...: 2", () => {
    expect(
      findOccurrences("An APPLE a day keeps an Archeologist AWAY...", "A")
    ).toBe({
      an: 1,
      apple: 1,
      a: 1,
      day: 1,
      keeps: 0,
      archeologist: 1,
      "away...": 2,
    });
  });
});
