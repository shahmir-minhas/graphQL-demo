// const { products } = require('../db/products');
// const { categories } = require('../db/category');

exports.Query = {
  hello: () => {
    return ["Hwllow World", "Shahmir", 23];
  },
  products: (parent, { filter }, {db}) => {
    if (filter) {
      const {onSale, avgRating} = filter;

      if (onSale) {
        return db.products.filter(products => onSale);
      }
      if([1,2,3,4,5].includes(avgRating)){ 
        let filteredProducts = db.products.filter(product=>{ //iterate over products
          let sumOfRating= 0;
          let numberOfRev = 0;
          db.reviews.forEach(review=>{ // itrate over reviews
            if(review.productId === product.id){ //if review belongs to this specific product
              sumOfRating =+ review.rating; //adds its ratings
              numberOfRev++; // get total reviews
            }
          });
          const avgProductRating = sumOfRating/ numberOfRev; //get avg of reviews
          return avgProductRating >= avgRating; //then return product if it satify the filter condition

        });
        return filteredProducts; //returns all filtured products
      }
    }
    return db.products;
  },

  product: (parent, args, {db}) => {
    const product = db.products.find(product => product.id === args.id);
    if (!product) return null
    else return product;
  },
  categories: (parent, args, {db}) => {
    return db.categories;
  },
  category: (parent, args, {db}) => {
    return db.categories.find(category => category.id === args.id);
  },
  reviews: (parent, args, {db}) => {
    return db.reviews;
  }

};