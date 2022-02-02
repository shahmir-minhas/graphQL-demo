// const { products } = require('../db/products');
// const { categories } = require('../db/category');

  exports.Query = {
    hello: () => {
      return ["Hwllow World", "Shahmir", 23];
    },
    products: (parent, args, context) => {
      
      return context.products;
    },
    product: (parent, args, context) => {
      const product = context.products.find(product => product.id === args.id);
      if (!product) return null
      else return product;
    },
    categories: () => {
      return context.categories;
    },
    category: (parent, args, context) => {
      return context.categories.find(category => category.id === args.id);
    },
    reviews:(parent, args, context)=>{
        return context.reviews;
    }
    
  };