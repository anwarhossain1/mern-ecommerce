export const placeOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case "PLACE_ORDER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "PLACE_ORDER_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
      };
    case "PLACE_ORDER_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
      };
    default:
      return { state };
  }
};

export const getOrdersByUserIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_ORDERSBYUSERID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ORDERSBYUSERID_SUCCESS":
      return {
        ...state,
        loading: false,
        error: false,
        orders: action.payload,
      };
    case "GET_ORDERSBYUSERID_FAILED":
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return { state };
  }
};
