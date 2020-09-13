import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { OptionType } from "../types/OptionType";
import { useAddSetupMutation } from "../generated/apolloComponents";

interface FormInputs {
  track: OptionType;
  vehicle: OptionType;
  power: string;
  suspension: number;
  gear: number;
  differential: number;
  brake: number;
}

interface Props {
  tracks: OptionType[];
  vehicles: OptionType[];
}

const AddSetupForm: React.FC<Props> = ({ tracks, vehicles }) => {
  const [addSetup] = useAddSetupMutation();
  const methods = useForm<FormInputs>();
  const { handleSubmit, control, register, reset } = methods;

  const onSubmit = async (data: FormInputs) => {
    try {
      await addSetup({
        variables: {
          trackId: Number(data.track.value),
          vehicleId: Number(data.vehicle.value),
          suspension: Number(data.suspension),
          gear: Number(data.gear),
          differential: Number(data.differential),
          brake: Number(data.brake),
        },
      });
      reset();
    } catch (err) {
      console.error(err);
      reset();
    }
  };

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
        name="gear"
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
