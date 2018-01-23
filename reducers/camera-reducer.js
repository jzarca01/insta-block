import {
    CAMERA_LOADED,
    CAPTURE_PHOTO,
    UPLOAD_PHOTO_ERROR,
    UPLOAD_PHOTO_REQUEST,
    UPLOAD_PHOTO_SUCCESS,
    ADD_TO_BLOCKCHAIN,
  } from '../components/camera/camera.action-names';
  
  const initialState = {
    hasCaptured: false,
    hasUploaded: false,
    photoInfo: {},
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
          hasCaptured: true
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
          photoInfo: action.payload.photoInfo
        };
      }
      case ADD_TO_BLOCKCHAIN: {
        return {
          ...state,
          isAddedToBlockChain: true,
          hasCaptured: false
        };
      }
      default: {
        return state;
      }
    }
  };
  
  export default cameraReducer;