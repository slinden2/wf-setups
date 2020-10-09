import { AddSetupInput } from "../generated/apolloComponents";
import { MyOptionType } from "./OptionType";

export type AddSetupInputWithSelect = Omit<
  AddSetupInput,
  "trackId" | "vehicleId"
> & {
  track: MyOptionType;
  vehicle: MyOptionType;
};
