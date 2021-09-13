import axios from "axios";

export const placeOrder = (token, subtotal) => (dispatch, getState) => {
  const currentUser = getState().LoginUserReducer.currentUser;
  const cartItems = getState().addToCartReducer.cartItems;

  dispatch({
    type: "PLACE_ORDER_REQUEST",
  });
  axios
    .post("/api/orders/placeorder", { token, subtotal, currentUser, cartItems })
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
