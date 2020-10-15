import { createConnection } from "typeorm";
import { Track } from "../entity/Track";
import { Vehicle } from "../entity/Vehicle";
import { Setup } from "../entity/Setup";
import config from "../config";
import { User } from "../entity/User";

const generateDummySetups = async () => {
  await createConnection(config.postgres.connParams);

  const tracks = await Track.find();
  const vehicles = await Vehicle.find();
  const user = await User.findOne();

  const setupValues = [];

  for (let index = 0; index < 100; index++) {
    const arr = [];
    for (let index = 0; index < 4; index++) {
      const _val = Math.random() * 5;
      const val = _val < 1 || _val > 4 ? Math.ceil(_val) : Math.round(_val);
      arr.push(val);
    }
    setupValues.push(arr);
  }

  const setupPromises: Promise<Setup>[] = [];

  setupValues.forEach((setupVal) => {
    const trackIndex = Math.floor(Math.random() * tracks.length);
    const track = tracks[trackIndex];
    const vehicleIndex = Math.floor(Math.random() * vehicles.length);
    const vehicle = vehicles[vehicleIndex];

    const setup = new Setup();
    setup.power = "C164";
    setup.suspension = setupVal[0];
    setup.gear = setupVal[1];
    setup.differential = setupVal[2];
    setup.brake = setupVal[3];
    setup.private = false;
    setup.track = track;
    setup.vehicle = vehicle;
    setup.user = user!;

    setupPromises.push(setup.save());
  });

  await Promise.all(setupPromises);
};

generateDummySetups()
  .then(() => process.exit(0))
  .catch((e) => console.error(e));
