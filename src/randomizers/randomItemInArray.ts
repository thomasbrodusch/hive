import MockFactory from "@/mocking/mock.factory";

export default new MockFactory<any>(
  ({ options }: { options: { array?: any[] } } = { options: {} }) => {
    const { array = [] } = options;
    return array[Math.floor(Math.random() * array.length)];
  }
);
