import { SET_USER_STATUS } from '../actions/types';

export default (userStatus = { isSignedIn: null, userId: null }, action) => {
  switch (action.type) {
    case SET_USER_STATUS:
      return action.payload;
    default:
      return userStatus;
  }
};
