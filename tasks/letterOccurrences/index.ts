export const findOccurrences = (
  str: string,
  char: string
): { [key: string]: number } => {
  return str
    .toLowerCase()
    .split(" ")
    .reduce((acc, word) => {
      return {
        ...acc,
        [word]: [...word].filter((el) => el === char.toLowerCase()).length,
      };
    }, {});
};
