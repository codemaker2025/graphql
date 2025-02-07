const express = require("express");
const cors = require("cors");
const connectDB = require("../src/utils/db");
const typeDefs = require("../src/graphql/typeDefs");
const resolvers = require("../src/graphql/resolvers");
const { ApolloServer } = require("apollo-server-express");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

connectDB();

async function startServer() {
  const apolloServer = new ApolloServer({ typeDefs, resolvers });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(port, () => {
    console.log(`✅ Server running on http://localhost/graphql`);
  });
}

startServer();
