import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select, { OptionTypeBase } from "react-select";
import { OptionType } from "../types/OptionType";

interface IFormInputs {
  track: string;
  vehicle: string;
  power: string;
  suspension: number;
  gears: number;
  differential: number;
  brake: number;
}

interface Props {
  tracks: OptionType[];
  vehicles: OptionTypeBase[];
}

const AddSetupForm: React.FC<Props> = ({ tracks, vehicles }) => {
  const methods = useForm<IFormInputs>();
  const { handleSubmit, control, register } = methods;
  const onSubmit = (data: IFormInputs) => console.log(data);

  const powerValidationPattern = /^[aAbBcCdD]\d{2,3}$/;
  const setupValueValidationPattern = /[12345]/;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={Select}
        name="track"
        control={control}
        options={tracks}
        placeholder="Choose a track"
        defaultValue=""
      />
      <Controller
        as={Select}
        name="vehicle"
        control={control}
        options={vehicles}
        placeholder="Choose a vehicle"
        defaultValue=""
      />
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
