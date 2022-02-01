const { ApolloServer, gql } = require('apollo-server');

// Query
const typeDefs = gql`
type Query{
  hellow: String
}
`
// Query Resolvers
const resolvers = {
  Query:{
    hellow:()=>{
      return "Hwllow World";
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