import React from "react";
import { useParams } from "react-router-dom";
import { useSetupContext } from "../context/SetupContext";
import { StatType } from "../types/StatType";

const statArray: Array<StatType> = [
  "power",
  "suspension",
  "gear",
  "differential",
  "brake",
];

export const SetupPage = () => {
  const { id } = useParams<{ id: string }>();
  const { getSetup } = useSetupContext()!;
  const curSetup = getSetup(id);

  if (!curSetup) {
    return null;
  }

  return (
    <section>
      <table>
        <tbody>
          <tr>
            <th>Track</th>
            <td>{curSetup.track.name}</td>
          </tr>
          <tr>
            <th>Vehicle</th>
            <td>{curSetup.track.origin}</td>
          </tr>
          <tr>
            <th>Vehicle</th>
            <td>{curSetup.vehicle.name}</td>
          </tr>
          {statArray.map((stat) => (
            <tr key={stat}>
              <th>{stat.charAt(0).toUpperCase() + stat.slice(1)}</th>
              <td>{curSetup[stat]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
