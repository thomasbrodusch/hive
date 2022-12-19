import snakeCase from "../../src/transformers/snakeCase";

describe("snakeCase", () => {
  it.each([
    ["Toto", "toto"],
    ["ToTo", "to_to"],
    ["toto", "toto"],
    ["to To", "to_to"],
    ["toToTOO", "to_to_t_o_o"],
  ])("should transform snakeCase(%s) to %s", (input, expected) => {
    expect(snakeCase(input)).toEqual(expected);
  });
});
