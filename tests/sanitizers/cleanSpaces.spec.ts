import cleanSpaces from "@/sanitizers/cleanSpaces";

describe("cleanSpaces", () => {
  it.each([
    ["toto", "toto"],
    ["to to to", "tototo"],
  ])('should transform "%s" to "%s"', (input, expected) => {
    expect(cleanSpaces(input)).toEqual(expected);
  });
});
