import isValidCreditCard from "@/checkers/isValidCreditCard";

describe("isValidCreditCard", () => {
  it.each([
    [false, "112"],
    [false, "toto"],
    [false, 0],
    [false, undefined],
    [false, null],
    [false, "4816089253950821"],
    [false, "4816 0892 5395 0827"],
    [true, "4816089253950827"], //VISA
    [true, "5430455205894921"], //MasterCard
    [true, "371331832313571"], //AMEX
  ])("should return %s for isValidCreditCard(%s)", (expected, input) => {
    expect(isValidCreditCard(input)).toBe(expected);
  });
});
