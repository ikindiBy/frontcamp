webpackHotUpdate("index",{

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./constants.js");
/* harmony import */ var _viewCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewCreators */ "./viewCreators.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./helpers.js");






var createCategoriesNav = function createCategoriesNav() {
  var navigationCategories = document.getElementById('categories_nav');
  var divCat1 = document.createElement('div');
  divCat1.innerHTML = "<span class=\"cat_of_source\" data-cateory-id=\"\"> \"asdasdasd\" </span>";
  navigationCategories.appendChild(divCat1); // ALL_CATEGORIES.forEach((cat) => {
  //     const divCat = document.createElement('div');
  //     divCat.innerHTML = `<span class="cat_of_source" data-cateory-id="${cat}"> ${cat.toUpperCase()} </span>`;
  //     navigationCategories.appendChild(divCat);
  // });
  // navigationCategories.addEventListener('click', e => {
  //     showListSourcesByCategory(e.target.dataset.cateoryId);  
  // });
}; // const showListSourcesByCategory = async (categoryId) => {
//     const sourcesGroup = document.getElementById('sources_group');
//     const url = `https://newsapi.org/v2/sources?category=${categoryId}&apiKey=${KEY}`;
//     const response = await fetchByURL(url);
//     const div = createListSources(response.sources);
//     sourcesGroup.innerHTML = '';
//     sourcesGroup.appendChild(div);
//     div.addEventListener('click', e => {
//         showRecordsBySourceId(e.target.dataset.sourceId);
//     });   
// };
// const showRecordsBySourceId = async (sourceId) => {
//     const newsGroup = document.getElementById('news_group');
//     const url = `https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${KEY}`;
//     const response = await fetchByURL(url);
//     const ul = createListArticles(response.articles);
//     newsGroup.innerHTML = '';
//     newsGroup.appendChild(ul);
// };


createCategoriesNav();

/***/ })

})
//# sourceMappingURL=index.bc35b95220a5ae70af79.hot-update.js.map