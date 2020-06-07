import { SET_AUTH, SET_USER_STATUS } from './types';

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
