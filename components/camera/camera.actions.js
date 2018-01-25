import { 
    CAMERA_LOADED,
    CAMERA_ERROR,
    CAPTURE_PHOTO
} from './camera.action-names';

export function loadCamera(showLoading = true) {
    return function (dispatch) {
        dispatch({
            type: CAMERA_LOADED
        });
    }
}

export function capturePhoto(data) {
    return function (dispatch) {
        dispatch({
            type: CAPTURE_PHOTO,
            payload: {
                photoInfo: data
            }
        });
    }
}

export function isErrorCamera(err) {
    return function (dispatch) {
        dispatch({
            type: CAMERA_ERROR,
            payload: {
                errroDetails: err
            }
        });
    }
}