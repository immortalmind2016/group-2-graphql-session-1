require("dotenv/config");
const mongoose = require("mongoose");
const { ApolloServer, gql } = require("apollo-server");
const PostDataSource = require("./datasource/post.datasource");
const CommentDataSource = require("./datasource/comment.datasource");
const resolvers = require("./resolvers/index");
const fs = require("fs");
const path = require("path");
mongoose.connect(process.env.MONGO_URI);

const schemaData = fs.readFileSync(
  path.join(__dirname, "schema.graphql"),
  "utf8"
);

const typeDefs = gql(schemaData);

const server = new ApolloServer({
  resolvers,
  typeDefs,
  dataSources: () => ({
    post: new PostDataSource(),
    comment: new CommentDataSource(),
  }),
});

server.listen(7000, () => {
  console.log("Server has been started");
});
