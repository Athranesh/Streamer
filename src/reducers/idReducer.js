import { SET_ID } from '../actions/types';

export default (id = null, action) => {
  switch (action.type) {
    case SET_ID:
      return action.payload;
    default:
      return id;
  }
};
