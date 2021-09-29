import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../../app/actions/orderActions";

const Index = () => {
  const getOrdersState = useSelector((state) => state.getAllOrdersReducer);
  const { orders } = getOrdersState;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrders());
  }, []);
  return (
    <div className="table-responsive">
      <table className="m-auto table table-hover">
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Email</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => {
              return (
                <tr
                  onClick={() =>
                    (window.location.href = `/ordersdescription/${order._id}`)
                  }
                >
                  <td>{order._id}</td>
                  <td>{order.email}</td>
                  <td>{order.userid}</td>
                  <td>{order.orderAmount}</td>
                  <td>{order.createdAt}</td>
                  <td>{order.transactionId}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
