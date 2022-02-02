const { categories } = require('../db/category');

exports.Product = {
    category:(parent, args, context)=>{
     return categories.filter(category => category.id === parent.categoryId);
    }};