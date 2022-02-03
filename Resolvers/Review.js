exports.Review={
  product:(parent, args, {db})=>{
    console.log('reviwes resolver',parent);
    return db.products.find(products => products.id === parent.productId);
  }
};

// we dont need it 