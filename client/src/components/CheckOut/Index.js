import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { placeOrder } from "../../app/actions/orderActions";
import { placeOrderReducer } from "../../app/reducers/orderReducer";
import Loader from "../../components/Spinner/Index";
import Success from "../../components/Success/Index";
import Error from "../../components/Error/Index";
const Index = ({ amount }) => {
  const dispatch = useDispatch();

  const tokenHandler = (token) => {
    console.log(token);
    dispatch(placeOrder(token, amount));
  };
  const orderState = useSelector((state) => state.placeOrderReducer);
  const { loading, error, success } = orderState;

  return (
    <div>
      {loading && <Loader />}
      {success && <Success success="Order Has Been placed Successfully." />}
      {error && <Error error="Something Went Wrong. Please Try Again." />}
      <StripeCheckout
        token={tokenHandler}
        amount={amount * 100}
        currency="BDT"
        shippingAddress
        stripeKey="pk_test_51Hx5XkF3TEUNtEMpJRoHZqSWrc1Wf5wJ95U73LZ6Hdy2nkWJ5j7GFuKOBkPeXOuLMk3ElgdyAQ7hq1RxVtUpML2700SNlmJHt2"
      >
        <button className="btn btn-dark" style={{ width: "200px" }}>
          Pay Now
        </button>
      </StripeCheckout>
    </div>
  );
};

export default Index;
