'use strict'

import  { createErrPopup } from './ErrHelpers';

let instance = null;

export default class ErrorHandler {
    constructor() {
        
        if (!instance) {
            instance = this;
            createErrPopup();
        }
        return instance;
    }

    showErrorModal (err) {
        const popUp = document.querySelector(".popup__wrapper");
        const popUpContent = document.querySelector(".popup__content");
        
        popUpContent.innerHTML = err;
        popUp.classList.toggle("show__popup");
    }
}