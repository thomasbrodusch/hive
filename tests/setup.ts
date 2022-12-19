import { SpyInstance, vi } from "vitest";

const spyError = vi.spyOn(console, "error");
const spyWarn = vi.spyOn(console, "warn");

afterEach(() => {
  const throwIfFailure = (spy: SpyInstance) => {
    if (spy.mock.calls.length) {
      throw new Error(`Expected test not to call console.${spy.getMockName()}`);
    }
  };
  throwIfFailure(spyError);
  throwIfFailure(spyWarn);
});
