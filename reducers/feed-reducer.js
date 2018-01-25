import {
  FETCH_DATA_ERROR,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from '../components/feed/feed.action-names';

const initialState = {
  instance: {},
  blockNumber: null,
  feedInfo: [],
  isLoading: true,
  error: false,
};


const feedReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST: {
      return {
        ...state,
        ...action.payload
      };
    }
    case FETCH_DATA_ERROR: {
      return {
        ...state,
        isLoading: false,
        error: true
      };
    }
    case FETCH_DATA_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: false,
        ...action.payload
      };
    }
    default: {
      return state;
    }
  }
};

export default feedReducer;