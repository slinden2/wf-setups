import React from "react";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import { yupResolver } from "@hookform/resolvers";
import { MyOptionType } from "../types/OptionType";
import { useSetupContext } from "../context/SetupContext";
import { InputField } from "./form/InputField";
import { inputFieldData, addSetupValidationSchema } from "./form/formFieldData";
import { AddSetupInputWithSelect } from "../types/AddSetupInputWithSelect";
import { useNotificationContext } from "../context/NotificationContext";
import { selectStyleFn } from "./form/selectStyleFn";
import { useThemeContext } from "../context/ThemeContext";
import { Button } from "../styles/elements/Button";
import styled from "styled-components";

const CheckboxContainer = styled.div`
  display: flex;
  font-size: 1.2rem;

  label {
    margin-right: 0.6rem;
  }
`;

interface Props {
  tracks: MyOptionType[];
  vehicles: MyOptionType[];
}

const AddSetupForm: React.FC<Props> = ({ tracks, vehicles }) => {
  const { addSetup, toggleModTracks } = useSetupContext();
  const { setNotification } = useNotificationContext();
  const theme = useThemeContext();
  const methods = useForm<AddSetupInputWithSelect>({
    resolver: yupResolver(addSetupValidationSchema),
  });
  const { handleSubmit, control, register, reset, errors } = methods;

  const onSubmit = async (data: AddSetupInputWithSelect) => {
    console.log(data);
    try {
      const response = await addSetup({
        variables: {
          trackId: Number(data.track.value),
          vehicleId: Number(data.vehicle.value),
          power: data.power,
          setup: data.setup,
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

  const filterTracks = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checkboxState = event.target.checked;
    toggleModTracks(checkboxState);
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
        styles={selectStyleFn({ isError: !!errors.track, theme })}
      />
      <CheckboxContainer>
        <label>Show mod tracks</label>
        <input
          type="checkbox"
          defaultChecked
          onChange={(e) => filterTracks(e)}
        />
      </CheckboxContainer>
      <Controller
        as={Select}
        name="vehicle"
        control={control}
        options={vehicles}
        placeholder="Choose a vehicle"
        defaultValue=""
        styles={selectStyleFn({ isError: !!errors.vehicle, theme })}
      />
      {inputFieldData.map((input) => (
        <InputField
          key={input.name}
          {...input}
          isError={!!errors[input.name]}
          register={register}
        />
      ))}
      <Button type="submit">Submit</Button>
      <Button onClick={() => reset()} colorType="secondary">
        Reset
      </Button>
    </form>
  );
};

export default AddSetupForm;
