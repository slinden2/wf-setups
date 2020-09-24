import React from "react";
import styled, { css } from "styled-components";
import { AddSetupFormIds } from "../../types/AddSetupFormIds";

const StyledLabel = styled.label`
  display: block;
`;

const inputStyles = css<{ isError?: boolean }>`
  display: block;
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  ${({ isError }) =>
    isError &&
    css`
      border: 2px solid red;
    `}
`;

const StyledInput = styled.input<{ isError?: boolean }>`
  ${inputStyles}
`;

const StyledTextArea = styled.textarea<{ isError?: boolean }>`
  ${inputStyles}
`;

export interface InputFieldProps {
  name: AddSetupFormIds;
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
    <div>
      <StyledLabel>{name.toUpperCase()}</StyledLabel>
      {tag === "textarea" ? (
        <StyledTextArea {...props} />
      ) : (
        <StyledInput {...props} />
      )}
    </div>
  );
};
