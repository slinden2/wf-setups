import { InputType, Field } from "type-graphql";

@InputType()
export class AddSetupInput {
  @Field()
  trackId: number;

  @Field()
  vehicleId: number;

  @Field()
  suspension: number;

  @Field()
  gear: number;

  @Field()
  differential: number;

  @Field()
  brake: number;
}
