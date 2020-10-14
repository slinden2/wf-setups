import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import marked from "marked";

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
    existingSetup.suspension = Number(data.setup.charAt(0));
    existingSetup.gear = Number(data.setup.charAt(1));
    existingSetup.differential = Number(data.setup.charAt(2));
    existingSetup.brake = Number(data.setup.charAt(3));
    existingSetup.note = marked(data.note);
    existingSetup.private = data.private;

    const modifiedSetup = await existingSetup.save();

    console.log(`User ${user.id} modified setup ${modifiedSetup.id}`);

    return modifiedSetup;
  }
}
