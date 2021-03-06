import { InputType, Field } from "type-graphql";
import { BaseSetupInput } from "../shared/BaseSetupInput";

@InputType()
export class AddSetupInput extends BaseSetupInput {
  @Field()
  trackId: number;

  @Field()
  vehicleId: number;
}
