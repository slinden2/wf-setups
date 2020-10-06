import { Resolver, Query, Field, ObjectType } from "type-graphql";
import { Track } from "../../entity/Track";
import { Vehicle } from "../../entity/Vehicle";

@ObjectType()
export class TracksAndVehicles {
  @Field(() => [Track])
  tracks: Track[];

  @Field(() => [Vehicle])
  vehicles: Vehicle[];
}

@Resolver()
export class GetTracksAndVehiclesResolver {
  @Query(() => TracksAndVehicles)
  async getTracksAndVehicles(): Promise<TracksAndVehicles> {
    const tracks = await Track.find({ order: { name: "ASC" } });
    const vehicles = await Vehicle.find({ order: { name: "ASC" } });
    return { tracks, vehicles };
  }
}
