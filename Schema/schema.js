const { gql } = require('apollo-server');
// Query or scaler type or object tyoe we can return
exports.typeDefs = gql`
type Query{
  hello: [String]
  products : [Product!]!
  product(id: ID!):Product 
  categories: [Category!]!
  category(id: ID!): Category

}

type Product {
  id: ID!
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  onSale: Boolean!
  image:String!
  category:[Category!]!
}

type Category {
  id:ID!
  name: String!
  products: [Product!]!
}

`