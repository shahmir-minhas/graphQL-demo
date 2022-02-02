const {v4:uuid} = require("uuid");

exports.Mutation = {
  addCategory: (parent, {input}, {categories}) => {
    const {name} = input;
    const newCategory = {
      id:uuid(),
      name: name,
    }
    categories.push(newCategory);
    return newCategory;
  },

  addProduct:(parent, {input}, {products})=>{
    const {
    name,
    description,
    quantity,
    price,
    onSale,
    image,
    categoryId } = input;
  
  const newProduct ={
    id:uuid(),
    name:name,
    description:description,
    quantity:quantity,
    price:price,
    onSale:onSale,
    image:image,
    categoryId:categoryId};

    products.push(newProduct);
    return newProduct;
  },
    addReview: (parent, {input}, {reviews}) => {
    const {  
      date,
      title,
      comment,
      rating,
      productId } = input;
    const newReview = {
      id:uuid(),
      date,
      title,
      comment,
      rating,
      productId
    }
    reviews.push(newReview);
    return newReview;
  },

};