import streams from '../apis/streams';
import {
  SET_AUTH,
  SET_USER_STATUS,
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from './types';

export const setAuth = () => async (dispatch) => {
  window.gapi.load('client:auth2', async () => {
    await window.gapi.client.init({
      clientId:
        '171877497873-1fonueo2nev151uf5kikg3g4ne36bfe2.apps.googleusercontent.com',
      scope: 'email',
    });

    const auth = window.gapi.auth2.getAuthInstance();

    dispatch({ type: SET_AUTH, payload: auth });

    const isSignedIn = auth.isSignedIn.get();

    const userId = auth.currentUser.get().getId();

    dispatch(setUserStatus(isSignedIn, userId));
  });
};

export const setUserStatus = (isSignedIn, userId) => {
  return {
    type: SET_USER_STATUS,
    payload: { isSignedIn, userId },
  };
};

export const trySignIn = () => async (dispatch, getState) => {
  const auth = getState().auth;

  try {
    await auth.signIn();
  } catch (e) {
    console.log(e);
  }

  const signStatus = auth.isSignedIn.get();

  const userId = getState().auth.currentUser.get().getId();

  dispatch(setUserStatus(signStatus, userId));
};

export const trySignOut = () => async (dispatch, getState) => {
  const auth = getState().auth;
  try {
    await auth.signOut();
  } catch (e) {
    console.log(e);
  }

  const signStatus = auth.isSignedIn.get();
  console.log(signStatus);

  const userId = null;

  dispatch(setUserStatus(signStatus, userId));
};

export const createStream = (formValues) => async (dispatch) => {
  const response = await streams.post('/streams', formValues);

  dispatch({ type: CREATE_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};
