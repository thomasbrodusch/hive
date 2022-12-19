import camelCase from "@/transformers/camelCase";
import { nonStringValueCheck } from "../support";

describe("camelCase", () => {
  it.each([
    ["toto", "toto"],
    ["toto tata", "totoTata"],
    ["toto tata titi", "totoTataTiti"],
    ...nonStringValueCheck().map((nSv) => [nSv, undefined]),
  ])('should transform "%s" to "%s"', (input: string, expected: string) => {
    expect(camelCase(input)).toEqual(expected);
  });
});
