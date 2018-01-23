import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import devToolsEnhancer from 'remote-redux-devtools';

const configureStore = (initialState) => {
  const middleware = applyMiddleware(thunk);

  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;