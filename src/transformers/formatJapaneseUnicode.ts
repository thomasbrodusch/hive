import cleanSpaces from "@/sanitizers/cleanSpaces";
import cleanPunctuation from "@/sanitizers/cleanPunctuation";

export default (inputJapanese: string): string => {
  // Map between japanese unicode numbers and classic numbers.
  const mapNumbers = new Map([
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
  ]);
  let cleanStr = cleanSpaces(cleanPunctuation(inputJapanese));
  mapNumbers.forEach((v, k) => (cleanStr = cleanStr.replaceAll(k, v)));
  return cleanStr;
};
