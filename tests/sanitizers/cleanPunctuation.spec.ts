import cleanPunctuation from "@/sanitizers/cleanPunctuation";

describe("cleanPunctuation", () => {
  it.each([
    ["toto.,", "toto"],
    ["to,t.o", "toto"],
  ])('should transform "%s" to "%s"', (input, expected) => {
    expect(cleanPunctuation(input)).toEqual(expected);
  });
});
