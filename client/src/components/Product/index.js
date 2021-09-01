import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function index({ product }) {
  return (
    <div>
      <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
        <div>
          <img alt="image" src={product.image} className="img-fluid" />
          <div className="m-2 text-start">
            <h1>{product.name}</h1>
            <h1>Price: {product.price}</h1>
            <Rating
              initialRating={product.rating}
              emptySymbol="far fa-star fa-1x"
              fullSymbol="fas fa-star fa-1x"
              readonly
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
