import isEmail from "@/validators/isEmail";

describe("isValideEmail", () => {
  it.each([
    [false, undefined],
    [false, null],
    [false, false],
    [false, []],
    [false, {}],
    [false, 0],
    [false, ""],
    [false, "name.firstname@localhost"],
    [false, { email: "name.firstname@domain.tld" }],
    [false, "nöm.préname@unicode.tld"],
    [true, "name.firstname@edu.school.com"],
    [true, "name+firstname@domain.email"],
    [true, "NOM_firstname@domain.email"],
    [true, "NOM_firstname+toto+tata@domain.email"],
  ])(
    "should return %s for isEmail(%s)",
    (expected: boolean, input: string) => {
      expect(isEmail(input)).toBe(expected);
    }
  );
});
