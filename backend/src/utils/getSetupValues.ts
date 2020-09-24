import { SetupValues } from "../types/SetupValues";

export const getSetupValues = (setupNumber: number): SetupValues => {
  const setupString = setupNumber.toString();

  if (setupString.length !== 4) {
    throw new Error("incorrect setup string");
  }

  return {
    suspension: Number(setupString.charAt(0)),
    gear: Number(setupString.charAt(1)),
    differential: Number(setupString.charAt(2)),
    brake: Number(setupString.charAt(3)),
  };
};
