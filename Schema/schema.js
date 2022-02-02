const { gql } = require('apollo-server');
// Query or scaler type or object tyoe we can return
exports.typeDefs = gql`
type Query{
  hello: [String]
  products(filter: onSaleFilter) : [Product!]!
  product(id: ID!):Product 
  categories: [Category!]!
  category(id: ID!): Category
 reviews:[Review!]!
}

type Mutation {
  addCategory(input: addCategoryInputs!) : Category!
  addProduct(input: addProductInputs!): Product!
  addReview(input: addReview!): Review!
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
  products(filter: onSaleFilter) : [Product!]!
}

input onSaleFilter{
  onSale: Boolean
  avgRating: Int
}
input addCategoryInputs{
  name:String!
}
input addProductInputs{
  name: String!
  description: String!
  quantity: Int!
  price: Float!
  onSale: Boolean!
  image:String!
  categoryId: String!
  
}
input addReview{
  date: String!
  title: String!
  comment: String!
  rating:Int!
  productId:ID!
}

`