const { ApolloServer } = require('apollo-server');
const {typeDefs} = require("./Schema/schema");
const {resolvers} = require("./Resolvers/resolvers");
const { products } = require('./db/products');
const { categories } = require('./db/category');
const { reviews } = require('./db/reviews');
const {Query} = require("./Resolvers/Query");
const {Product} = require("./Resolvers/Product");
const {Category} = require("./Resolvers/Category");
const {Review} = require("./Resolvers/Review");





// Passing Query and Resolver to ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers: {Query, Product, Category, Review},
  context:{
    // sayHellow: ()=>{
    //   console.log('ehllow');
    // },
    products:products,
    categories: categories,
    reviews:reviews,
  }
});


// Listenning server 
server.listen().then(({ url }) => {
  console.log('server is up at:', url);
})