import RandomObject from "@/randomizers/randomObject";

describe("RandomObject", () => {
  it.each([[6], [10]])(
    "should generate object with %s props",
    (expectedPropCount: number) => {
      expect(
        Object.keys(
          RandomObject.getOne({
            options: { propCount: expectedPropCount },
          })
        ).length
      ).toBe(expectedPropCount);
    }
  );

  it.each([
    [3, 6],
    [20, 10],
  ])(
    "should generate an array of object with %s props",
    (expectedArraySize, expectedPropCount: number) => {
      const createdObjects = RandomObject.getArray({
        length: expectedArraySize,
        options: { propCount: expectedPropCount },
      });

      expect(createdObjects.length).toBe(expectedArraySize);
      createdObjects.forEach((o) => {
        expect(Object.keys(o).length).toBe(expectedPropCount);
      });
    }
  );
});
