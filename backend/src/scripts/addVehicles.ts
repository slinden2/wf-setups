import path from "path";
import csv from "csvtojson";
import { createConnection } from "typeorm";
import { VehicleRawData } from "../types/VehicleRawData";
import { Vehicle } from "../entity/Vehicle";

const addVehicles = async () => {
  const vehicles = (await csv().fromFile(
    path.join(__dirname, "../data/vehicles.csv")
  )) as VehicleRawData[];

  await createConnection();

  const vehiclePromises: Promise<Vehicle>[] = [];

  vehicles.forEach((vehicle) => {
    const newVehicle = new Vehicle();
    newVehicle.vehicleId = vehicle.vehicleId;
    newVehicle.vehicleFolder = vehicle.vehicleFolder;
    newVehicle.name = vehicle.vehicleName;

    vehiclePromises.push(newVehicle.save());
  });

  await Promise.all(vehiclePromises);
};

addVehicles();