import { AddSetupInput } from "../generated/apolloComponents";
import { OptionType } from "./OptionType";

export type AddSetupInputWithSelect = Omit<
  AddSetupInput,
  "trackId" | "vehicleId"
> & {
  track: OptionType;
  vehicle: OptionType;
};
