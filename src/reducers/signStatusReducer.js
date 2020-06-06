export default (isSignedIn = null, action) => {
  switch (action.type) {
    case 'SIGN_STATUS':
      return action.payload;
    default:
      return isSignedIn;
  }
};
