import React from "react";
import styled, { css } from "styled-components";

type ColorType = "primary" | "secondary" | "warn";

const StyledButton = styled.button<{
  colorType: ColorType;
  extendWidth: boolean;
}>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.5rem;
  cursor: pointer;

  ${(props) =>
    props.extendWidth &&
    css`
      width: 100%;
    `}
`;

interface Props extends React.HTMLProps<HTMLButtonElement> {
  colorType?: ColorType;
  extendWidth?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  colorType,
  extendWidth,
}) => {
  const _colorType = colorType ? colorType : "primary";

  return (
    <StyledButton onClick={onClick} colorType={_colorType} extendWidth>
      <div>{children}</div>
    </StyledButton>
  );
};
