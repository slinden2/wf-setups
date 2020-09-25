import React from "react";
import styled, { css } from "styled-components";

type ColorType = "primary" | "secondary";

const StyledButton = styled.button<{ colorType: ColorType }>`
  margin-top: 1.5rem;
  margin-right: 1rem;
  font-size: 2rem;
  padding: 1.5rem;
  outline: none;
  font-weight: bold;
  border-style: none;
  border-radius: ${(props) => props.theme.borderRadius};
  border: 1px solid ${(props) => props.theme.colors.white};
  cursor: pointer;

  ${(props) =>
    props.colorType === "primary" &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.white};
    `}

  ${(props) =>
    props.colorType === "secondary" &&
    css`
      background-color: ${(props) => props.theme.colors.main};
      color: ${(props) => props.theme.colors.white};
    `}
`;

interface Props {
  type?: "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
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
