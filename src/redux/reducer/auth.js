const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
    error: null,
    msg:null
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN_SUCCESS":
        return {
          ...state,
          token: action.token,
          isAuthenticated: action.isAuthenticated,
          error: action.error,
          msg:action.msg
        };
      case "AUTH_SUCCESS":
        return{
          ...state,
          token: action.token,
          isAuthenticated: action.isAuthenticated,
        }
      case "LOGIN_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
  
      case "LOGOUT":
        return {
          ...state,
          user: null,
          token: null,
          isAuthenticated: false,
          error: null,
        };

        case "SIGNUP":
        return {
          ...state,
          msg: action.msg,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  