import axios from "axios";

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST",
  });
  axios
    .get("/api/products/getallproducts")
    .then((response) => {
      console.log(response);
      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: response.data,
      });
      //setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "GET_PODUCTS_ERROR",
        payload: error,
      });
    });
};
