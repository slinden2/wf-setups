import Redis from "ioredis";
import config from "./config";

export let redis: Redis.Redis;

if (config.env.isProd) {
  redis = new Redis(config.redis.url);
} else {
  redis = new Redis();
}
