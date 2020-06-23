import { combineReducers } from 'redux';
import users from './users/reducer';
import errors from './errors/reducer';

export const reducers = () => ({
  ...errors,
  ...users,
});

export default combineReducers(reducers());
