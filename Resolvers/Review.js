exports.Review={
  product:(parent, args, {products})=>{
    console.log('reviwes resolver',parent);
    return products.find(products => products.id === parent.productId);
  }
};

// we dont need it 