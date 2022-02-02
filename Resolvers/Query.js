// const { products } = require('../db/products');
// const { categories } = require('../db/category');

exports.Query = {
  hello: () => {
    return ["Hwllow World", "Shahmir", 23];
  },
  products: (parent, { filter }, {products, reviews}) => {
    if (filter) {
      const {onSale, avgRating} = filter;

      if (onSale) {
        return products.filter(products => onSale);
      }
      if([1,2,3,4,5].includes(avgRating)){ 
        let filteredProducts = products.filter(product=>{ //iterate over products
          let sumOfRating= 0;
          let numberOfRev = 0;
          reviews.forEach(review=>{ // itrate over reviews
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
    return products;
  },

  product: (parent, args, context) => {
    const product = context.products.find(product => product.id === args.id);
    if (!product) return null
    else return product;
  },
  categories: (parent, args, {categories}) => {
    return categories;
  },
  category: (parent, args, context) => {
    return context.categories.find(category => category.id === args.id);
  },
  reviews: (parent, args, context) => {
    return context.reviews;
  }

};