const { ApolloServer, gql } = require('apollo-server');
const { products } = require('./products');
const { categories } = require('./category');

// Query or scaler type or object tyoe we can return
const typeDefs = gql`
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
// Query Resolvers
const resolvers = {
  Query: {
    hello: () => {
      return ["Hwllow World", "Shahmir", 23];
    },
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      const product = products.find(product => product.id === args.id);
      if (!product) return null
      else return product;
    },
    categories: () => {
      return categories;
    },
    category: (parent, args, context) => {
      return categories.find(category => category.id === args.id);
    }
  },
  Category:{
    products:(parent, args, context)=>{
     return products.filter(products => products.categoryId === parent.id);
      
    }
  },
    Product:{
    category:(parent, args, context)=>{
     return categories.filter(category => category.id === parent.categoryId);
    }
  },
}

// Passing Query and Resolver to ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers
});


// Listenning server 
server.listen().then(({ url }) => {
  console.log('server is up at:', url);
})