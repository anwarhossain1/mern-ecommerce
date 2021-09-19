import axios from "axios";

export const registerNewUser = (user) => (dispatch) => {
  dispatch({
    type: "REGISTER_NEWUSER_REQUEST",
  });

  axios
    .post("/api/users/register", user)
    .then((res) => {
      dispatch({
        type: "USER_REGISTER_SUCCESS",
      });
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: "USER_REGISTER_FAILURE",
        payload: err,
      });
      console.log(err);
    });
};
export const loginUser = (user) => (dispatch) => {
  dispatch({
    type: "LOGIN_USER_REQUEST",
  });

  axios
    .post("/api/users/login", user)
    .then((res) => {
      dispatch({
        type: "USER_LOGIN_SUCCESS",
      });
      localStorage.setItem("currentUser", JSON.stringify(res.data));
      window.location.href = "/";
      console.log(res);
    })
    .catch((err) => {
      dispatch({
        type: "USER_LOGIN_FAILURE",
        payload: err,
      });
      console.log(err);
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("currentUser");
  localStorage.removeItem("cartItems");
  dispatch({
    type: "USER_LOGOUT",
  });

  window.location.href = "/";
};

export const updateUserAction = (updatedUser, userid) => (dispatch) => {
  dispatch({
    type: "UPDATE_USER_REQUEST",
  });
  axios
    .post("/api/users/update", { updatedUser, userid })
    .then((res) => {
      dispatch({
        type: "USER_UPDATE_SUCCESS",
      });
      console.log(res);
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "USER_UPDATE_FAILURE",
        payload: err,
      });
      console.log(err);
    });
};

export const getallusers = () => (dispatch) => {
  dispatch({
    type: "GET_ALLUSERS_REQUEST",
  });

  axios
    .get("/api/users/getallusers")
    .then((res) => {
      dispatch({
        type: "GET_ALLUSERS_SUCCESS",
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: "GET_ALLUSERS_FAILURE",
        payload: err,
      });
      console.log(err);
    });
};

export const deleteUser = (userid) => (dispatch) => {
  dispatch({
    type: "DELETE_USER_REQUEST",
  });

  axios
    .post("/api/users/deleteuser", { userid })
    .then((res) => {
      dispatch({
        type: "DELETE_USER_SUCCESS",
        payload: res.data,
      });
      alert("User Deleted Successfully");
      window.location.reload();
    })
    .catch((err) => {
      dispatch({
        type: "DELETE_USER_FAILURE",
        payload: err,
      });
      console.log(err);
    });
};
