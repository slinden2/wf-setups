import { InputFieldProps } from "./InputField";
import * as yup from "yup";

const setupValueValidation = yup
  .string()
  .required()
  .matches(/^[12345]{4}$/);

export const baseValidationSchema = {
  power: yup
    .string()
    .required()
    .matches(/^[aAbBcCdD]\d{2,3}$/, { message: "invalid power value" }),
  setup: setupValueValidation,
  note: yup.string().max(1000, `must not exceed 1000 characters`),
  private: yup.boolean().required(),
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
