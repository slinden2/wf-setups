import React from "react";

export interface InputFieldProps {
  name: string;
  defaultValue?: string;
  register: any;
  pattern: RegExp;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  defaultValue,
  register,
  pattern,
  ref,
}) => {
  return (
    <div>
      <label>{name.toUpperCase()}</label>
      <input
        name={name}
        defaultValue={defaultValue}
        ref={(e) => {
          register(e, {
            required: true,
            pattern: pattern,
          });

          if (ref) {
            ref.current = e;
          }
        }}
      />
    </div>
  );
};
