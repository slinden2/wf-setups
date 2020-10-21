import React from "react";
import { DeepMap, FieldError } from "react-hook-form";
import TurndownService from "turndown";
import config from "../../config";
import { EditSetupInput, Setup } from "../../generated/apolloComponents";

import Checkbox from "../Checkbox";
import { inputFieldData } from "../form/formFieldData";
import { InputField } from "../form/InputField";

interface Props {
  setupString: number;
  setup: Setup;
  errors: DeepMap<EditSetupInput, FieldError>;
  register: any;
}

const EditSetupForm: React.FC<Props> = ({
  setupString,
  setup,
  errors,
  register,
}) => {
  const turndownService = new TurndownService(config.turndown.options);

  return (
    <div>
      <form>
        {inputFieldData.map((input) => {
          const defaultValue =
            input.name === "setup"
              ? setupString.toString()
              : turndownService.turndown(setup[input.name]!.toString());
          return (
            <InputField
              key={input.name}
              {...input}
              defaultValue={defaultValue}
              register={register}
              isError={!!errors[input.name]}
            />
          );
        })}
        <Checkbox
          name="private"
          label="Do not include this setup in setup suggestions"
          defaultChecked={setup.private}
          register={register}
        />
      </form>
    </div>
  );
};

export default EditSetupForm;
