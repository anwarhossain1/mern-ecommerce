import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../app/actions/cartActions";
import Checkout from "../../components/CheckOut/Index";
const Index = () => {
  const cartreducerstate = useSelector((state) => state.addToCartReducer);
  const dispatch = useDispatch();
  const { cartItems } = cartreducerstate;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity, //array.reduce method has been used for calculation
    0
  );
  return (
    <div style={{ marginLeft: "20px", marginRight: "20px" }}>
      <div className="row mt-5 justify-content-center">
        <h1 className="text-center mt-3 fs-1 fw-bold">My Cart</h1>
        <div className="col-md-8 mt-5 ">
          <table className="table table-striped table-responsive">
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
                        style={{ color: "red" }}
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
          <br />
          <hr />
          <div>
            <h2 className="text-center">Sub Total:- ৳ {subtotal}/-</h2>
            <Checkout amount={subtotal} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
