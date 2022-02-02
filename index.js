const { ApolloServer } = require('apollo-server');
const {typeDefs} = require("./Schema/schema");
const {resolvers} = require("./Resolvers/resolvers");
const { products } = require('./db/products');
const { categories } = require('./db/category');
const {Query} = require("./Resolvers/Query");
const {Product} = require("./Resolvers/Product");
const {Category} = require("./Resolvers/Category");




// Passing Query and Resolver to ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers: {Query, Product, Category},
});


// Listenning server 
server.listen().then(({ url }) => {
  console.log('server is up at:', url);
})