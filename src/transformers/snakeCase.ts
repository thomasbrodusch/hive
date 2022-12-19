export default (input: string): string => {
  return input
    .replace(/ /g, "")
    .split(/(?=[A-Z])/)
    .join("_")
    .toLowerCase();
};
