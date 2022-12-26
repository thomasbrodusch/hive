import { describe } from "vitest";
import StringSegmenter, {
  SegmentGranularity,
} from "@/transformers/stringSegmenter";

describe("StringSegmenter", () => {
  it.each([
    [
      "Bonjour !",
      ["B", "o", "n", "j", "o", "u", "r", " ", "!"],
      "grapheme",
      "fr",
    ],
    [
      "Bonjour Monsieur Martin !",
      ["Bonjour", "Monsieur", "Martin"],
      "word",
      "fr",
    ],
    [
      "Bonjour monsieur martin !",
      ["Bonjour monsieur martin !"],
      "sentence",
      "fr",
    ],
    [
      "吾輩は猫である。名前はたぬき。",
      ["吾輩", "は", "猫", "で", "ある", "名前", "は", "たぬき"],
      "word",
      "ja-JP",
    ],
  ])(
    "should segment %s to %s with granularity %s and lang %s",
    (input, expected, granularity, lang) => {
      expect(
        StringSegmenter(input, granularity as SegmentGranularity, lang)
      ).toEqual(expected);
    }
  );
});
