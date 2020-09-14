import dotenv from "dotenv";
import { ConnectionOptions } from "typeorm";
dotenv.config();

const env = process.env.NODE_ENV;

if (!env) {
  throw new Error("NODE_ENV missing from .env");
}

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID missing from .env");
}

if (!process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("DISCORD_CLIENT_SECRET missing from .env");
}

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET missing from .env");
}

if (env === "production" && process.env.REDIS_URL) {
  throw new Error("REDIS_URL missing from .env in production");
}

if (env === "production" && process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL missing from .env in production");
}

// postgres connections by env
let postgresConn: ConnectionOptions;
if (env === "production") {
  postgresConn = {
    type: "postgres",
    url: process.env.DATABASE_URL!,
    entities: [__dirname + "/entity/*.js"],
    synchronize: true,
    logging: true,
  };
} else {
  postgresConn = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: env === "test" ? "test" : "development",
    entities: [__dirname + "/entity/*.ts"],
    synchronize: true,
    logging: true,
  };
}

export default {
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
  },
  env: {
    env: process.env.NODE_ENV,
    isDev: process.env.NODE_ENV === "development",
    isTest: process.env.NODE_ENV === "test",
    isProd: process.env.NODE_ENV === "production",
  },
  session: {
    secret: process.env.SESSION_SECRET,
  },
  redis: {
    url: process.env.REDIS_URL,
  },
  postgres: {
    connParams: postgresConn,
  },
};
