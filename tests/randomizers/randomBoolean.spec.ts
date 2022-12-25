import RandomBoolean from "@/randomizers/randomBoolean";

describe("RandomBoolean", () => {
  it.each([
    [true, 1],
    [false, 0],
  ])(
    "should return %s with truthyThreshold = %s ",
    (expectedResult: boolean, expectedThreshold: number) => {
      expect(
        RandomBoolean.getOne({
          options: {
            truthyThreshold: expectedThreshold,
          },
        })
      ).toBe(expectedResult);
    }
  );

  it.each([
    [6, 1, true],
    [10, 0, false],
  ])(
    "should return array with %s x %s with truthyThreshold = %s  ",
    (expectedArraySize: number, expectedThreshold: number, expectedResult) => {
      const res = RandomBoolean.getArray({
        length: expectedArraySize,

        options: {
          truthyThreshold: expectedThreshold,
        },
      });
      expect(res.length).toBe(expectedArraySize);
      res.forEach((bool) => expect(bool).toBe(expectedResult));
    }
  );
});
