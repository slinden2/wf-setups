import React from "react";
import styled from "styled-components";

type ColorType = "primary" | "secondary" | "warn";

const StyledButton = styled.button<{ colorType: ColorType }>``;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type?: "submit" | "reset";
  colorType?: ColorType;
}

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  colorType,
}) => {
  const _colorType = colorType ? colorType : "primary";

  return (
    <StyledButton type={type} onClick={onClick} colorType={_colorType}>
      {children}
    </StyledButton>
  );
};
