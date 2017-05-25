import { handleActions } from 'redux-actions';

const initialState = {
  isLoggedIn: false,
  loginError: null,
  currentUser: {},
};

export default handleActions({
  LOGIN: (state, action) => {
    if (action.payload.error) {
      return {
        ...state,
        isLoggedIn: false,
        loginError: action.payload.error,
        currentUser: null
      };
    } else if (action.payload) {
      return {
        ...state,
        isLoggedIn: true,
        loginError: null,
        currentUser: action.payload
      };
    }
    return state;
  },
  LOGOUT: (state) => {
    return {
      ...state,
      isLoggedIn: false,
      loginError: null,
      currentUser: {}
    };
  },
}, initialState);