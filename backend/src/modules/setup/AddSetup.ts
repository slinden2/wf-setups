import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";

import { MyContext } from "../../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { AddSetupInput } from "./addSetup/AddSetupInput";
import { Setup } from "../../entity/Setup";
import { User } from "../../entity/User";

@Resolver()
export class AddSetupResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Boolean, { nullable: true })
  async addSetup(
    @Arg("data") data: AddSetupInput,
    @Ctx() ctx: MyContext
  ): Promise<Boolean> {
    // Get user
    const user = await User.findOne({ id: ctx.req.session!.userId });

    if (!user) {
      throw new Error("user not found");
    }

    const setup = new Setup();
    setup.suspension = data.suspension;
    setup.gear = data.gear;
    setup.differential = data.differential;
    setup.brake = data.brake;
    // setup.user = user;
    const newSetup = await setup.save();
    console.log(newSetup);

    return true;
  }
}
