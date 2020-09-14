import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { createConnection } from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";
import {
  simpleEstimator,
  getComplexity,
  fieldExtensionsEstimator,
} from "graphql-query-complexity";

import { redis } from "./redis";
import { createSchema } from "./utils/createSchema";
import { cookieLogger } from "./modules/middleware/cookieLogger";
import config from "./config";
import path from "path";

const main = async () => {
  await createConnection();

  const schema = await createSchema();

  const apolloServer = new ApolloServer({
    schema,
    // TODO Add error formatter for validation errors.
    // formatError: error => error,
    context: ({ req, res }) => {
      cookieLogger(req.headers);
      return { req, res };
    },
    plugins: [
      {
        requestDidStart: () => ({
          didResolveOperation({ request, document }) {
            const complexity = getComplexity({
              schema,
              operationName: request.operationName,
              query: document,
              variables: request.variables,
              estimators: [
                fieldExtensionsEstimator(),
                simpleEstimator({ defaultComplexity: 1 }),
              ],
            });

            if (complexity > 20) {
              throw new Error(
                `Sorry, too complicated query! ${complexity} is over 20 that is the max allowed complexity.`
              );
            }
          },
        }),
      },
    ],
  });

  const app = express();
  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "qid",
      secret: config.session.secret,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        // secure: config.env === "production", TODO activate this when SSL is available in production
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );

  apolloServer.applyMiddleware({ app, cors: false });

  if (config.env === "production") {
    app.use(express.static(path.join(__dirname, "client")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "client", "index.html"));
    });
  }

  app.listen(4000, () => {
    console.log("Server started on http://localhost:4000/graphql");
  });
};

main();
