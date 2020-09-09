import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";

import { MyContext } from "../../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { AddSetupInput } from "./addSetup/AddSetupInput";
import { Setup } from "../../entity/Setup";
import { User } from "../../entity/User";
import { Track } from "../../entity/Track";
import { Vehicle } from "../../entity/Vehicle";

@Resolver()
export class AddSetupResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Setup, { nullable: true })
  async addSetup(
    @Arg("data") data: AddSetupInput,
    @Ctx() ctx: MyContext
  ): Promise<Setup> {
    // Get user
    const user = await User.findOne({ id: ctx.req.session!.userId });

    if (!user) {
      throw new Error("user not found");
    }

    // Get track
    const track = await Track.findOne({ id: data.trackId });

    if (!track) {
      throw new Error("track not found");
    }

    // Get vehicle
    const vehicle = await Vehicle.findOne({ id: data.vehicleId });

    if (!vehicle) {
      throw new Error("vehicle not found");
    }

    const setup = new Setup();
    setup.suspension = data.suspension;
    setup.gear = data.gear;
    setup.differential = data.differential;
    setup.brake = data.brake;
    setup.user = user;
    setup.track = track;
    setup.vehicle = vehicle;
    const newSetup = await setup.save();

    return newSetup;
  }
}
