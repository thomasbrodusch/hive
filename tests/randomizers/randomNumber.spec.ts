import RandomNumber from "@/randomizers/randomNumber";

describe("randomNumber", () => {
  it.each([[3], [16]])(
    "should generate a random number <= %s ",
    (expectedMax) => {
      const numb = RandomNumber.getOne({
        options: {
          max: expectedMax,
        },
      });
      expect(numb <= expectedMax).toBeTruthy();
    }
  );

  it.each([[3], [40]])(
    "should generate a random number >= %s ",
    (expectedMin) => {
      const numb = RandomNumber.getOne({
        options: {
          min: expectedMin,
        },
      });
      expect(numb >= expectedMin).toBeTruthy();
    }
  );

  it.each([
    [3, 5],
    [40, 79],
  ])(
    "should generate a random number between %s and %s ",
    (expectedMin: number, expectedMax: number) => {
      const numb = RandomNumber.getOne({
        options: {
          min: expectedMin,
          max: expectedMax,
        },
      });
      expect(numb >= expectedMin && numb <= expectedMax).toBeTruthy();
    }
  );

  it.each([
    [6, 1, 5],
    [10, 34, 52],
  ])(
    "should generate an array of %s number with value between %s and  %s ",
    (expectedArraySize: number, expectedMin: number, expectedMax) => {
      const res = RandomNumber.getArray({
        length: expectedArraySize,
        options: {
          min: expectedMin,
          max: expectedMax,
        },
      });
      expect(res.length).toBe(expectedArraySize);
      res.forEach((n) =>
        expect(n >= expectedMin && n <= expectedMax).toBeTruthy()
      );
    }
  );
});
