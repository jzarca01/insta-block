import {
  CAMERA_LOADED,
  CAMERA_ERROR,
  CAPTURE_PHOTO
} from '../components/camera/camera.action-names';

import { 
  UPLOAD_PHOTO_ERROR,
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  INSTANCE_LOADED, 
  LOAD_INSTANCE_REQUEST,
  LOAD_INSTANCE_ERROR,
  ADD_TO_BLOCKCHAIN, 
  CANCEL_PHOTO,
} from '../components/editor/editor.action-names';
  
const initialState = {
  hasCaptured: false,
  hasUploaded: false,
  photoInfo: {},
  errorDetails: {},
  imgUrInfo: {},
  instance: {},
  isAddedToBlockChain: false,
  error: false
};


const cameraReducer = (state = initialState, action) => {
  switch (action.type) {
    case CAMERA_LOADED: {
      return {
        ...state,
        ...action.payload
      }
    }
    case CAPTURE_PHOTO: {
      return {
        ...state,
        hasCaptured: true,
        photoInfo: action.payload.photoInfo
      };
    }
    case CAMERA_ERROR: {
      return {
        ...state,
        hasCaptured: false,
        errorDetails: action.payload.errorDetails
      };
    }
    case UPLOAD_PHOTO_ERROR: {
      return {
        ...state,
        hasCaptured: false,
        error: true
      };
    }
    case UPLOAD_PHOTO_REQUEST: {
      return {
        ...state,
        hasCaptured: true,
        error: false
      };
    }
    case UPLOAD_PHOTO_SUCCESS: {
      return {
        ...state,
        hasCaptured: true,
        hasUploaded: true,
        error: false,
        imgUrInfo: action.payload.imgUrInfo
      };
    }
    case LOAD_INSTANCE_REQUEST: {
      return {
        ...state
      }
    }
    case INSTANCE_LOADED : {
      return {
        ...state,
        ...action.payload
      }
    }
    case LOAD_INSTANCE_ERROR: {
      return {
        ...state,
        error: true
      }
    }
    case ADD_TO_BLOCKCHAIN: {
      return {
        ...state,
        isAddedToBlockChain: true,
        hasCaptured: false
      };
    }
    case CANCEL_PHOTO : {
      return {
        ...state,
        hasCaptured: false,
        photoInfo: {}
      }
    }
    default: {
      return state;
    }
  }
};

export default cameraReducer;