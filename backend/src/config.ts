import dotenv from "dotenv";
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

export default {
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
  },
  env,
  session: {
    secret: process.env.SESSION_SECRET,
  },
};
