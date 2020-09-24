import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers";
import { OptionType } from "../types/OptionType";
import { useSetupContext } from "../context/SetupContext";
import { InputField } from "./form/InputField";
import { inputFieldData, addSetupValidationSchema } from "./form/formFieldData";
import { AddSetupInputWithSelect } from "../types/AddSetupInputWithSelect";
import { useNotificationContext } from "../context/NotificationContext";
import { selectStyleFn } from "./form/selectStyleFn";

interface Props {
  tracks: OptionType[];
  vehicles: OptionType[];
}

const AddSetupForm: React.FC<Props> = ({ tracks, vehicles }) => {
  const { addSetup } = useSetupContext()!;
  const { setNotification } = useNotificationContext()!;
  const methods = useForm<AddSetupInputWithSelect>({
    resolver: yupResolver(addSetupValidationSchema),
  });
  const { handleSubmit, control, register, reset, errors } = methods;

  const onSubmit = async (data: AddSetupInputWithSelect) => {
    try {
      const response = await addSetup({
        variables: {
          trackId: Number(data.track.value),
          vehicleId: Number(data.vehicle.value),
          power: data.power,
          setup: Number(data.setup),
          note: data.note ? data.note : "",
        },
      });

      if (!response.data?.addSetup?.id) {
        throw new Error("no setup id returned");
      }

      reset();
    } catch (err) {
      setNotification({ type: "error", message: err.message });
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
        styles={selectStyleFn({ isError: !!errors.track })}
      />
      <Controller
        as={Select}
        name="vehicle"
        control={control}
        options={vehicles}
        placeholder="Choose a vehicle"
        defaultValue=""
        styles={selectStyleFn({ isError: !!errors.vehicle })}
      />
      {inputFieldData.map((input) => (
        <InputField
          key={input.name}
          {...input}
          isError={!!errors[input.name]}
          register={register}
        />
      ))}
      <input type="submit" />
    </form>
  );
};

export default AddSetupForm;
