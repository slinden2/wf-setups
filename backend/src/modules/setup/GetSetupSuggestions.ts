import { Resolver, Query } from "type-graphql";

import { Setup } from "../../entity/Setup";
import { SetupSuggestion } from "../../types/SetupSuggestion";
import { RawSetup } from "../../types/RawSetup";

@Resolver()
export class GetSetupSuggestionsResolver {
  @Query(() => [SetupSuggestion], { nullable: true })
  async getSetupSuggestions(): Promise<SetupSuggestion[]> {
    const rawSetups = await Setup.createQueryBuilder("setups")
      .innerJoin("setups.track", "tracks")
      .innerJoin("setups.vehicle", "vehicles")
      .select([
        "setups.power as power",
        "tracks.id",
        "tracks.trackId",
        "tracks.name",
        "tracks.origin",
        "vehicles.id",
        "vehicles.vehicleId",
        "vehicles.name",
        "AVG(setups.suspension) AS suspension",
        "AVG(setups.gear) AS gear",
        "AVG(setups.differential) AS differential",
        "AVG(setups.brake) as brake",
      ])
      .groupBy(
        "setups.power,tracks.id, tracks.trackId, tracks.name, tracks.origin, vehicles.id, vehicles.vehicleId, vehicles.name"
      )
      .getRawMany();

    const setups: SetupSuggestion[] = rawSetups.map((setup: RawSetup) => ({
      power: setup.power,
      suspension: Number(setup.suspension),
      gear: Number(setup.gear),
      differential: Number(setup.differential),
      brake: Number(setup.brake),
      track: {
        id: setup.tracks_id,
        trackId: setup.tracks_trackId,
        origin: setup.tracks_origin,
        name: setup.tracks_name,
      },
      vehicle: {
        id: setup.vehicles_id,
        vehicleId: setup.vehicles_vehicleId,
        name: setup.vehicles_name,
      },
    }));

    return setups;
  }
}
