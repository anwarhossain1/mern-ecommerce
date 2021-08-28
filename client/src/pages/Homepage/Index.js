import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
//import products from "../../products";
import Product from "../../components/Product/index";
export default function Index() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/api/products/getallproducts")
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(products);

  return (
    <div>
      <div className="row justify-content-center" key>
        {products.map((product) => {
          return <Product product={product} />;
        })}
      </div>
    </div>
  );
}
