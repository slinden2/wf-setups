require("dotenv/config");

const ENV = process.env.NODE_ENV;

const database = {
  development: "development",
  production: "production",
  test: "test",
};

const devEntities = ["src/entity/*.ts"];
const prodEntities = ["dist/entity/*.js"];

const entities = {
  development: devEntities,
  production: prodEntities,
  test: devEntities,
};

const logging = ENV === "development" ? true : false;

module.exports = {
  name: "default",
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: database[ENV],
  entities: entities[ENV],
  synchronize: true,
  logging,
};
