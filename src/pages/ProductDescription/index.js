import React from "react";
import products from "../../products";

export default function index({ match }) {
  const productId = match.params.id; //match has been used here as a props by which getting the id(this should be exactly what has been given into routes) from the parameters
  return (
    <div>
      this is product description page
      {productId}
    </div>
  );
}
