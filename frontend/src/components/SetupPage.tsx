import React from "react";
import { useForm } from "react-hook-form";
import { useParams, useHistory, Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import createDOMPurify from "dompurify";
import TurndownService from "turndown";

import { useSetupContext } from "../context/SetupContext";
import { EditSetupInput } from "../generated/apolloComponents";
import { StatType } from "../types/StatType";
import {
  editSetupValidationSchema,
  inputFieldData,
} from "./form/formFieldData";
import { InputField } from "./form/InputField";
import config from "../config";
import { useNotificationContext } from "../context/NotificationContext";
import { yupResolver } from "@hookform/resolvers";
import { getSetupString } from "../utils/getSetupString";
import { Button } from "../styles/elements/Button";
import { Title } from "../styles/elements/Title";

const TableContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  padding-right: 1rem;
`;

const Table = styled.table`
  margin: 0 auto;
  font-size: 1.6rem;
  border-collapse: collapse;

  th,
  td {
    padding: 8px;
    color: ${(props) => props.theme.colors.white};
  }

  th {
    text-align: left;
    background-color: ${(props) => props.theme.colors.main};
  }

  td {
    background-color: ${(props) => props.theme.colors.secondary};
    padding-left: 1.2rem;
  }
`;

const Note = styled.div`
  margin: 2rem auto;
  font-size: 1.5rem;
  width: 100%;
  max-width: 500px;
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  padding: 8px;

  pre {
    padding: 8px;
    background-color: ${(props) => props.theme.colors.secondaryDark};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  button {
    margin: 1rem 1rem;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 500px;
`;

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
  const { setNotification } = useNotificationContext()!;

  const history = useHistory();
  const { id } = useParams<{ id: string }>();
  const curSetup = getSetup(id);

  const methods = useForm<EditSetupInput>({
    resolver: yupResolver(editSetupValidationSchema),
  });
  const { handleSubmit, register, errors } = methods;

  if (!curSetup) {
    return <Redirect to="/404" />;
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
    try {
      await editSetup({
        variables: {
          id: Number(id),
          power: data.power,
          setup: data.setup,
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
      <Title>Setup Details</Title>
      <Table>
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
      </Table>
      {!isEditing && curSetup.note && (
        <Note
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(curSetup.note),
          }}
        />
      )}
      {isEditing ? (
        <>
          <FormContainer>
            <form>
              {inputFieldData.map((input) => {
                const defaultValue =
                  input.name === "setup"
                    ? setupString.toString()
                    : turndownService.turndown(
                        curSetup[input.name]!.toString()
                      );
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
            </form>
          </FormContainer>
          <ButtonContainer>
            <Button onClick={handleSubmit(onSubmit)}>Save</Button>
            <Button colorType="warn" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <ButtonContainer>
          <Link to="/">
            <Button>Back</Button>
          </Link>
          <Button onClick={() => setEditing(true)}>Modify</Button>
          <Button colorType="warn" onClick={() => onDelete()}>
            Delete
          </Button>
        </ButtonContainer>
      )}
    </TableContainer>
  );
};
