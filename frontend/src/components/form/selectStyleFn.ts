import { StylesConfig } from "react-select";

interface Props {
  isError: boolean;
}

export const selectStyleFn = ({ isError }: Props): StylesConfig => {
  return {
    container: (provided, _state) => ({
      ...provided,
      margin: "0.5rem 0.5rem",
    }),
    control: (provided, _state) => ({
      ...provided,
      ...(isError && { boxShadow: "0 0 0 1px red" }),
    }),
  };
};
