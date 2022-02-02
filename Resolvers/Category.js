// const { products } = require('../db/products');
  exports.Category= {
    products:({id}, {filter}, {products, reviews})=>{
      
      
     let categoryProducts = products.filter(products => products.categoryId === id);

     if (filter) {
       const {onSale, avgRating} = filter;
      if (onSale) {
        categoryProducts =  categoryProducts.filter(products => products.onSale);
      }
      if([1,2,3,4,5].includes(avgRating)){
        console.log('avgRating',avgRating)
        
        let filteredProducts = products.filter(product =>{
          let sumOfRatings = 0;
          let totalReviews = 0;
          reviews.forEach(review=>{
            if(review.productId === product.id){
              sunOfRatings =+ review.rating;
              totalReviews++;
            }
          });
          const avgReviewRating = sunOfRatings/totalReviews;
          return avgReviewRating >= avgRating; // check and return value for filteration 
        });
      
        return filteredProducts;
      }
    }
    return categoryProducts;
      
    }
  };


  //destructured and refactored