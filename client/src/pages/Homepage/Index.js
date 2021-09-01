import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/Product/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/actions/productActions";
import { getAllProductsReducer } from "../../app/reducers/productReducer";

export default function Index() {
  //const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );

  const { loading, products, error } = getAllProductsState;

  useEffect(() => {
    // axios
    //   .get("/api/products/getallproducts")
    //   .then((response) => {
    //     console.log(response);
    //     setProducts(response.data);
    dispatch(getAllProducts());
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, []);
  //console.log(products);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>"Something went wrong"</h1>
        ) : (
          products.map((product) => {
            return (
              <div className="col-md-3 m-5 p-2 card ">
                <Product product={product} />;
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
