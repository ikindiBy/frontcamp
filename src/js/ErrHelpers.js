'use strict'

const createErrPopup = () => {
    const popUp = document.querySelector(".popup__wrapper");

    popUp.addEventListener("click", closePopUp);

    window.onclick = (e) => {
        const classList =  e.target.classList;
        if (!classList.contains('popup') && popUp.classList.contains('show__popup')) {
            popUp.classList.toggle("show__popup");
        } 
    }

    function closePopUp (e) {
        if (e.target.classList.contains('popup__btn')){
            popUp.classList.toggle("show__popup");
        } else {
            return;
        }
    }
}

export { createErrPopup };