import { buildSchema } from "type-graphql";
import { LoginResolver } from "../modules/user/Login";
import { MeResolver } from "../modules/user/Me";
import { GetTracksAndVehiclesResolver } from "../modules/static/GetTracksAndVehicles";
import { AddSetupResolver } from "../modules/setup/AddSetup";
import { GetSetupsResolver } from "../modules/setup/GetSetups";
import { DeleteSetupResolver } from "../modules/setup/DeleteSetup";
import { EditSetupResolver } from "../modules/setup/EditSetup";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      LoginResolver,
      MeResolver,
      GetTracksAndVehiclesResolver,
      AddSetupResolver,
      GetSetupsResolver,
      DeleteSetupResolver,
      EditSetupResolver,
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });
