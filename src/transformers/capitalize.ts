import isString from "@/checkers/isString";

export default (input: string): string => {
  if (!isString(input)) {
    return;
  }
  return input
    .split(" ")
    .map((val) => `${val[0].toUpperCase()}${val.slice(1)}`)
    .join(" ");
};
