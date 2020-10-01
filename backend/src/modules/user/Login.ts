import { Resolver, Mutation, Arg, Query, Ctx } from "type-graphql";

import { getDiscordUser } from "./login/getDiscordUser";
import { User } from "../../entity/User";
import { MyContext } from "../../types/MyContext";

@Resolver()
export class LoginResolver {
  @Query(() => String!) // Query needed for schema creation
  hello(): string {
    return "Hello World!";
  }

  @Mutation(() => User!, { nullable: true })
  async login(
    @Arg("code") code: string,
    @Ctx() ctx: MyContext
  ): Promise<User | null> {
    console.log(`The access code is ${code}.`);
    const discordUser = await getDiscordUser(code);
    console.log("discordUser", discordUser);

    let user = await User.findOne({ where: { discordId: discordUser.id } });
    if (user) {
      console.log("user found");
      console.log(user);
    }

    if (!user) {
      console.log("creating new user");
      user = await User.create({
        discordId: discordUser.id,
        username: discordUser.username,
        discriminator: discordUser.discriminator,
        avatar: discordUser.avatar,
      }).save();
    }

    console.log("setting cookie");
    ctx.req.session!.userId = user.id;

    return user;
  }
}
