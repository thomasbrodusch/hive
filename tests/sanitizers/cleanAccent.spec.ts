import cleanAccents from "@/sanitizers/cleanAccents";

describe("cleanAccent", () => {
  it.each([
    ["èéêëēėę", "eeeeeee"],
    ["ôöòóōõ", "oooooo"],
    ["àáâäãåā", "aaaaaaa"],
    ["ûüùúū", "uuuuu"],
    ["îïíīįì", "iiiiii"],
  ])("should cleanAccent(%s) return %s", (input, expected) => {
    expect(cleanAccents(input)).toEqual(expected);
  });
});
