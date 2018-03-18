import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import adminsReducer from './adminsReducer';
import auth from './auth';
export default combineReducers({
	users: usersReducer,
	auth,
	admins: adminsReducer
});