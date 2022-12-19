import snakeCase from "../../src/transformers/snakeCase";
import { nonStringValueCheck } from "../support";

describe("snakeCase", () => {
  it.each([
    ["Toto", "toto"],
    ["ToTo", "to_to"],
    ["toto", "toto"],
    ["to To", "to_to"],
    ["toToTOO", "to_to_t_o_o"],
    ...nonStringValueCheck().map((nSv) => [nSv, undefined]),
  ])(
    "should transform snakeCase(%s) to %s",
    (input: string, expected: string) => {
      expect(snakeCase(input)).toEqual(expected);
    }
  );
});
