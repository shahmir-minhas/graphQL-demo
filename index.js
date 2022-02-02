const { ApolloServer } = require('apollo-server');
const {typeDefs} = require("./Schema/schema");
const {resolvers} = require("./Resolvers/resolvers");
const { products } = require('./db/products');
const { categories } = require('./db/category');




// Passing Query and Resolver to ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});


// Listenning server 
server.listen().then(({ url }) => {
  console.log('server is up at:', url);
})