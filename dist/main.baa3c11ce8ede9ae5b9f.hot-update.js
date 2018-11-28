webpackHotUpdate("main",{

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "../node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "../node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./js/constants.js");
/* harmony import */ var _viewCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewCreators */ "./js/viewCreators.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers */ "./js/helpers.js");
!(function webpackMissingModule() { var e = new Error("Cannot find module './style/style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }








var createCategoriesNav = function createCategoriesNav() {
  var navigationCategories = document.getElementById('categories_nav');
  _constants__WEBPACK_IMPORTED_MODULE_2__["ALL_CATEGORIES"].forEach(function (cat) {
    var divCat = document.createElement('div');
    divCat.innerHTML = "<span class=\"cat_of_source\" data-cateory-id=\"".concat(cat, "\"> ").concat(cat.toUpperCase(), " </span>");
    navigationCategories.appendChild(divCat);
  });
  navigationCategories.addEventListener('click', function (e) {
    showListSourcesByCategory(e.target.dataset.cateoryId);
  });
};

var showListSourcesByCategory =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(categoryId) {
    var sourcesGroup, url, response, div;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            sourcesGroup = document.getElementById('sources_group');
            url = "https://newsapi.org/v2/sources?category=".concat(categoryId, "&apiKey=").concat(_constants__WEBPACK_IMPORTED_MODULE_2__["KEY"]);
            _context.next = 4;
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["fetchByURL"])(url);

          case 4:
            response = _context.sent;
            div = Object(_viewCreators__WEBPACK_IMPORTED_MODULE_3__["createListSources"])(response.sources);
            sourcesGroup.innerHTML = '';
            sourcesGroup.appendChild(div);
            div.addEventListener('click', function (e) {
              showRecordsBySourceId(e.target.dataset.sourceId);
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function showListSourcesByCategory(_x) {
    return _ref.apply(this, arguments);
  };
}();

var showRecordsBySourceId =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(sourceId) {
    var newsGroup, url, response, ul;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            newsGroup = document.getElementById('news_group');
            url = "https://newsapi.org/v2/top-headlines?sources=".concat(sourceId, "&apiKey=").concat(_constants__WEBPACK_IMPORTED_MODULE_2__["KEY"]);
            _context2.next = 4;
            return Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["fetchByURL"])(url);

          case 4:
            response = _context2.sent;
            ul = Object(_viewCreators__WEBPACK_IMPORTED_MODULE_3__["createListArticles"])(response.articles);
            newsGroup.innerHTML = '';
            newsGroup.appendChild(ul);

          case 8:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function showRecordsBySourceId(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

createCategoriesNav();

/***/ })

})
//# sourceMappingURL=main.baa3c11ce8ede9ae5b9f.hot-update.js.map