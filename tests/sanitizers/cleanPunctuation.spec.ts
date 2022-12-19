import cleanPunctuation from "@/sanitizers/cleanPunctuation";
import { nonStringValueCheck } from "../support";

describe("cleanPunctuation", () => {
  it.each([["toto.,", "toto"], ["to,t.o", "toto"], ...nonStringValueCheck()])(
    'should transform "%s" to "%s"',
    (input: string, expected: string) => {
      expect(cleanPunctuation(input)).toEqual(expected);
    }
  );
});
