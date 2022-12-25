import MockFactory from "@/mocking/mock.factory";

export default new MockFactory<string>(
  (
    { options }: { options: { min?: number; max?: number } } = { options: {} }
  ) => {
    const { min = 0, max = 10 } = options;
    const sizeMax = min > max ? min : max;
    const randomSize = Math.floor(Math.random() * (sizeMax - min + 1) + min);
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return Array.from(Array(randomSize)).reduce(
      (res) =>
        (res += characters.charAt(
          Math.floor(Math.random() * characters.length)
        )),
      ""
    );
  }
);
