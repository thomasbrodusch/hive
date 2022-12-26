import isString from "@/validators/isString";

export type BCP47LangTag = string;
export type SegmentGranularity = "grapheme" | "word" | "sentence";

export default (
  input: string,
  granularity: SegmentGranularity = "word",
  lang?: BCP47LangTag
): string[] => {
  if (!isString(input)) {
    return;
  }
  const segmenter = new Intl.Segmenter(lang, { granularity });
  return Array.from(segmenter.segment(input))
    .filter((s) => (granularity === "word" ? s.isWordLike : true))
    .map((s) => s.segment);
};
