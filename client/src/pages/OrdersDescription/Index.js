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
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card mt-3 text-start">
              <h2 className="text-center">Items</h2>
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
              <h2>Order Details</h2>
              <hr />
              <h3>Order Id : {order._id}</h3>
              <h3>Total Amount : {order.orderAmount}</h3>
              <h3>Date of Order : {order.createdAt.substring(0, 10)}</h3>
              <h3>Transaction ID : {order.transactionId}</h3>
              {order.isDelivered ? (
                <h3>
                  Status: <span className="text-success">Delivered</span>
                </h3>
              ) : (
                <h3>
                  Status: <span className="text-warning">Order Placed</span>
                </h3>
              )}
              <hr />
              <h3>Shipping Details</h3>
              <hr />
              <h3>Address :{order.shippingAddress.address}</h3>
              <h3>City : {order.shippingAddress.city}</h3>
              <h3>Country : {order.shippingAddress.country}</h3>
              <h3>Postal Code: {order.shippingAddress.postalCode}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
