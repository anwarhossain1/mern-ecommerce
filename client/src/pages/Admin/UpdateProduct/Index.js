import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  updateProductAction,
} from "../../../app/actions/productActions";
const Index = ({ match }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [imageurl, setImageurl] = useState("");
  const [category, setCategory] = useState("");
  const [countInStock, setCountInStock] = useState(0);
  const productState = useSelector((state) => state.getProductByIdReducer);
  const { product } = productState;
  console.log(product + "prodtct");
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      if (product._id === match.params.id) {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setImageurl(product.image);
        setCategory(product.category);
        setCountInStock(product.countInStock);
      } else {
        dispatch(getProductById(match.params.id));
      }
    } else {
      dispatch(getProductById(match.params.id));
    }
  }, [dispatch, product]);

  const formHandler = (e) => {
    e.preventDefault();
    const updateProduct = {
      name: name,
      price: price,
      description: description,
      imageurl: imageurl,
      category: category,
      countInStock: countInStock,
    };

    dispatch(updateProductAction(updateProduct, match.params.id));

    console.log(updateProduct);
  };
  return (
    <div>
      {product && (
        <div className="row justify-content-center">
          <div className="col-md-6 card m-3 p-5">
            <h2>Update Your Product</h2>
            <form onSubmit={formHandler}>
              <div className="form-group mt-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="productName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group  mt-2">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="productPrice"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="productDescription"
                  value={description}
                  placeholder="Update product description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="productUrl"
                  placeholder="Update product image url"
                  value={imageurl}
                  onChange={(e) => setImageurl(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  required
                  type="text"
                  className="form-control"
                  id="productCategory"
                  placeholder="Update product catagory"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form-group mt-2">
                <input
                  required
                  type="number"
                  className="form-control"
                  id="productInStock"
                  placeholder="Update Count in stock"
                  value={countInStock}
                  onChange={(e) => setCountInStock(e.target.value)}
                />
              </div>
              <button className="btn btn-success mt-5">
                Update New Product
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
