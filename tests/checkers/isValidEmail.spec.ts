import isValidEmail from "../../src/checkers/isValidEmail";

describe("isValideEmail", () => {
  it.each([
    [false, undefined],
    [false, null],
    [false, false],
    [false, 0],
    [false, ""],
    [false, "name.firstname@localhost"],
    [false, { email: "name.firstname@domain.tld" }],
    [false, "nöm.préname@unicode.tld"],
    [true, "name.firstname@edu.school.com"],
    [true, "name+firstname@domain.email"],
    [true, "NOM_firstname@domain.email"],
    [true, "NOM_firstname+toto+tata@domain.email"],
  ])("should return %s for isValidEmail(%s)", (expectedBoolean, inputEmail) => {
    expect(isValidEmail(inputEmail)).toBe(expectedBoolean);
  });
});
