import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger'

import rootReducers from './rootReducer';

const middlewares = [ thunkMiddleware];

process.env.NODE_ENV === 'development' && middlewares.push(logger);

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware( ...middlewares )
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

console.disableYellowBox = true; // Deshabilitar Warn en la UI



export default store
