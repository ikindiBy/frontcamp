'use strict'

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
        console.log('Fetch Error: ', err);
    }
    return result;
};

export { validateImageSource, fetchByURL };