import { StylesConfig } from "react-select";
import { DefaultTheme } from "styled-components";

interface Props {
  isError: boolean;
  theme: DefaultTheme;
}

export const selectStyleFn = ({ isError, theme }: Props): StylesConfig => {
  return {
    container: (provided, _state) => ({
      ...provided,
      marginTop: "1rem",
      marginBottom: "1rem",
      fontSize: "1.4rem",
      maxWidth: "400px",
    }),
    control: (provided, state) => ({
      ...provided,
      ...(isError && { boxShadow: `0 0 0 2px ${theme.colors.red}` }),
      ...(state.isFocused && { boxShadow: `0 0 0 1px ${theme.colors.blue}` }),
    }),
    option: (provided, state) => ({
      ...provided,
      ...(state.isSelected && { backgroundColor: theme.colors.blue }),
      ...(state.isFocused && {
        backgroundColor: theme.colors.lightGrey,
        color: "black",
      }),
    }),
  };
};
