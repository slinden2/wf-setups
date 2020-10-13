export const roundToDecimal = (num: number | string, numOfDecimals: number) => {
  const coefficient = 10 ** numOfDecimals;
  return Math.round((Number(num) + Number.EPSILON) * coefficient) / coefficient;
};
