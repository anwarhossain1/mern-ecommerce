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
