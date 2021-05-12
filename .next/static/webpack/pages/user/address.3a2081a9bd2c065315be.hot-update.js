webpackHotUpdate_N_E("pages/user/address",{

/***/ "./utils/myFetch.js":
/*!**************************!*\
  !*** ./utils/myFetch.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");




var getSessionStorage = function getSessionStorage() {
  try {
    return JSON.parse(sessionStorage.getItem('session'));
  } catch (_error) {
    console.error(_error.message);
    return null;
  }
};

var getToken = function getToken() {
  return getSessionStorage().token;
};

function myFetch(_x) {
  return _myFetch.apply(this, arguments);
}

function _myFetch() {
  _myFetch = Object(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var method, path, body, res, data;
    return C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = _ref.method, path = _ref.path, body = _ref.body;
            _context.prev = 1;
            _context.next = 4;
            return fetch(_config_globals__WEBPACK_IMPORTED_MODULE_2__["API_DOMAIN"] + path, {
              method: method,
              body: JSON.stringify(body),
              headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json',
                'Authorization': "Bearer ".concat(getToken())
              }
            });

          case 4:
            res = _context.sent;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0); //e.message = "Fetch failed"

            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));
  return _myFetch.apply(this, arguments);
}

/* harmony default export */ __webpack_exports__["default"] = (myFetch);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbXlGZXRjaC5qcyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uU3RvcmFnZSIsIkpTT04iLCJwYXJzZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsIl9lcnJvciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInRva2VuIiwibXlGZXRjaCIsIm1ldGhvZCIsInBhdGgiLCJib2R5IiwiZmV0Y2giLCJBUElfRE9NQUlOIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsInJlcyIsImpzb24iLCJkYXRhIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QixNQUFJO0FBQ0YsV0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLGNBQWMsQ0FBQ0MsT0FBZixDQUF1QixTQUF2QixDQUFYLENBQVA7QUFDRCxHQUZELENBRUUsT0FBT0MsTUFBUCxFQUFlO0FBQ2ZDLFdBQU8sQ0FBQ0MsS0FBUixDQUFlRixNQUFELENBQVNHLE9BQXZCO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDSixDQVBEOztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFDbEIsU0FBT1QsaUJBQWlCLEdBQUdVLEtBQTNCO0FBQ0gsQ0FGRDs7U0FLZUMsTzs7Ozs7d1RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlCQyxrQkFBekIsUUFBeUJBLE1BQXpCLEVBQWlDQyxJQUFqQyxRQUFpQ0EsSUFBakMsRUFBdUNDLElBQXZDLFFBQXVDQSxJQUF2QztBQUFBO0FBQUE7QUFBQSxtQkFFMEJDLEtBQUssQ0FBQ0MsMERBQVUsR0FBQ0gsSUFBWixFQUFrQjtBQUN6Q0Qsb0JBQU0sRUFBRUEsTUFEaUM7QUFFekNFLGtCQUFJLEVBQUViLElBQUksQ0FBQ2dCLFNBQUwsQ0FBZUgsSUFBZixDQUZtQztBQUd6Q0kscUJBQU8sRUFBRTtBQUNMLGdDQUFnQixrQkFEWDtBQUVMLDBCQUFVLGtCQUZMO0FBR0wsa0RBQTJCVCxRQUFRLEVBQW5DO0FBSEs7QUFIZ0MsYUFBbEIsQ0FGL0I7O0FBQUE7QUFFY1UsZUFGZDtBQUFBO0FBQUEsbUJBWXFCQSxHQUFHLENBQUNDLElBQUosRUFackI7O0FBQUE7QUFZUUMsZ0JBWlI7QUFBQSw2Q0FhZUEsSUFiZjs7QUFBQTtBQUFBO0FBQUE7QUFlUWYsbUJBQU8sQ0FBQ2dCLEdBQVIsY0FmUixDQWdCUTs7QUFoQlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQXFCZVgsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9hZGRyZXNzLjNhMjA4MWE5YmQyYzA2NTMxNWJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcblxyXG5jb25zdCBnZXRTZXNzaW9uU3RvcmFnZSA9ICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRUb2tlbiA9ICgpPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbn07XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbXlGZXRjaCAoe21ldGhvZCwgcGF0aCwgYm9keX0pe1xyXG4gICAgdHJ5e1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKEFQSV9ET01BSU4rcGF0aCwge1xyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvZHkpLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7Z2V0VG9rZW4oKX1gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfWNhdGNoKGUpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGUpXHJcbiAgICAgICAgLy9lLm1lc3NhZ2UgPSBcIkZldGNoIGZhaWxlZFwiXHJcbiAgICAgICAgcmV0dXJuIGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXlGZXRjaDsiXSwic291cmNlUm9vdCI6IiJ9