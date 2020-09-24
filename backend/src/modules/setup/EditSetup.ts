import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import marked from "marked";

import { MyContext } from "../../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { Setup } from "../../entity/Setup";
import { User } from "../../entity/User";
import { EditSetupInput } from "./editSetup/EditSetupInput";
import { getSetupValues } from "../../utils/getSetupValues";

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

    const setupValues = getSetupValues(data.setup);

    existingSetup.power = data.power;
    existingSetup.suspension = setupValues.suspension;
    existingSetup.gear = setupValues.gear;
    existingSetup.differential = setupValues.differential;
    existingSetup.brake = setupValues.brake;
    existingSetup.note = marked(data.note);

    const modifiedSetup = await existingSetup.save();

    return modifiedSetup;
  }
}
