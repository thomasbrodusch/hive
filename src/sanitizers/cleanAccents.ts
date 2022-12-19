import isString from "@/checkers/isString";

export default (input: string): string => {
  if (!isString(input)) {
    return;
  }
  const accentRegex = /[\u0300-\u036f]/g;
  return input.normalize("NFD")?.replace(accentRegex, "");
};
