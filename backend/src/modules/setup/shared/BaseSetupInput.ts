import { IsInt, Max, MaxLength, Min } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsPowerString } from "../addSetup/IsPowerString";

@InputType()
export class BaseSetupInput {
  @Field()
  @IsPowerString({ message: "invalid power level" })
  power: string;

  @Field()
  @IsInt()
  @Min(1111)
  @Max(5555)
  setup: number;

  @Field({ nullable: true })
  @MaxLength(1000, { message: "note is too long ($value/$constraint1)" })
  note: string;
}
