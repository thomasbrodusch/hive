import capitalize from "@/transformers/capitalize";

export default (input?: string): string =>
  input.split(" ").reduce((acc, val) => (acc += capitalize(val)));
