import { InputFieldProps } from "./InputField";
import * as yup from "yup";

const setupValueValidation = yup.number().min(1, "min is 1").max(5, "max is 5");

export const baseValidationSchema = {
  power: yup
    .string()
    .required()
    .matches(/^[aAbBcCdD]\d{2,3}$/, { message: "invalid power value" }),
  suspension: setupValueValidation,
  gear: setupValueValidation,
  differential: setupValueValidation,
  brake: setupValueValidation,
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
    name: "suspension",
    defaultValue: "",
  },
  {
    name: "gear",
    defaultValue: "",
  },
  {
    name: "differential",
    defaultValue: "",
  },
  {
    name: "brake",
    defaultValue: "",
  },
  {
    name: "note",
    defaultValue: "",
    tag: "textarea",
  },
];
