import { Resolver, Ctx, UseMiddleware, Query } from "type-graphql";

import { MyContext } from "../../types/MyContext";
import { isAuth } from "../middleware/isAuth";
import { Setup } from "../../entity/Setup";

@Resolver()
export class GetSetupsResolver {
  @UseMiddleware(isAuth)
  @Query(() => [Setup], { nullable: true })
  async getSetups(@Ctx() ctx: MyContext): Promise<Setup[]> {
    const userId = ctx.req.session!.userId;

    if (!userId) {
      throw new Error("user not found");
    }

    const setups = await Setup.find({ where: { user: { id: userId } } });

    return setups;
  }
}
