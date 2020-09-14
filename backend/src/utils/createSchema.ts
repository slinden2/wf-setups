import { buildSchema } from "type-graphql";
import { LoginResolver } from "../modules/user/Login";
import { MeResolver } from "../modules/user/Me";
import { GetTracksAndVehiclesResolver } from "../modules/static/GetTracksAndVehicles";
import { AddSetupResolver } from "../modules/setup/AddSetup";

export const createSchema = () =>
  buildSchema({
    resolvers: [
      LoginResolver,
      MeResolver,
      GetTracksAndVehiclesResolver,
      AddSetupResolver,
    ],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });
