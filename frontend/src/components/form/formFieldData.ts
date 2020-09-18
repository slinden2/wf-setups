import { InputFieldProps } from "./InputField";

const powerValidationPattern = /^[aAbBcCdD]\d{2,3}$/;
const setupValueValidationPattern = /[12345]/;

export const inputFieldData: Omit<InputFieldProps, "register">[] = [
  {
    name: "power",
    defaultValue: "C164",
    pattern: powerValidationPattern,
  },
  {
    name: "suspension",
    defaultValue: "",
    pattern: setupValueValidationPattern,
  },
  {
    name: "gear",
    defaultValue: "",
    pattern: setupValueValidationPattern,
  },
  {
    name: "differential",
    defaultValue: "",
    pattern: setupValueValidationPattern,
  },
  {
    name: "brake",
    defaultValue: "",
    pattern: setupValueValidationPattern,
  },
];
