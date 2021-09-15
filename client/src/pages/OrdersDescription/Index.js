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

  console.log(order);
  return (
    <div>
      {loading && <Loader />}
      {order && (
        <div>
          <div className="row justify-content-center">
            <div className="col-md-5 card">
              <h2>Items</h2>

              {/* {order.orderItems.map((item) => {
                return (
                  <div>
                    <h2>{item.name}</h2>
                    <p>{item.quantity}</p>
                    <p>
                      {item.quantity} * {item.price} =
                      {item.quantity * item.price}
                    </p>
                  </div>
                );
              })} */}
            </div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
