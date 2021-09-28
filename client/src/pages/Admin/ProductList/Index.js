import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProduct,
  getAllProducts,
} from "../../../app/actions/productActions";

const Index = () => {
  const dispatch = useDispatch();
  const getAllProductsState = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { products, loading, success } = getAllProductsState;
  console.log(products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div>
      <h1>Product List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Id</th>
            <th>Products Name</th>
            <th>Price</th>
            <th>Stock</th>

            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}/-</td>
                  <td>{product.countInStock}</td>

                  <td>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteProduct(product._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
