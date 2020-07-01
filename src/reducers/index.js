import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import signStatusReducer from './signStatusReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
  auth: authReducer,
  userStatus: signStatusReducer,
  form: formReducer,
  streams: streamsReducer,
});
