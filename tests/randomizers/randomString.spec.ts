import RandomString from "@/randomizers/randomString";

describe("randomString", () => {
  it.each([[3], [16]])(
    "should generate a string with a max length of %s ",
    (expectedLength) => {
      const str = RandomString.getOne({
        options: {
          max: expectedLength,
        },
      });
      expect(str.length <= expectedLength).toBeTruthy();
    }
  );

  it.each([[3], [40]])(
    "should generate a string with a min length of %s ",
    (expectedLength) => {
      const str = RandomString.getOne({
        options: {
          min: expectedLength,
        },
      });
      expect(str.length >= expectedLength).toBeTruthy();
    }
  );

  it.each([
    [3, 6],
    [40, 100],
  ])(
    "should generate a string with a min length of %s and a max of %s ",
    (expectedMin: number, expectedMax: number) => {
      const str = RandomString.getOne({
        options: {
          min: expectedMin,
          max: expectedMax,
        },
      });
      expect(
        str.length >= expectedMin && str.length <= expectedMax
      ).toBeTruthy();
    }
  );

  it.each([
    [6, 1, 5],
    [10, 34, 52],
  ])(
    "should generate an array of %s string with a min length of %s and a max of %s ",
    (expectedArraySize: number, expectedMin: number, expectedMax) => {
      const res = RandomString.getArray({
        length: expectedArraySize,
        options: {
          min: expectedMin,
          max: expectedMax,
        },
      });
      expect(res.length).toBe(expectedArraySize);
      res.forEach((str) =>
        expect(
          str.length >= expectedMin && str.length <= expectedMax
        ).toBeTruthy()
      );
    }
  );
});
