import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../app/actions/orderActions";
import Loader from "../../components/Spinner/Index";
const Index = ({ match }) => {
  const dispatch = useDispatch();
  const orderItemDataFromState = useSelector(
    (state) => state.getOrderByIdReducer
  );
  const { order, loading } = orderItemDataFromState;
  useEffect(() => {
    dispatch(getOrderById(match.params.orderid));
    console.log("ese");
  }, [dispatch]);

  return (
    <div>
      {loading && <Loader />}
      {order && (
        <div style={{ marginLeft: "20px", marginRight: "20px" }}>
          <div className="row justify-content-center">
            <div className="col-md-5 card mt-3 text-start">
              <h2 className="text-start fw-bold mt-2">Items</h2>
              <hr />
              {order.orderItems.map((item) => {
                return (
                  <div>
                    <h2>{item.name}</h2>
                    <h2>Quantity: {item.quantity}</h2>
                    <h2>
                      Total Price: {item.quantity} * {item.price} =
                      {item.quantity * item.price}/-
                    </h2>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="col-md-5 card mt-3 text-end">
              <h2 className="fw-bold mt-2">Order Details</h2>
              <hr />
              <h2>Order Id : {order._id}</h2>
              <h2>Total Amount : {order.orderAmount}</h2>
              <h2>Date of Order : {order.createdAt.substring(0, 10)}</h2>
              <h2>Transaction ID : {order.transactionId}</h2>
              {order.isDelivered ? (
                <h2>
                  Status: <span className="text-success">Delivered</span>
                </h2>
              ) : (
                <h2>
                  Status: <span className="text-warning">Order Placed</span>
                </h2>
              )}
              <hr />
              <h2 className="fw-bold">Shipping Details</h2>
              <hr />
              <h2>Address :{order.shippingAddress.address}</h2>
              <h2>City : {order.shippingAddress.city}</h2>
              <h2>Country : {order.shippingAddress.country}</h2>
              <h2>Postal Code: {order.shippingAddress.postalCode}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
