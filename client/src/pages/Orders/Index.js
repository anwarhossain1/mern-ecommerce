import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrdersByUserId } from "../../app/actions/orderActions";
import { Link } from "react-router-dom";
const Index = () => {
  const dispatch = useDispatch();
  const currentUsersOrderFromState = useSelector(
    (state) => state.getOrdersByUserIdReducer
  );
  const { orders, error, loading } = currentUsersOrderFromState;
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      dispatch(getOrdersByUserId());
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-8 mt-5">
          <h2>All Orders</h2>
          <hr />
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Order Id</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Transaction ID</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order) => {
                  return (
                    <tr
                      onClick={() =>
                        (window.location = `/ordersdescription/${order._id}`)
                      }
                    >
                      <td>{order._id}</td>

                      <td>{order.orderAmount}</td>
                      <td>{order.createdAt.substring(0, 10)}</td>
                      <td>{order.transactionId}</td>
                      <td>
                        {order.isDelivered ? (
                          <li className="text-success">Delivered</li>
                        ) : (
                          <li className="text-warning">Order Placed</li>
                        )}
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
