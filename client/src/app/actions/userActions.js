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
