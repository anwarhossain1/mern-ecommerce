export const addToCart = (product, quantity) => (dispatch) => {
  const cartItem = {
    name: product.name,
    _id: product._id,
    price: product.price,
    countingStock: product.countInStock,
    quantity: quantity,
  };
  dispatch({
    type: "ADD_TO_CART",
    payload: cartItem,
  });
};
