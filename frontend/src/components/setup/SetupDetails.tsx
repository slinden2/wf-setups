import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import checkmarkIcon from "@iconify/icons-gridicons/checkmark";
import crossIcon from "@iconify/icons-gridicons/cross";
import { Setup } from "../../generated/apolloComponents";
import { StatType } from "../../types/StatType";

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

const statArray: Array<StatType> = [
  "power",
  "suspension",
  "gear",
  "differential",
  "brake",
];

interface Props {
  setup: Setup;
  isEditing: boolean;
}

const SetupDetails: React.FC<Props> = ({ setup, isEditing }) => {
  return (
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
          <td>{setup.track.name}</td>
        </tr>
        <tr>
          <th>Track Category</th>
          <td>{setup.track.origin}</td>
        </tr>
        <tr>
          <th>Vehicle</th>
          <td>{setup.vehicle.name}</td>
        </tr>
        {!isEditing && (
          <>
            {statArray.map((stat) => (
              <tr key={stat}>
                <th>{stat.charAt(0).toUpperCase() + stat.slice(1)}</th>
                <td>{setup[stat]}</td>
              </tr>
            ))}
            <tr>
              <th>Private</th>
              <td>
                {setup.private ? (
                  <Icon icon={checkmarkIcon} />
                ) : (
                  <Icon icon={crossIcon} />
                )}
              </td>
            </tr>
          </>
        )}
      </tbody>
    </Table>
  );
};

export default SetupDetails;
