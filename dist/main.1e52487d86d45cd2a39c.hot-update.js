webpackHotUpdate("main",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "../node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./constants.js");
/* harmony import */ var _viewCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewCreators */ "./viewCreators.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./helpers.js");







const createCategoriesNav = () => {
  console.log(234334234234234234234234234);
  const navigationCategories = document.getElementById('categories_nav');
  const divCat1 = document.createElement('div');
  divCat1.innerHTML = `<span class="cat_of_source" data-cateory-id=""> "asdasdasd" </span>`;
  navigationCategories.appendChild(divCat1);
  _constants__WEBPACK_IMPORTED_MODULE_1__["ALL_CATEGORIES"].forEach(cat => {
    const divCat = document.createElement('div');
    divCat.innerHTML = `<span class="cat_of_source" data-cateory-id="${cat}"> ${cat.toUpperCase()} </span>`;
    navigationCategories.appendChild(divCat);
  });
  navigationCategories.addEventListener('click', e => {
    showListSourcesByCategory(e.target.dataset.cateoryId);
  });
};

const showListSourcesByCategory = async categoryId => {
  const sourcesGroup = document.getElementById('sources_group');
  const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"]}`;
  const response = await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fetchByURL"])(url);
  const div = Object(_viewCreators__WEBPACK_IMPORTED_MODULE_2__["createListSources"])(response.sources);
  sourcesGroup.innerHTML = '';
  sourcesGroup.appendChild(div);
  div.addEventListener('click', e => {
    showRecordsBySourceId(e.target.dataset.sourceId);
  });
};

const showRecordsBySourceId = async sourceId => {
  const newsGroup = document.getElementById('news_group');
  const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${_constants__WEBPACK_IMPORTED_MODULE_1__["KEY"]}`;
  const response = await Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["fetchByURL"])(url);
  const ul = Object(_viewCreators__WEBPACK_IMPORTED_MODULE_2__["createListArticles"])(response.articles);
  newsGroup.innerHTML = '';
  newsGroup.appendChild(ul);
};

createCategoriesNav();

/***/ })

})
//# sourceMappingURL=main.1e52487d86d45cd2a39c.hot-update.js.map