import MockFactory from "@/mocking/mock.factory";

export default new MockFactory<number>(
  (
    { options }: { options: { min?: number; max?: number } } = { options: {} }
  ) => {
    const { min = 0, max = 10 } = options;
    const sizeMax = min > max ? min : max;
    return Math.floor(Math.random() * (sizeMax - min + 1) + min);
  }
);
