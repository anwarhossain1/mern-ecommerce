export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExistitem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (alreadyExistitem) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (item) => (item._id === action.payload._id ? action.payload : item) //for avoiding repitation of cart, old one's data will be replaced
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => {
          return item._id !== action.payload._id;
        }),
      };

    default:
      return state;
  }
};
