export const setAuth = () => async (dispatch) => {
  window.gapi.load('client:auth2', async () => {
    await window.gapi.client.init({
      clientId:
        '171877497873-1fonueo2nev151uf5kikg3g4ne36bfe2.apps.googleusercontent.com',
      scope: 'email',
    });

    const auth = window.gapi.auth2.getAuthInstance();

    dispatch({ type: 'SET_AUTH', payload: auth });

    const isSignedIn = auth.isSignedIn.get();

    dispatch(setSignStatus(isSignedIn));
  });

  // .then(() => {
  //   const auth = window.gapi.auth2.getAuthInstance();

  //   dispatch({ type: 'SET_AUTH', payload: auth });

  //   const isSignedIn = auth.isSignedIn.get();

  //   dispatch(setSignStatus(isSignedIn));
  // });
};
export const setSignStatus = (isSignedIn) => {
  return {
    type: 'SIGN_STATUS',
    payload: isSignedIn,
  };
};

export const trySignIn = () => async (dispatch, getState) => {
  const auth = getState().auth;

  try {
    await auth.signIn();
  } catch (e) {}

  const signStatus = auth.isSignedIn.get();

  dispatch(setSignStatus(signStatus));
};

export const trySignOut = () => async (dispatch, getState) => {
  const auth = getState().auth;
  try {
    await auth.signOut();
  } catch (e) {}

  const signStatus = auth.isSignedIn.get();

  dispatch(setSignStatus(signStatus));
};
