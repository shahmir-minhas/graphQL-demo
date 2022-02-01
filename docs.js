//====================== Simple defining types

// type User{
//   id:ID!
//   age:Int!
//   name:String!
//   height: Float!
//   isMarried: Boolean //not putting ! means it could b null
//   friends:[User!]
//   videosPosted:[Videos!]

// }

// these are called scalers
// type Video {
//   id:ID!
//   discription:String
// }

//====================== Query 
// type Query {
//   users:[User]
//   user(id: ID):User
// }
//====================== Query with name and id 
// type Query {
//   users:[User]
//   user(id: ID), name:String: User
// }
//====================== Query with more clean code

// input UserInput {
//   id:ID!
//   name: String !
// }

// type Query {
//   users:[Users]
//   user[input: UserInput]: User
// }

//====================== How to run Server
// install graphQl and apollo server

// const { ApolloServer, gql } = require('apollo-server');


// Scalar types Int, Strings, Boolean, Float
// const typeDefs = gql`
// type Query{
//   hellow: String
// }
// `

//====================== Data for producsts Resources

// https://github.com/harblaith7/GraphQL-Course-Udemy/blob/f4bff4eab1a1a0f03db1a98207f9cba0194e8a3f/01-ECommerce-App/initial_data#L1-L84