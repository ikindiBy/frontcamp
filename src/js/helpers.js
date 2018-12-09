'use strict'

import  ErrorHandler from './ErrorHandler';
import  { NUMBER_ITEMS } from './constants';

const errorHandler = new ErrorHandler();

const validateImageSource = (url) => {
    if (!url || url.slice(0,4) !== 'http') {
        return false;
    } 
    return true;
};

const  fetchByURL = async (url) => {
    const req = new Request(url);
    let result = [];
    try {
        const response = await fetch(req);
        result = await response.json();
    } catch(err) {
        errorHandler.showErrorModal(err);
    }
    return result;
};

const getShortListItems = (items) => {
    const length = items.length;
    const startNum = Math.floor((length-NUMBER_ITEMS)/2);
    return items.slice(startNum, startNum + NUMBER_ITEMS);
}

// const loadErrorHandling = () => {
//     let ErrorHandler = null;
//     console.log('---------------  loadErrorHandling  ---');
//     import(/* webpackChunkName: "print" */ './ErrorHandler').then(module => {
        
//         ErrorHandler = module.default;
//         console.log('----======-------  loadErrorHandling  ---',ErrorHandler);
//         // return ErrorHandler;
//     });
//     return ErrorHandler;
// }

export { 
    validateImageSource,
    fetchByURL,
    getShortListItems,
    // loadErrorHandling,
};