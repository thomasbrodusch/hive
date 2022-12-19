export default (input?: string): string => {
  return input
    ?.toString()
    .split(" ")
    .map((val) => `${val[0].toUpperCase()}${val.slice(1)}`)
    .join(" ");
};
