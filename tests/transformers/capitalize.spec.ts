import capitalize from "@/transformers/capitalize";
import { nonStringValueCheck } from "../support";

describe("capitalize", () => {
  it.each([
    ["toto", "Toto"],
    ["toto tata titi", "Toto Tata Titi"],
    ...nonStringValueCheck().map((nSv) => [nSv, undefined]),
  ])('should transform "%s" to "%s"', (input: string, expected: string) => {
    expect(capitalize(input)).toEqual(expected);
  });
});
