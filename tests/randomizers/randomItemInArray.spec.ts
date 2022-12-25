import { describe, expect } from "vitest";
import RandomString from "@/randomizers/randomString";
import RandomItemInArray from "@/randomizers/randomItemInArray";
import RandomNumber from "@/randomizers/randomNumber";
import RandomBoolean from "@/randomizers/randomBoolean";

describe("RandomItemInArray", () => {
  it.each([
    [RandomString.getArray()],
    [RandomNumber.getArray({ length: 12 })],
    [RandomBoolean.getArray({ length: 5 })],
  ])("should return a random item from array %s", (expectedArray: any[]) => {
    expect(
      expectedArray.includes(
        RandomItemInArray.getOne({ options: { array: expectedArray } })
      )
    ).toBeTruthy();
  });

  it.each([
    [RandomString.getArray()],
    [RandomNumber.getArray({ length: 2 })],
    [RandomBoolean.getArray({ length: 17 })],
  ])("should return a random items from array %s", (expectedArray: any[]) => {
    RandomItemInArray.getArray({
      length: 5,
      options: { array: expectedArray },
    }).forEach((v) => {
      expect(expectedArray.includes(v)).toBeTruthy();
    });
  });
});
