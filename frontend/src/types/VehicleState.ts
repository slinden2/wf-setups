import { Vehicle } from "../generated/apolloComponents";

export type VehicleState = Pick<Vehicle, "id" | "name">;
