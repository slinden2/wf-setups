import { Setup } from "../generated/apolloComponents";

export interface SetupWithLoading {
  data: Setup | null;
  loading: boolean;
}
