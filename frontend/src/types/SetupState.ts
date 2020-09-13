import { Setup } from "../generated/apolloComponents";
import { TrackState } from "./TrackState";
import { VehicleState } from "./VehicleState";

export type SetupState = Omit<Setup, "__typename" | "track" | "vehicle"> & {
  track: TrackState;
  vehicle: VehicleState;
};
