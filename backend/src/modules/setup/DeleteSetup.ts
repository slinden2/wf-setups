import { Resolver, Mutation, Arg, UseMiddleware } from "type-graphql";

import { isAuth } from "../middleware/isAuth";
import { Setup } from "../../entity/Setup";

@Resolver()
export class DeleteSetupResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Number, { nullable: true })
  async deleteSetup(@Arg("id") id: number): Promise<number | null> {
    const deleteResult = await Setup.delete(id);

    if (deleteResult.affected === 1) {
      return id;
    } else {
      return null;
    }
  }
}
