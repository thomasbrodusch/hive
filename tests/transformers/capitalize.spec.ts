import capitalize from "@/transformers/capitalize";

describe("capitalize", () => {
  it.each([
    ["toto", "Toto"],
    ["toto tata titi", "Toto Tata Titi"],
    [undefined, undefined],
    [null, undefined],
    [NaN, "NaN"],
    [1, "1"],
  ])('should transform "%s" to "%s"', (input, expected) => {
    expect(capitalize(input)).toEqual(expected);
  });
});
