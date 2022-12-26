import capitalize from "@/transformers/capitalize";
import isString from "@/validators/isString";

export default (input: string): string => {
  if (!isString(input)) {
    return;
  }
  return input.split(" ").reduce((acc, val) => (acc += capitalize(val)));
};
