import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import marked from "marked";

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
    setup.power = data.power.toUpperCase();
    setup.suspension = Number(data.setup.charAt(0));
    setup.gear = Number(data.setup.charAt(1));
    setup.differential = Number(data.setup.charAt(2));
    setup.brake = Number(data.setup.charAt(3));
    setup.user = user;
    setup.track = track;
    setup.vehicle = vehicle;
    setup.note = marked(data.note);
    setup.private = data.private;
    const newSetup = await setup.save();

    console.log(`User ${user.id} added a new setup added with ID: ${setup.id}`);

    return newSetup;
  }
}
