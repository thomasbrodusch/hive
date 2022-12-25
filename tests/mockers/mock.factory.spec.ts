import MockFactory from "@/mocking/mock.factory";
import RandomString from "@/randomizers/randomString";
import RandomBoolean from "@/randomizers/randomBoolean";

describe("Mock.factory", () => {
  interface UserMockInterface {
    id: string;
    fullName: string;
    isActive: boolean;
  }

  type UserMockType = {
    id: string;
    fullName: string;
    email: string;
    isActive: boolean;
    sayMyName: () => string;
  };

  class User implements UserMockType {
    id: string;
    fullName: string;
    email: string;
    isActive: boolean;

    constructor(model: UserMockInterface) {
      this.id = model.id;
      this.fullName = model.fullName;
      this.email = `${this.fullName}@hello.com`;
    }

    sayMyName(): string {
      return `Say my name, say my naaaame... ${this.fullName}`;
    }
  }
  const USER_MOCK = new MockFactory<UserMockType>(({ override = {} }) => {
    return new User({
      id: RandomString.getOne(),
      fullName: RandomString.getOne(),
      isActive: RandomBoolean.getOne(),
      ...override,
    });
  });

  it("should generate an user", () => {
    const generatedUser = USER_MOCK.getOne();
    expect(generatedUser instanceof User).toBeTruthy();
    expect(generatedUser.email).toBe(`${generatedUser.fullName}@hello.com`);
    expect(generatedUser.sayMyName()).toEqual(
      `Say my name, say my naaaame... ${generatedUser.fullName}`
    );
  });

  describe("getArray", () => {
    it("should generate an array of 6 users", () => {
      const generatedUsers = USER_MOCK.getArray({
        length: 6,
      });

      expect(generatedUsers.length).toBe(6);
      generatedUsers.forEach((u) => {
        expect(u instanceof User).toBeTruthy();
        expect(u.email).toBe(`${u.fullName}@hello.com`);
        expect(u.sayMyName()).toEqual(
          `Say my name, say my naaaame... ${u.fullName}`
        );
      });
    });

    it("should override user's name at index 2 with 'Aaron Swartz' ", () => {
      const expectedOverrideUser = { fullName: "Aaron Swartz" };
      const generatedUsers = USER_MOCK.getArray({
        length: 3,
        overrides: [{}, {}, expectedOverrideUser],
      });
      expect(generatedUsers[2].fullName).toEqual(expectedOverrideUser.fullName);
    });
  });
});
