import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, getallusers } from "../../../app/actions/userActions";

const Index = () => {
  const dispatch = useDispatch();
  const getAllUsersState = useSelector((state) => state.getAllUsersReducer);
  const { users, loading, success } = getAllUsersState;
  useEffect(() => {
    dispatch(getallusers());
  }, []);
  return (
    <div>
      <h1 className="text-center font-weight-bold display-5">Users List</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => {
              return (
                <tr>
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <i
                      class="far fa-trash-alt"
                      onClick={() => {
                        dispatch(deleteUser(user._id));
                      }}
                    ></i>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
