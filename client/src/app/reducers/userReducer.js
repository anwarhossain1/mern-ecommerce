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

export const LoginUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_NEWUSER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_LOGIN_FAILURE":
      return {
        ...state,
        loading: true,
        error: "User Login Failed",
      };

    default:
      return state;
  }
};
