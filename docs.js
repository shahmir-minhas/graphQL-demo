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

//====================== How to run a query 

  




