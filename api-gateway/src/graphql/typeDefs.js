import { gql } from "apollo-server";

const typeDefs = gql`
  input userInput {
    email: String!
    password: String!
    name: String!
  }
  type User {
    id: ID!
    email: String!
    email: Strring!
    name: String!
  }
  type Mutation {
    signup(input: userIput): User
    login(email: String, password: String): User
  }
  type Query {
    fetchAllusers(email: String, name: String): User
  }
`;
export default typeDefs;
