import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";

import { MyContext } from "../../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { Setup } from "../../entity/Setup";
import { User } from "../../entity/User";
import { EditSetupInput } from "./editSetup/EditSetupInput";

@Resolver()
export class EditSetupResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Setup, { nullable: true })
  async editSetup(
    @Arg("data") data: EditSetupInput,
    @Ctx() ctx: MyContext
  ): Promise<Setup> {
    // Get user
    const user = await User.findOne({ id: ctx.req.session!.userId });

    if (!user) {
      throw new Error("user not found");
    }

    const existingSetup = await Setup.findOne({
      relations: ["user"],
      where: { id: data.id },
    });

    if (!existingSetup) {
      throw new Error("setup not found");
    }

    if (user.id !== existingSetup.user.id) {
      throw new Error("auth user id and setup use id do not match");
    }

    existingSetup.power = data.power;
    existingSetup.suspension = data.suspension;
    existingSetup.gear = data.gear;
    existingSetup.differential = data.differential;
    existingSetup.brake = data.brake;
    existingSetup.note = data.note;

    const modifiedSetup = await existingSetup.save();

    return modifiedSetup;
  }
}
