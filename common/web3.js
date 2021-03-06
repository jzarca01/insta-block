import Web3 from 'web3';
import contract from 'truffle-contract';
import _ from 'lodash';

import config from '../config/config.json';

const provider = new Web3.providers.HttpProvider(config.web3Url);

const web3 = new Web3(provider);
export default web3;

export const selectContractInstance = (contractBuild) => {
  return new Promise(resolve => {
    const myContract = contract(contractBuild);
    myContract.setProvider(provider);
    myContract
      .deployed()
      .then(instance => resolve(instance));
  })
}

export const mapReponseToJSON = (contractResponse, parameters, type) => {
  switch (type) {
    case 'arrayOfObject': {
      const result = [];
      contractResponse.forEach((paramValues, paramIndex) => {
        const paramName = parameters[paramIndex];
        paramValues.forEach((paramValue, itemIndex) => {
          const item = _.merge({}, _.get(result, [itemIndex], {}));
          if (typeof paramValue === 'string') {
            paramValue = web3.toUtf8(paramValue).trim();
          }
          item[paramName] = paramValue;
          result[itemIndex] = item;
        })
      });

      return result;
    }
    default:
      return contractResponse;
  }
}