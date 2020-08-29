import React from "react";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const AddSetupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("track"));

  console.log(errors);

  const powerValidationPattern = /^[aAbBcCdD]\d{2,3}$/;
  const setupValueValidationPattern = /[12345]/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select name="track" ref={register}>
        <option>1</option>
        <option>2</option>
      </select>
      <select name="car" ref={register}>
        <option>3</option>
        <option>4</option>
      </select>
      <input
        name="power"
        defaultValue="C164"
        ref={register({ required: true, pattern: powerValidationPattern })}
      />
      <input
        name="suspension"
        ref={register({ required: true, pattern: setupValueValidationPattern })}
      />
      <input
        name="gears"
        ref={register({ required: true, pattern: setupValueValidationPattern })}
      />
      <input
        name="differential"
        ref={register({ required: true, pattern: setupValueValidationPattern })}
      />
      <input
        name="brake"
        ref={register({ required: true, pattern: setupValueValidationPattern })}
      />
      <input type="submit" />
    </form>
  );
};

export default AddSetupForm;
