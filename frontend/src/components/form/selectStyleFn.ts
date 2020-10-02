import { StylesConfig } from "react-select";
import { DefaultTheme } from "styled-components";

interface Props {
  isError: boolean;
  theme: DefaultTheme;
}

export const selectStyleFn = ({ isError, theme }: Props): StylesConfig => {
  return {
    // container: (provided, _state) => ({
    //   ...provided,
    //   marginTop: "1rem",
    //   marginBottom: "1rem",
    //   fontSize: "1.5rem",
    //   maxWidth: "400px",
    // }),
    // control: (provided, state) => ({
    //   ...provided,
    //   ...(isError && { boxShadow: `0 0 0 2px ${theme.colors.red}` }),
    //   backgroundColor: theme.colors.secondary,
    //   borderStyle: "none",
    //   color: theme.colors.white,
    //   ...(state.isFocused && { boxShadow: `0 0 0 1px` }),
    // }),
    // menu: (provided, _state) => ({
    //   ...provided,
    //   backgroundColor: theme.colors.secondary,
    //   borderStyle: "none",
    //   color: theme.colors.white,
    // }),
    // option: (provided, state) => ({
    //   ...provided,
    //   borderStyle: "none",
    //   ...(state.isSelected && { backgroundColor: theme.colors.main }),
    //   ...(state.isFocused && { backgroundColor: theme.colors.main }),
    // }),
    // singleValue: (provided, _state) => ({
    //   ...provided,
    //   color: theme.colors.white,
    // }),
    // input: (provided, _state) => ({
    //   ...provided,
    //   color: theme.colors.white,
    // }),
    // placeholder: (provided, _state) => ({
    //   ...provided,
    //   color: theme.colors.black,
    // }),
  };
};
