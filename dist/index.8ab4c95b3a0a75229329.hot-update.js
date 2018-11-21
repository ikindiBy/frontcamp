webpackHotUpdate("index",{

/***/ "./helpers.js":
/*!********************!*\
  !*** ./helpers.js ***!
  \********************/
/*! exports provided: validateImageSource, fetchByURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateImageSource", function() { return validateImageSource; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchByURL", function() { return fetchByURL; });


function validateImageSource(url) {
  if (!url || url.slice(0, 4) !== 'http') {
    return false;
  }

  return true;
}

;

const fetchByURL = async url => {
  const req = new Request(url);
  let result = [];

  try {
    const response = await fetch(req);
    result = await response.json();
  } catch (err) {
    console.log('Fetch Error: ', err);
  }

  return result;
};



/***/ })

})
//# sourceMappingURL=index.8ab4c95b3a0a75229329.hot-update.js.map