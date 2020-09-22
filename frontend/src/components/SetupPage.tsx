import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useSetupContext } from "../context/SetupContext";
import { EditSetupInput } from "../generated/apolloComponents";
import { StatType } from "../types/StatType";
import { inputFieldData } from "./form/formFieldData";
import { InputField } from "./form/InputField";

const statArray: Array<StatType> = [
  "power",
  "suspension",
  "gear",
  "differential",
  "brake",
];

export const SetupPage = () => {
  const [isEditing, setEditing] = React.useState<boolean>(false);
  const { getSetup, deleteSetup, editSetup } = useSetupContext()!;

  const { id } = useParams<{ id: string }>();
  const curSetup = getSetup(id);

  const methods = useForm<EditSetupInput>();
  const { handleSubmit, register } = methods;

  if (!curSetup) {
    return null;
  }

  const onSubmit = async (data: EditSetupInput) => {
    await editSetup({
      variables: {
        id: Number(id),
        power: data.power,
        suspension: Number(data.suspension),
        gear: Number(data.gear),
        differential: Number(data.differential),
        brake: Number(data.brake),
        note: data.note ? data.note : "",
      },
    });
    setEditing(false);
  };

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th>Track</th>
            <td>{curSetup.track.name}</td>
          </tr>
          <tr>
            <th>Track Category</th>
            <td>{curSetup.track.origin}</td>
          </tr>
          <tr>
            <th>Vehicle</th>
            <td>{curSetup.vehicle.name}</td>
          </tr>
          {!isEditing &&
            statArray.map((stat) => (
              <tr key={stat}>
                <th>{stat.charAt(0).toUpperCase() + stat.slice(1)}</th>
                <td>{curSetup[stat]}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {!isEditing && curSetup.note && <p>{curSetup.note}</p>}
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFieldData.map((input) => (
              <InputField
                key={input.name}
                {...input}
                defaultValue={String(curSetup[input.name])}
                register={register}
              />
            ))}
            <button type="submit">Save</button>
          </form>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <button onClick={() => setEditing(true)}>Modify</button>
          <button
            onClick={async () =>
              await deleteSetup({ variables: { id: Number(id) } })
            }
          >
            Delete
          </button>
        </>
      )}
    </section>
  );
};
