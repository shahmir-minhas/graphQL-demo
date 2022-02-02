// const { categories } = require('../db/category');

exports.Product = {
    category:(parent, args, context)=>{
     return context.categories.filter(category => category.id === parent.categoryId);
    },
    reviews:({id}, args, {reviews})=>{
      // console.log('product',reviews)
return reviews.filter(reviews=> id === reviews.productId);
    }};