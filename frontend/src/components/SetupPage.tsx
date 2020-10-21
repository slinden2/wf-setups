import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory, Link, Redirect } from "react-router-dom";
import styled from "styled-components";

import { useSetupContext } from "../context/SetupContext";
import { EditSetupInput } from "../generated/apolloComponents";
import { editSetupValidationSchema } from "./form/formFieldData";
import { useNotificationContext } from "../context/NotificationContext";
import { yupResolver } from "@hookform/resolvers";
import { getSetupString } from "../utils/getSetupString";
import { Button } from "../styles/elements/Button";
import Loader from "../styles/elements/Loader";
import SetupDetails from "./setup/SetupDetails";
import Note from "./setup/Note";
import EditSetupForm from "./setup/EditSetupForm";

const TableContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
  color: ${(props) => props.theme.colors.darkGrey};
`;

export const SetupPage = () => {
  const [isEditing, setEditing] = React.useState<boolean>(false);
  const { getSetup, deleteSetup, editSetup } = useSetupContext();
  const { setNotification } = useNotificationContext();

  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const curSetup = getSetup(id);

  const methods = useForm<EditSetupInput>({
    resolver: yupResolver(editSetupValidationSchema),
  });
  const { handleSubmit, register, errors } = methods;

  if (curSetup.loading) {
    return <Loader text="Loading" />;
  }

  if (!curSetup.data) {
    return <Redirect to="/404" />;
  }

  const setupString = getSetupString(
    curSetup.data.suspension,
    curSetup.data.gear,
    curSetup.data.differential,
    curSetup.data.brake
  );

  const onSubmit = async (data: EditSetupInput) => {
    try {
      await editSetup({
        variables: {
          id: Number(id),
          power: data.power,
          setup: data.setup,
          private: data.private,
          note: data.note ? data.note : "",
        },
      });
      setEditing(false);
      setNotification({
        type: "success",
        message: "Setup successfully modified.",
      });
    } catch (err) {
      setNotification({ type: "error", message: err.message });
    }
  };

  const onDelete = async () => {
    await deleteSetup({ variables: { id: Number(id) } });
    history.push("/");
  };

  return (
    <TableContainer>
      <SetupDetails setup={curSetup.data} isEditing={isEditing} />
      <Note setup={curSetup.data} isEditing={isEditing} />
      {isEditing ? (
        <>
          <EditSetupForm
            setup={curSetup.data}
            setupString={setupString}
            errors={errors}
            register={register}
          />
          <div>
            <Button onClick={handleSubmit(onSubmit)}>Save</Button>
            <Button colorType="secondary" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </div>
        </>
      ) : (
        <div>
          <Link to="/setups">
            <Button colorType="secondary">Back</Button>
          </Link>
          <Button onClick={() => setEditing(true)}>Modify</Button>
          <Button colorType="warn" onClick={() => onDelete()}>
            Delete
          </Button>
        </div>
      )}
    </TableContainer>
  );
};
