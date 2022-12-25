import MockFactory from "@/mocking/mock.factory";
import RandomNumber from "@/randomizers/randomNumber";
import RandomString from "@/randomizers/randomString";
import RandomBoolean from "@/randomizers/randomBoolean";

export default new MockFactory<any>(
  ({ options }: { options: { propCount?: number } } = { options: {} }) => {
    const { propCount = 5 } = options;
    return Array.from(new Array(propCount)).reduce((obj, _, i) => {
      const fieldName = `field${i}_${RandomBoolean.getOne()}`;
      const fieldType = [RandomString, RandomNumber, RandomBoolean][
        RandomNumber.getOne({ options: { min: 0, max: 2 } })
      ];

      const isArray = RandomBoolean.getOne();

      obj[fieldName] = isArray
        ? fieldType.getArray({
            options: {
              array: RandomNumber.getOne({ options: { min: 0, max: 20 } }),
            },
          })
        : fieldType.getOne();
      return obj;
    }, {});
  }
);
