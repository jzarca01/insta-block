import {combineReducers} from 'redux';
import feedReducer from './feed-reducer';
import cameraReducer from './camera-reducer';

// Root Reducer
const rootReducer = combineReducers({
  feed: feedReducer,
  camera: cameraReducer
});

export default rootReducer;