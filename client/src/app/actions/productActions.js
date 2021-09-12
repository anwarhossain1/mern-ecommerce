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
export const getProductById = (productid) => (dispatch) => {
  dispatch({
    type: "GET_PRODUCTBYID_REQUEST",
  });
  axios
    .post("/api/products/getproductbyid", { productid })
    .then((response) => {
      console.log(response);
      dispatch({
        type: "GET_PRODUCTBYID_SUCCESS",
        payload: response.data,
      });
      //setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: "GET_PRODUCTBYID_ERROR",
        payload: error,
      });
    });
};

export const filterProducts = (search, sort, category) => (dispatch) => {
  let filteredProducts;
  dispatch({ type: "GET_PRODUCTS_REQUEST" });

  axios
    .get("/api/products/getallproducts")
    .then((res) => {
      filteredProducts = res.data;
      if (search) {
        filteredProducts = res.data.filter((product) => {
          return product.name.toLowerCase().includes(search); //filtering by search and returning searched data
        });

        console.log(search);
      }

      if (sort !== "popular") {
        if (sort === "htl") {
          filteredProducts = res.data.sort((a, b) => {
            return -a.price + b.price; //compare a nd b and sort based on descending order
          });
        } else if (sort === "lth") {
          filteredProducts = res.data.sort((a, b) => {
            return a.price - b.price; //compare a nd b and sort based on ascending order
          });
        }
      }

      if (category !== "all") {
        filteredProducts = res.data.filter((product) => {
          return product.category.toLowerCase().includes(category); //filtering by category and returning filtered data
        });
      }

      dispatch({
        type: "GET_PRODUCTS_SUCCESS",
        payload: filteredProducts,
      });
    })

    .catch((err) => {
      dispatch({
        type: "GET_PRODUCTS_ERROR",
        payload: err,
      });
    });
};
