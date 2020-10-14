import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  font-size: 1.2rem;

  label {
    margin-left: 0.6rem;
  }
`;

interface Props {
  name: string;
  label: string;
  defaultChecked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  register?: any;
}

const Checkbox: React.FC<Props> = ({
  name,
  label,
  defaultChecked,
  onChange,
  register,
}) => {
  return (
    <Container>
      <input
        name={name}
        type="checkbox"
        defaultChecked={defaultChecked}
        onChange={onChange ? (e) => onChange(e) : undefined}
        ref={register ? register({ required: true }) : undefined}
      />
      <label>{label}</label>
    </Container>
  );
};

export default Checkbox;
