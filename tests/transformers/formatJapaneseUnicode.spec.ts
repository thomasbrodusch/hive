import formatJapaneseUnicode from "@/transformers/formatJapaneseUnicode";

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
  ])(
    "should clean japanese unicode string numbers '%s' to classic numbers '%s'",
    (inputJa, expected) => {
      expect(formatJapaneseUnicode(inputJa)).toEqual(expected);
    }
  );
});
