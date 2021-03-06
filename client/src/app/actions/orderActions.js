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
      console.log(err);
    });
};

export const getOrdersByUserId = () => (dispatch, getState) => {
  const userid = getState().LoginUserReducer.currentUser._id;

  dispatch({
    type: "GET_ORDERSBYUSERID_REQUEST",
  });
  axios
    .post("/api/orders/getordersbyuserid", { userid: userid })
    .then((res) => {
      dispatch({
        type: "GET_ORDERSBYUSERID_SUCCESS",
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({
        type: "GET_ORDERSBYUSERID_FAILED",
        payload: error,
      });
    });
};

export const getOrderById = (orderid) => (dispatch) => {
  dispatch({
    type: "GET_ORDERBYID_REQUEST",
  });
  axios
    .post("/api/orders/getorderbyid", { orderid: orderid })
    .then((res) => {
      dispatch({
        type: "GET_ORDERBYID_SUCCESS",
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({
        type: "GET_ORDERBYID_FAILED",
        payload: error,
      });
    });
};

export const getAllOrders = () => (dispatch) => {
  dispatch({
    type: "GET_ALLORDERS_REQUEST",
  });
  axios
    .get("/api/orders/getallorders")
    .then((res) => {
      dispatch({
        type: "GET_ALLORDERS_SUCCESS",
        payload: res.data,
      });
      console.log(res.data);
    })
    .catch((error) => {
      dispatch({
        type: "GET_ALLORDERS_FAILED",
        payload: error,
      });
    });
};
