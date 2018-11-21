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


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var validateImageSource = function validateImageSource(url) {
  if (!url || url.slice(0, 4) !== 'http') {
    return false;
  }

  return true;
};

var fetchByURL =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(url) {
    var req, result, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = new Request(url);
            result = [];
            _context.prev = 2;
            _context.next = 5;
            return fetch(req);

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
            result = _context.sent;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](2);
            console.log('Fetch Error: ', _context.t0);

          case 14:
            return _context.abrupt("return", result);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[2, 11]]);
  }));

  return function fetchByURL(_x) {
    return _ref.apply(this, arguments);
  };
}();



/***/ })

})
//# sourceMappingURL=index.f56f2c9577bcc41c8c78.hot-update.js.map