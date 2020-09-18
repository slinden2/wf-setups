import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { OptionType } from "../types/OptionType";
import { useAddSetupMutation } from "../generated/apolloComponents";
import { useSetupContext } from "../context/SetupContext";
import { InputField } from "./form/InputField";
import { inputFieldData } from "./form/formFieldData";

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
  const { addSetup: addSetupToState } = useSetupContext()!;
  const [addSetup] = useAddSetupMutation();
  const methods = useForm<FormInputs>();
  const { handleSubmit, control, register, reset } = methods;

  const onSubmit = async (data: FormInputs) => {
    try {
      const response = await addSetup({
        variables: {
          trackId: Number(data.track.value),
          vehicleId: Number(data.vehicle.value),
          power: data.power,
          suspension: Number(data.suspension),
          gear: Number(data.gear),
          differential: Number(data.differential),
          brake: Number(data.brake),
        },
      });

      if (!response.data?.addSetup?.id) {
        throw new Error("no setup id returned");
      }

      addSetupToState({
        id: response.data?.addSetup?.id,
        track: {
          id: data.track.value,
          name: data.track.label,
        },
        vehicle: {
          id: data.vehicle.value,
          name: data.vehicle.label,
        },
        power: data.power,
        suspension: Number(data.suspension),
        gear: Number(data.gear),
        differential: Number(data.differential),
        brake: Number(data.brake),
      });
      reset();
    } catch (err) {
      console.error(err);
      reset();
    }
  };

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
      {inputFieldData.map((input) => (
        <InputField {...input} register={register} />
      ))}
      <input type="submit" />
    </form>
  );
};

export default AddSetupForm;
