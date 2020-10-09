import { Setup } from "../generated/apolloComponents";

export interface SetupsWithLoading {
  data: Setup[] | null;
  loading: boolean;
}
