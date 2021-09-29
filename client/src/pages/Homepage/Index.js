import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../../components/Product/index";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../app/actions/productActions";
import { getAllProductsReducer } from "../../app/reducers/productReducer";
import Spinner from "../../components/Spinner/Index";
import Error from "../../components/Error/Index";
import Filter from "../../components/Filter/Index";
import Carousel from "../../components/Carousel/Index";

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
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <Filter />
      <div className="row justify-content-center">
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error error="Something Went Wrong." />
        ) : (
          <>
            {/* <Carousel /> */}
            {products.map((product) => {
              return (
                <div
                  className="col-md-3 m-5 mr-2 p-2 shadow p-3 mb-5 bg-white rounded card"
                  key={product._id}
                >
                  <Product product={product} />;
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
