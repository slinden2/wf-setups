const env = {
  env: process.env.NODE_ENV,
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
};

if (!process.env.REACT_APP_DISCORD_AUTH_URL) {
  throw new Error("REACT_APP_DISCORD_AUTH_URL missing from .env");
}

export default {
  env,
  discordAuthUrl: process.env.REACT_APP_DISCORD_AUTH_URL_PROD!,
};
