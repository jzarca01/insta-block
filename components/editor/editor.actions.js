import config from '../../config/config.json';

import { web3, selectContractInstance, mapReponseToJSON} from '../../common/web3';
import Instablock from '../../blockContracts/build/contracts/Instablock.json';

import { 
    UPLOAD_PHOTO_ERROR,
    UPLOAD_PHOTO_REQUEST,
    UPLOAD_PHOTO_SUCCESS,
    LOAD_INSTANCE_REQUEST,
    LOAD_INSTANCE_ERROR,
    INSTANCE_LOADED,
    ADD_TO_BLOCKCHAIN 
} from './editor.action-names';

import { postToImgur } from '../../common/imgur';

export function getInstance(showLoading = true) {
    return function (dispatch) {
        selectContractInstance(Instablock)
        .then(instance => {
            dispatch({
                type: LOAD_INSTANCE_REQUEST,
            });
            saveInstance(instance, dispatch);
        })
        .catch(err => {
            console.log("err instance", err);
            dispatch({
                type: LOAD_INSTANCE_ERROR
            })
        });
    }
}

function saveInstance(instance, dispatch) {
    return dispatch({
        type: INSTANCE_LOADED,
        payload: {
            instance: instance
        }
    });
}

export function postImage(instance, data) {
    return function (dispatch) {
        console.log("post image");
        postToImgur(data.split("file://private")[1])
        .then(result => {
            console.log("post image request");

            dispatch({
                type: UPLOAD_PHOTO_REQUEST
            });
            return result.data;
        })
        .then(result => {
            console.log("post image success");

            dispatch({
                type: UPLOAD_PHOTO_SUCCESS,
                payload: {
                    photoInfo: result,
                    instance: instance
                }
            });
            return addItemToTheBlockChain(instance, result.link, dispatch);
        })
        .catch(err => {
            console.log("err post", err);
            dispatch({
                type: UPLOAD_PHOTO_ERROR
            });
        })
    }
}

export function addItemToTheBlockChain(instance, imgurLink, dispatch) {
    console.log("bc image");

    instance.addItem(imgurLink, {
        from: config.localAddress
    })
    .then(response => {
        console.log("response", response);
        dispatch({
            type: ADD_TO_BLOCKCHAIN
        });
    })
    .catch(err => {
        console.log("err", err);
        dispatch({
            type: UPLOAD_PHOTO_ERROR
        });
    });
}

export function cancelPhoto() {
    return function (dispatch) {
        dispatch({
            type: CANCEL_PHOTO
        });
    }
}