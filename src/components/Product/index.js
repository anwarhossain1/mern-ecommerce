import React from "react";

export default function index({ product }) {
  return (
    <div className="col-md-3 m-5 p-2 card">
      <div>
        <img alt="image" src={product.image} className="img-fluid" />
        <h1>{product.name}</h1>
        <h1>Price: {product.price}</h1>
        <h1>Rating: {product.rating}</h1>
      </div>
    </div>
  );
}