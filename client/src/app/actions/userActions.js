import axios from "axios";

export const registerNewUser = () => (dispatch) => {
  dispatch({
    type: "REGISTER_NEWUSER_REQUEST",
  });

  axios
    .post("/api/users/registernewuser")
    .then((res) => {
      dispatch({
        type: "USER_REGISTER_SUCCESS",
      });
    })
    .catch((err) => {
      dispatch({
        type: "USER_REGISTER_FAILURE",
      });
    });
};
