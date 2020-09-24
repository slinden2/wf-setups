import { StylesConfig } from "react-select";

interface Props {
  isError: boolean;
}

export const selectStyleFn = ({ isError }: Props): StylesConfig => {
  return {
    control: (provided, _state) => ({
      ...provided,
      ...(isError && { boxShadow: "0 0 0 1px red" }),
    }),
  };
};
