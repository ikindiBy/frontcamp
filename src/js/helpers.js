'use strict'

import  { NUMBER_ITEMS } from './constants';

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
        import(/* webpackChunkName: "ErrorHandler" */ './ErrorHandler').then(module => {
            const ErrorHandler = module.default;
            const errorHandler = new ErrorHandler();
            errorHandler.showErrorModal(err);
        });
    }
    return result;
};

const getShortListItems = (items) => {
    const length = items.length;
    const startNum = Math.floor((length-NUMBER_ITEMS)/2);
    return items.slice(startNum, startNum + NUMBER_ITEMS);
}

export { 
    validateImageSource,
    fetchByURL,
    getShortListItems,
};