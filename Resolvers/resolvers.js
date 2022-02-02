// Query Resolvers
// exports.resolvers = {
//   Query: {
//     hello: () => {
//       return ["Hwllow World", "Shahmir", 23];
//     },
//     products: () => {
//       return products;
//     },
//     product: (parent, args, context) => {
//       const product = products.find(product => product.id === args.id);
//       if (!product) return null
//       else return product;
//     },
//     categories: () => {
//       return categories;
//     },
//     category: (parent, args, context) => {
//       return categories.find(category => category.id === args.id);
//     }
//   },
//   Category:{
//     products:(parent, args, context)=>{
//      return products.filter(products => products.categoryId === parent.id);
      
//     }
//   },
//     Product:{
//     category:(parent, args, context)=>{
//      return categories.filter(category => category.id === parent.categoryId);
//     }
//   },
// }