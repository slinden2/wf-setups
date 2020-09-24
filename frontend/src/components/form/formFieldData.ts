import { InputFieldProps } from "./InputField";
import * as yup from "yup";

const setupValueValidation = yup
  .number()
  .typeError("must be a number")
  .min(1111, "min is 1111")
  .max(5555, "max is 5555");

export const baseValidationSchema = {
  power: yup
    .string()
    .required()
    .matches(/^[aAbBcCdD]\d{2,3}$/, { message: "invalid power value" }),
  setup: setupValueValidation,
  note: yup.string().max(1000, `must not exceed 1000 characters`),
};

export const addSetupValidationSchema = yup.object().shape({
  ...baseValidationSchema,
  track: yup.object().required(),
  vehicle: yup.object().required(),
});

export const editSetupValidationSchema = yup.object().shape({
  ...baseValidationSchema,
});

export const inputFieldData: Omit<InputFieldProps, "register">[] = [
  {
    name: "power",
    defaultValue: "C164",
  },
  {
    name: "setup",
    defaultValue: "",
  },
  {
    name: "note",
    defaultValue: "",
    tag: "textarea",
  },
];
