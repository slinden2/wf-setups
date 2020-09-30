import { MaxLength } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsPowerString } from "../addSetup/IsPowerString";
import { IsSetupString } from "./IsSetupString";

@InputType()
export class BaseSetupInput {
  @Field()
  @IsPowerString({ message: "invalid power level" })
  power: string;

  @Field()
  @IsSetupString({ message: "invalid setup string" })
  setup: string;

  @Field({ nullable: true })
  @MaxLength(1000, { message: "note is too long ($value/$constraint1)" })
  note: string;
}
