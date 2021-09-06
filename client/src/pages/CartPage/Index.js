import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../app/actions/cartActions";

const Index = () => {
  const cartreducerstate = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;
  return (
    <div>
      <div className="row mt-5 justify-content-center">
        <h1 className="text-center mt-3 font-weight-bold">My Cart</h1>
        <div className="col-md-8 mt-5 ">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Item Choosed</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price (টাকা)</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>
                      <select
                        value={item.quantity}
                        onChange={(e) => {
                          dispatch(addToCart(item, e.target.value));
                        }}
                      >
                        {[...Array(item.countInStock).keys()].map((x, i) => {
                          return <option value={i + 1}>{i + 1}</option>;
                        })}
                      </select>
                    </td>
                    <td>{item.quantity * item.price}</td>
                    <td>
                      <i
                        class="far fa-trash-alt"
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      ></i>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Index;