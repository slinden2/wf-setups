import { AddSetupInput } from "../generated/apolloComponents";

export type AddSetupFormIds = Exclude<
  keyof AddSetupInput,
  "id" | "trackId" | "vehicleId"
>;
