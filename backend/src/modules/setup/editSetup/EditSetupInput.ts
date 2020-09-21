import { InputType, Field } from "type-graphql";
import { BaseSetupInput } from "../shared/BaseSetupInput";

@InputType()
export class EditSetupInput extends BaseSetupInput {
  @Field()
  id: number;
}
