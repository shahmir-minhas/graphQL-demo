// const { categories } = require('../db/category');

exports.Product = {
    category:(parent, args, {db})=>{
      return db.categories.filter(category => category.id === parent.categoryId);
    },
    reviews:({id}, args, {db})=>{
      return db.reviews.filter(reviews=> id === reviews.productId);
    },
    
};