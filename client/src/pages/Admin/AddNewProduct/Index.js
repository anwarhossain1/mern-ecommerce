import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewProduct } from "../../../app/actions/productActions";
const Index = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      name: name,
      price: price,
      description: description,
      imageurl: imageurl,
      category: category,
      countInStock: countInStock,
    };

    dispatch(addNewProduct(newProduct));

    console.log(newProduct);
  };
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 card m-3 p-5">
          <h2>Add New Product</h2>
          <form onSubmit={formHandler}>
            <div className="form-group mt-3">
              <input
                required
                type="text"
                className="form-control"
                id="productName"
                placeholder="Add product name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group  mt-2">
              <input
                required
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Add product price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <input
                required
                type="text"
                className="form-control"
                id="productDescription"
                placeholder="Add product description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <input
                required
                type="text"
                className="form-control"
                id="productUrl"
                placeholder="Add product image url"
                onChange={(e) => setImageurl(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <input
                required
                type="text"
                className="form-control"
                id="productCategory"
                placeholder="Add product catagory"
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <div className="form-group mt-2">
              <input
                required
                type="number"
                className="form-control"
                id="productInStock"
                placeholder="Count in stock"
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <button className="btn btn-success mt-5">Add New Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Index;
