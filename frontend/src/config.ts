const env = {
  env: process.env.NODE_ENV,
  isDev: process.env.NODE_ENV === "development",
  isProd: process.env.NODE_ENV === "production",
  isTest: process.env.NODE_ENV === "test",
};

if (env.isProd) {
  if (!process.env.REACT_APP_DISCORD_AUTH_URL_PROD) {
    throw new Error("REACT_APP_DISCORD_AUTH_URL_PROD missing from .env");
  }
}

if (env.isDev || env.isTest) {
  if (!process.env.REACT_APP_DISCORD_AUTH_URL_DEV) {
    throw new Error("REACT_APP_DISCORD_AUTH_URL_DEV missing from .env");
  }
}

export default {
  env,
  discordAuthUrl: env.isProd
    ? process.env.REACT_APP_DISCORD_AUTH_URL_PROD!
    : process.env.REACT_APP_DISCORD_AUTH_URL_DEV!,
};
