'use strict'

const validateImageSource = (url) => {
    if (!url || url.slice(0,4) !== 'http') {
        return false;
    } 
    return true;
}

export { validateImageSource };