import { handleActions } from 'redux-actions';

const initialState = {
  isLoggedIn: false,
  currentUser: {},
};

export default handleActions({}, initialState);