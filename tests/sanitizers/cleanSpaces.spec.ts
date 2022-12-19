import cleanSpaces from "@/sanitizers/cleanSpaces";
import { nonStringValueCheck } from "../support/index";

describe("cleanSpaces", () => {
  it.each([["toto", "toto"], ["to to to", "tototo"], ...nonStringValueCheck()])(
    'should transform "%s" to "%s"',
    (input: string, expected: string) => {
      expect(cleanSpaces(input)).toEqual(expected);
    }
  );
});
