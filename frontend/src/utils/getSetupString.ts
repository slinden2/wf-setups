export const getSetupString = (
  suspension: number,
  gear: number,
  differential: number,
  brake: number
): number => {
  return Number(
    suspension.toString() +
      gear.toString() +
      differential.toString() +
      brake.toString()
  );
};
