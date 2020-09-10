import { User } from "../generated/apolloComponents";
import { SetupState } from "./SetupState";

export type UserState =
  | (Omit<
      User,
      "__typename" | "discriminator" | "avatar" | "discordId" | "setups"
    > & { setups: SetupState[] })
  | null;
