import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import createDOMPurify from "dompurify";
import TurndownService from "turndown";

import { useSetupContext } from "../context/SetupContext";
import { EditSetupInput } from "../generated/apolloComponents";
import { StatType } from "../types/StatType";
import { inputFieldData } from "./form/formFieldData";
import { InputField } from "./form/InputField";
import config from "../config";
import { getSetupString } from "../utils/getSetupString";

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

  const setupString = getSetupString(
    curSetup.suspension,
    curSetup.gear,
    curSetup.differential,
    curSetup.brake
  );

  const DOMPurify = createDOMPurify(window);
  const turndownService = new TurndownService(config.turndown.options);

  const onSubmit = async (data: EditSetupInput) => {
    await editSetup({
      variables: {
        id: Number(id),
        power: data.power,
        setup: Number(data.setup),
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
      {!isEditing && curSetup.note && (
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(curSetup.note),
          }}
        />
      )}
      {isEditing ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)}>
            {inputFieldData.map((input) => {
              const defaultValue =
                input.name === "setup"
                  ? setupString.toString()
                  : turndownService.turndown(curSetup[input.name]!.toString());
              return (
                <InputField
                  key={input.name}
                  {...input}
                  defaultValue={defaultValue}
                  register={register}
                />
              );
            })}
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
