import { combineReducers } from 'redux';
import authReducer from './authReducer';
import signStatusReducer from './signStatusReducer';

export default combineReducers({
  auth: authReducer,
  isSignedIn: signStatusReducer,
});
