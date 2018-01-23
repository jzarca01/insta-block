import config from '../../config/config.json';

import { web3, selectContractInstance, mapReponseToJSON} from '../../common/web3';
import Instablock from '../../blockContracts/build/contracts/Instablock.json';

import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './feed.action-names';

export function getInstance(showLoading = true) {
    return dispatch => {
        selectContractInstance(Instablock)
        .then(instance => {
            dispatch({
                type: FETCH_DATA_REQUEST,
                payload: {
                    isLoading: showLoading,
                    instance: instance
                }
            });
            return getItems(instance, dispatch);
        })
        .catch(err => {
            console.log("err instance", err);
            dispatch({
                type: FETCH_DATA_ERROR
            })
        });
    }
}

export function getItems(instance, dispatch) {
    instance.getItems()
    .then(itemsResp => {
        const items = mapReponseToJSON(
            itemsResp, ['photo'], 'arrayOfObject'
        );
        dispatch({
            type: FETCH_DATA_SUCCESS,
            payload: {
                feedInfo: items.filter(item => item.photo !== "")
            }
        })
    })
    .catch(err => {
        console.log("err items", err);
        dispatch({
            type: FETCH_DATA_ERROR
        })
    })
}
