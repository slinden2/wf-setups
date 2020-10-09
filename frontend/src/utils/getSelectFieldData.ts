import { QueryResult } from "@apollo/client";
import { Exact, TracksAndVehiclesQuery } from "../generated/apolloComponents";
import { MyOptionType } from "../types/OptionType";
import { assertUnreachable } from "./assertUnreachable";

type InputData = QueryResult<
  TracksAndVehiclesQuery,
  Exact<{
    [key: string]: never;
  }>
>;

export enum InputType {
  tracks = "tracks",
  vehicles = "vehicles",
}

export const getSelectFieldData = (
  query: InputData,
  type: InputType
): MyOptionType[] | undefined => {
  const dataArrays = query.data?.getTracksAndVehicles;

  if (dataArrays) {
    switch (type) {
      case InputType.tracks:
        return dataArrays[InputType.tracks].map((item) => ({
          label: item.name,
          value: item.id,
          origin: item.origin,
        }));
      case InputType.vehicles:
        return dataArrays[InputType.vehicles].map((item) => ({
          label: item.name,
          value: item.id,
        }));
      default:
        assertUnreachable(type);
    }
  } else {
    return undefined;
  }
};
