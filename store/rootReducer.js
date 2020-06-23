import { combineReducers } from 'redux';
import users from './users/reducer';
// import errors from './errors/reducer';

export const reducers = () => ({
   ...users,
});

export default combineReducers(reducers());
