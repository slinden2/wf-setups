import React from "react";
import styled, { css } from "styled-components";

const FieldContainer = styled.div`
  font-size: 1.4rem;
  /* color: ${(props) => props.theme.colors.white}; */
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledLabel = styled.label`
  display: block;
`;

const inputStyles = css<{ isError?: boolean }>`
  display: block;
  font-size: 1.4rem;
  padding: 1rem;
  border-radius: ${(props) => props.theme.borderRadius};
  border-style: none;
  border: 1px solid ${(props) => props.theme.colors.inputFieldGrey};
  outline: none;
  ${({ isError }) =>
    isError &&
    css`
      box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.red};
    `}
  :focus {
    ${(props) =>
      props.isError
        ? css``
        : css`
            box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.blue};
          `}
  }
`;

export const StyledInput = styled.input<{
  isError?: boolean;
  maxWidth?: string;
  marginBottom?: string;
}>`
  ${inputStyles}
  width: 100%;
  min-width: 100px;
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "200px")};
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? marginBottom : "auto"};
`;

const StyledTextArea = styled.textarea<{ isError?: boolean }>`
  ${inputStyles}
  width: 100%;
  max-width: 400px;
  height: 100px;
`;

export interface InputFieldProps {
  name: "power" | "setup" | "note";
  defaultValue?: string;
  register: any;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  tag?: "input" | "textarea";
  isError?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  defaultValue,
  register,
  ref,
  tag,
  isError,
}) => {
  const props = {
    name,
    defaultValue,
    ref: (e: any) => {
      register(e, {
        required: true,
      });

      if (ref) {
        ref.current = e;
      }
    },
    isError,
  };

  return (
    <FieldContainer>
      <StyledLabel>{name.charAt(0).toUpperCase() + name.slice(1)}</StyledLabel>
      {tag === "textarea" ? (
        <StyledTextArea {...props} />
      ) : (
        <StyledInput {...props} />
      )}
    </FieldContainer>
  );
};
