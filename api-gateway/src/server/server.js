import { ApolloServer } from "apollo-server-express";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import resolvers from "../graphql/resolvers/index";
import typeDefs from "../graphql/typeDefs";

const PORT = process.env.PORT || 8000;

const appolloServer = new ApolloServer({
  resolvers,
  typeDefs,
});

const app = express();
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, cb) => cb(null, true),
    credentials: true,
  })
);

appolloServer.applyMiddleware({ app, cors: false, path: "/graphql" });
app.listen(PORT, () => {
  console.info(`API gateway running on port ${PORT}`);
});
