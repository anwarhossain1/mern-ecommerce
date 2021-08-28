import React from "react";
import products from "../../products";
import Product from "../../components/Product/index";
export default function index() {
  return (
    <div>
      <div className="row justify-content-center">
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
