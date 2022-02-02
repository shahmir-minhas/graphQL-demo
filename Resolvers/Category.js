// const { products } = require('../db/products');
  exports.Category= {
    products:({id}, args, {products})=>{
      
     return products.filter(products => products.categoryId === id);
      
    }
  };


  //destructured and refactored