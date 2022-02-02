const { gql } = require('apollo-server');
// Query or scaler type or object tyoe we can return
exports.typeDefs = gql`
type Query{
  hello: [String]
  products : [Product!]!
  product(id: ID!):Product 
  categories: [Category!]!
  category(id: ID!): Category
 reviews:[Review!]!
}

type Review{
  id: ID!
  date: String!
  title: String!
  comment: String!
  rating:Int!
  productId:ID!
  product: Product!

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
  reviews: [Review]!
}

type Category {
  id:ID!
  name: String!
  products: [Product!]!
}

`