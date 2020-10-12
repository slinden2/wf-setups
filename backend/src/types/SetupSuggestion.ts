import { ObjectType, Field } from "type-graphql";
import { Track } from "../entity/Track";
import { Vehicle } from "../entity/Vehicle";

@ObjectType()
export class SetupSuggestion {
  @Field()
  power: string;

  @Field()
  suspension: number;

  @Field()
  gear: number;

  @Field()
  differential: number;

  @Field()
  brake: number;

  @Field(() => Track)
  track: Pick<Track, "id" | "trackId" | "name">;

  @Field(() => Vehicle)
  vehicle: Pick<Vehicle, "id" | "vehicleId" | "name">;
}
