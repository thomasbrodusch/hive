import camelCase from "@/transformers/camelCase";

describe("camelCase", () => {
  it.each([
    ["toto", "toto"],
    ["toto tata", "totoTata"],
    ["toto tata titi", "totoTataTiti"],
  ])('should transform "%s" to "%s"', (input, expected) => {
    expect(camelCase(input)).toEqual(expected);
  });
});
