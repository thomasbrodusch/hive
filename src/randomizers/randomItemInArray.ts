import MockFactory from "@/mocking/mock.factory";

export default new MockFactory<unknown>(
  ({ options }: { options: { array?: unknown[] } } = { options: {} }) => {
    const { array = [] } = options;
    return array[Math.floor(Math.random() * array.length)];
  }
);
