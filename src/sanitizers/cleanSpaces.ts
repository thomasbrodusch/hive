import isString from "@/validators/isString";

export default (input: string): string => {
  if (!isString(input)) {
    return;
  }
  return input.replace(/\s/g, "");
};
