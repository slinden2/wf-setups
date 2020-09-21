import { IsInt, Max, Min } from "class-validator";
import { InputType, Field } from "type-graphql";
import { IsPowerString } from "../addSetup/IsPowerString";

@InputType()
export class BaseSetupInput {
  @Field()
  @IsPowerString({ message: "invalid power level" })
  power: string;

  @Field()
  @IsInt()
  @Min(1)
  @Max(5)
  suspension: number;

  @Field()
  @IsInt()
  @Min(1)
  @Max(5)
  gear: number;

  @Field()
  @IsInt()
  @Min(1)
  @Max(5)
  differential: number;

  @Field()
  @IsInt()
  @Min(1)
  @Max(5)
  brake: number;
}