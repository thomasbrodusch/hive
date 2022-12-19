import cleanAccents from "@/sanitizers/cleanAccents";
import { nonStringValueCheck } from "../support";

describe("cleanAccent", () => {
  it.each([
    ["èéêëēėę", "eeeeeee"],
    ["ôöòóōõ", "oooooo"],
    ["àáâäãåā", "aaaaaaa"],
    ["ûüùúū", "uuuuu"],
    ["îïíīįì", "iiiiii"],
    ...nonStringValueCheck().map((nSv) => [nSv, undefined]),
  ])("should cleanAccent(%s) return %s", (input: string, expected: string) => {
    expect(cleanAccents(input)).toEqual(expected);
  });
});
