import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress } from "apollo-server-express";

const myGraphQLSchema = buildSchema(`
type Query {
  hello: String
}
`); // ... define or import your schema here!
const PORT = process.env.PORT || 7000;

const app = express();

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(PORT);
