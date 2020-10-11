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
import Loader from "../styles/elements/Loader";

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

const Table = styled.table`
  margin: 0 auto;
  font-size: 1.4rem;
  border-spacing: 0;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-radius: ${(props) => props.theme.borderRadius};

  .details-title {
    font-size: 1.4rem;
    font-weight: 500;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.silver};
    padding: 1rem;
    text-align: left;
    border-radius: ${(props) => props.theme.borderRadius}
      ${(props) => props.theme.borderRadius} 0 0;
  }

  tbody tr:last-child th {
    border-radius: 0 0 0 ${(props) => props.theme.borderRadius};
  }
  tbody tr:last-child td {
    border-radius: 0 0 ${(props) => props.theme.borderRadius} 0;
  }

  th,
  td {
    padding: 1.6rem 2rem 0.9rem 2rem;
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
  th {
    text-align: right;
    width: 175px;
    font-weight: 600;
  }
  td {
  }
`;

const NoteContainer = styled.div`
  margin: 2rem auto;
  width: 100%;
`;

const NoteTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  text-transform: uppercase;
  background-color: ${(props) => props.theme.colors.silver};
  padding: 1rem;
  text-align: left;
  border-radius: ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius} 0 0;
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-top: 1px solid ${(props) => props.theme.colors.lightGrey2};
`;

const Note = styled.div`
  font-size: 1.4rem;
  width: 100%;
  max-width: 500px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.lightGrey};
  border-radius: 0 0 ${(props) => props.theme.borderRadius}
    ${(props) => props.theme.borderRadius};
  border-left: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey2};
  border-bottom: 1px solid ${(props) => props.theme.colors.lightGrey2};

  pre {
    padding: 8px;
    background-color: ${(props) => props.theme.colors.lightGrey2};
    border-radius: ${(props) => props.theme.borderRadius};
  }
`;

const ButtonContainer = styled.div``;

const FormContainer = styled.div``;

const statArray: Array<StatType> = [
  "power",
  "suspension",
  "gear",
  "differential",
  "brake",
];

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
      <Table>
        <thead>
          <tr>
            <th className="details-title" colSpan={2}>
              Setup Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Track</th>
            <td>{curSetup.data.track.name}</td>
          </tr>
          <tr>
            <th>Track Category</th>
            <td>{curSetup.data.track.origin}</td>
          </tr>
          <tr>
            <th>Vehicle</th>
            <td>{curSetup.data.vehicle.name}</td>
          </tr>
          {!isEditing &&
            statArray.map((stat) => (
              <tr key={stat}>
                <th>{stat.charAt(0).toUpperCase() + stat.slice(1)}</th>
                <td>{curSetup.data![stat]}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      {!isEditing && curSetup.data.note && (
        <NoteContainer>
          <NoteTitle>Notes</NoteTitle>
          <Note
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(curSetup.data.note),
            }}
          />
        </NoteContainer>
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
                        curSetup.data![input.name]!.toString()
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
            <Button colorType="secondary" onClick={() => setEditing(false)}>
              Cancel
            </Button>
          </ButtonContainer>
        </>
      ) : (
        <ButtonContainer>
          <Link to="/">
            <Button colorType="secondary">Back</Button>
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
