import React from "react";
import styled, { css } from "styled-components";

const FieldContainer = styled.div``;

const StyledLabel = styled.label``;

const inputStyles = css<{ isError?: boolean }>``;

const StyledInput = styled.input<{ isError?: boolean }>`
  ${inputStyles}
  min-width: 100px;
  max-width: 200px;
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
