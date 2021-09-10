export const registerNewUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "REGISTER_NEWUSER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_REGISTER_FAILURE":
      return {
        ...state,
        loading: true,
        error: "User Already Registered",
      };

    default:
      return state;
  }
};
