export default (input: string): string => {
  const accentRegex = /[\u0300-\u036f]/g;
  return input.normalize("NFD").replace(accentRegex, "");
};
