import path from "path";
import csv from "csvtojson";
import { createConnection } from "typeorm";
import { Track } from "../entity/Track";
import { TrackRawData } from "../types/TrackRawData";
import config from "../config";

const addTracks = async () => {
  const tracks = (await csv().fromFile(
    path.join(__dirname, "../data/tracks.csv")
  )) as TrackRawData[];

  await createConnection(config.postgres.connParams);

  const tracksInDb = await Track.find();

  const trackPromises: Promise<Track>[] = [];

  tracks.forEach((track) => {
    const newTrack = new Track();
    newTrack.trackId = track.trackId;
    newTrack.origin = track.trackOrigin;
    newTrack.name = track.trackName;

    if (!tracksInDb.find((trackDb) => trackDb.trackId === newTrack.trackId)) {
      console.log(newTrack);
      trackPromises.push(newTrack.save());
    }
  });

  await Promise.all(trackPromises);
};

addTracks();
