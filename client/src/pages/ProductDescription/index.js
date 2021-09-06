import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../app/actions/cartActions";
import { getProductById } from "../../app/actions/productActions";

export default function Index({ match }) {
  const productId = match.params.id; //match has been used here as a props by which getting the id(this should be exactly what has been given into routes) from the parameters
  //const product = products.find((product) => product.id == productId);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { loading, product, error } = getproductbyidstate;
  console.log("hello");
  const cartHandler = () => {
    dispatch(addToCart(product, quantity));
  };

  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>Something went wrong...</h1>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <div className="card m-5 p-3">
              <img src={product.image} className="img-fluid m-3 desImage" />
              <h1>{product.name}</h1>
              <h1>{product.description}</h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card m-5 p-3">
              <h1>Price: {product.price}/-</h1>
              <hr />
              <h1>Select Quantity</h1>
              <select
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((value, index) => {
                  //here object.countInstock has been putt into an array and by using that array method, itarated all the values.
                  return <option value={index + 1}>{value + 1}</option>;
                })}
              </select>
              <hr />
              <button className="btn btn-dark" onClick={cartHandler}>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
