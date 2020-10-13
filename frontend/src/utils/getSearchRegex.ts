export const getSearchRegex = (searchStr: string) => {
  const regexArr = searchStr
    .split(" ")
    .filter((str) => !!str.length)
    .map((str) => new RegExp(str.trim(), "i"));

  if (!regexArr.length) {
    return [new RegExp("", "i")];
  }

  return regexArr;
};
