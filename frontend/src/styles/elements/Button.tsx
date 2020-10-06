import React from "react";
import styled, { css } from "styled-components";

type ColorType = "primary" | "secondary" | "warn";

const StyledButton = styled.button<{
  colorType: ColorType;
  extendWidth: boolean;
}>`
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 1.5rem;
  cursor: pointer;
  width: 100%;
  margin: 1rem 0;
  box-shadow: ${(props) => props.theme.boxShadowLight};

  @media ${(props) => props.theme.mq.overMobilePortrait} {
    ${(props) =>
      props.extendWidth
        ? css`
            width: 100%;
            margin-right: 0;
          `
        : css`
            width: auto;
            margin-right: 1rem;
          `}
  }

  ${(props) =>
    props.colorType === "primary" &&
    css`
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.blue};
    `}

  ${(props) =>
    props.colorType === "secondary" &&
    css`
      background-color: ${(props) => props.theme.colors.lightGrey2};
    `}

    ${(props) =>
    props.colorType === "warn" &&
    css`
      color: ${(props) => props.theme.colors.white};
      background-color: ${(props) => props.theme.colors.red};
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
    <StyledButton
      onClick={onClick}
      colorType={_colorType}
      extendWidth={!!extendWidth}
    >
      <div>{children}</div>
    </StyledButton>
  );
};
