import {
  getAllProductsReducer,
  getProductByIdReducer,
} from "./reducers/productReducer";

import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { addToCartReducer } from "./reducers/cartReducer";
import {
  LoginUserReducer,
  registerNewUserReducer,
} from "./reducers/userReducer";
import { json } from "body-parser";

const finalReducer = combineReducers({
  getAllProductsReducer: getAllProductsReducer,
  getProductByIdReducer: getProductByIdReducer,
  addToCartReducer: addToCartReducer,
  registerNewUserReducer: registerNewUserReducer,
  LoginUserReducer: LoginUserReducer,
});
const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null; // setting the current user from taking the data of current user from localstorage

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
  LoginUserReducer: {
    currentUser: currentUser,
  },
};
const composeEnhancers = composeWithDevTools({
  // Specify here name, actionsBlacklist, actionsCreators and other options
});
const store = createStore(
  finalReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
