import { UserState } from "../../types/UserState";
import { MeQueryResult } from "../../generated/apolloComponents";
import { SetupState } from "../../types/SetupState";

export const createUserObject = (
  loggedUser: MeQueryResult
): UserState | null => {
  const userData = loggedUser.data?.me;

  if (!userData) return null;

  const userDataState: UserState = {
    id: userData.id,
    email: userData.email,
    username: userData.username,
    setups: userData.setups.map(
      (setup): SetupState => ({
        id: setup.id,
        track: {
          id: setup.track.id,
          name: setup.track.name,
        },
        vehicle: {
          id: setup.vehicle.id,
          name: setup.vehicle.name,
        },
        suspension: setup.suspension,
        gear: setup.gear,
        differential: setup.differential,
        brake: setup.brake,
      })
    ),
  };

  return userDataState;
};
