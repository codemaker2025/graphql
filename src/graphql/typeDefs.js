const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Task {
    id: ID!
    input: String!
  }

  type Query {
    getTasks: [Task]
  }

  type Mutation {
    createTask(input: String!): Task
    deleteTask(id: ID!): ID
  }
`;

module.exports = typeDefs;
