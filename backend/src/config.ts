import dotenv from "dotenv";
dotenv.config();

if (!process.env.DISCORD_CLIENT_ID) {
  throw new Error("DISCORD_CLIENT_ID missing from .env");
}

if (!process.env.DISCORD_CLIENT_SECRET) {
  throw new Error("DISCORD_CLIENT_SECRET missing from .env");
}

export default {
  discord: {
    clientId: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
  },
};
