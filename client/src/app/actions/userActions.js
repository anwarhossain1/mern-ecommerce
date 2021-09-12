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