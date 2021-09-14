import axios from "axios";

export const placeOrder = (token, subtotal) => (dispatch, getState) => {
  const currentUser = getState().LoginUserReducer.currentUser;
  const cartItems = getState().addToCartReducer.cartItems;

  //modiffied cartitems for not sending countinstock variable into database
  const modCartItems = new Array();

  for (let i = 0; i < cartItems.length; i++) {
    let item = {
      name: cartItems[i].name,
      quantity: cartItems[i].quantity,
      price: cartItems[i].price,
      _id: cartItems[i]._id,
    };

    modCartItems.push(item);
  }

  //console.log(cartItems);

  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });
  axios
    .post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      modCartItems,
    })
    .then((res) => {
      dispatch({
        type: "PLACE_ORDER_SUCCESS",
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: "PLACE_ORDER_FAILED",
      });
    });
};
