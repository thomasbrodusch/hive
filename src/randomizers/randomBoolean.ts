import MockFactory from "@/mocking/mock.factory";

export default new MockFactory<boolean>(
  (
    { options }: { options: { truthyThreshold?: number } } = { options: {} }
  ) => {
    const { truthyThreshold = 0.5 } = options;
    return Math.random() < truthyThreshold;
  }
);
