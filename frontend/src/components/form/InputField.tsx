import React from "react";

export interface InputFieldProps {
  name: "power" | "setup" | "note";
  defaultValue?: string;
  register: any;
  ref?: React.MutableRefObject<HTMLInputElement | null>;
  tag?: "input" | "textarea";
}

export const InputField: React.FC<InputFieldProps> = ({
  name,
  defaultValue,
  register,
  ref,
  tag,
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
  };

  return (
    <div>
      <label>{name.toUpperCase()}</label>
      {tag === "textarea" ? <textarea {...props} /> : <input {...props} />}
    </div>
  );
};
