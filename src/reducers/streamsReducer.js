import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      const newState = {};
      action.payload.forEach((stream) => {
        newState[stream.id] = stream;
      });
      return { ...state, ...newState };

    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_STREAM:
      //Payload itself is the id
      return { ...state, [action.payload]: undefined };

    default:
      return state;
  }
};
