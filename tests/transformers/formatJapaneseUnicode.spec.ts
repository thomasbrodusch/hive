import formatJapaneseUnicode from "@/transformers/formatJapaneseUnicode";
import { nonStringValueCheck } from "../support";

describe("formatJapaneseUnicode", () => {
  it.each([
    ["１９９２年１０月２６日", "1992年10月26日"],
    ["０", "0"],
    ["１", "1"],
    ["２", "2"],
    ["３", "3"],
    ["４", "4"],
    ["５", "5"],
    ["６", "6"],
    ["７", "7"],
    ["８", "8"],
    ["９", "9"],
    ...nonStringValueCheck().map((nSv) => [nSv, undefined]),
  ])(
    "should clean japanese unicode string numbers '%s' to classic numbers '%s'",
    (input: string, expected: string) => {
      expect(formatJapaneseUnicode(input)).toEqual(expected);
    }
  );
});
