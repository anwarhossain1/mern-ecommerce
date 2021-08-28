import React from "react";
import products from "../../products";

export default function index({ match }) {
  const productId = match.params.id; //match has been used here as a props by which getting the id(this should be exactly what has been given into routes) from the parameters
  const product = products.find((product) => product.id == productId);

  return (
    <div>
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
            <select>
              {[...Array(product.countInStock).keys()].map((value, index) => {
                //here object.countInstock has been putt into an array and by using that array method, itarated all the values.
                return <option value={index + 1}>{value + 1}</option>;
              })}
            </select>
            <hr />
            <button className="btn btn-dark">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
