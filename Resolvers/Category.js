const { products } = require('../db/products');
  exports.Category= {
    products:(parent, args, context)=>{
     return products.filter(products => products.categoryId === parent.id);
      
    }
  };