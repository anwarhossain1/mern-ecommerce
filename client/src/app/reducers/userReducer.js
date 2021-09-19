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
        error: "User Already Registered With The Email",
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

    case "USER_LOGOUT":
      return {
        ...state,
      };

    default:
      return state;
  }
};

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_UPDATE_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
      };
    case "USER_UPDATE_FAILURE":
      return {
        ...state,
        loading: true,
        error: "",
      };
    default:
      return state;
  }
};

export const getAllUsersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_ALLUSERS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALLUSERS_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        users: action.payload,
      };
    case "GET_ALLUSERS_FAILURE":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "DELETE_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "DELETE_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        success: true,
        users: action.payload,
      };
    case "DELETE_USER_FAILURE":
      return {
        ...state,
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
