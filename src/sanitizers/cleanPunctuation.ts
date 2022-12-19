export default (input: string): string => {
  const punctRegex =
    /[\u2000-\u206F\u2E00-\u2E7F\\!"#$&()*«»+,.:;%<=>?@[\]^_`{|}~：]/g;
  const rlSqmRegex = /[\u2018-\u2019]/g; //right & left single quotation mark
  return input
    .normalize("NFD")
    .replace(rlSqmRegex, "'")
    .replace(punctRegex, "");
};
