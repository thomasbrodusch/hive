interface optionalArgs {
  options?: Object;
  override?: Object;
}

export default class MockFactory<Type> {
  constructor(private generatorFn: (args: optionalArgs) => Type) {}

  getOne(args: optionalArgs = {}): Type {
    const { options = {}, override = {} } = args;
    return this.generatorFn({ options, override });
  }

  getArray(
    args: {
      options?: Object;
      overrides?: any[];
      length?: number;
    } = {}
  ): Type[] {
    const { options = {}, overrides = [], length = 10 } = args;
    return Array.from(new Array(length)).map((_, i) =>
      this.getOne({ options, override: overrides[i] })
    );
  }
}
