const { ApolloServer, gql } = require('apollo-server');
const products = require('./products');

// Query or scaler type or object tyoe we can return
const typeDefs = gql`
type Query{
  hello: [String]
  products : [Product!]!

}
type Product {
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  onSale: Boolean!
}
`
// Query Resolvers
const resolvers = {
  Query:{
    hello:()=>{
      return ["Hwllow World", "Shahmir", 23];
    }, 
    products: ()=>{
      return [
      {  name: "Bike",
        description:"Honda 125",
        quantity: 12,
        price: 12000,
        onSale: false} 
      ]
    }

  }
}

// Passing Query and Resolver to ApolloServer
const server = new ApolloServer({
typeDefs,
resolvers
});


// Listenning server 
server.listen().then(({url})=>{
  console.log('server is up at:', url);
})