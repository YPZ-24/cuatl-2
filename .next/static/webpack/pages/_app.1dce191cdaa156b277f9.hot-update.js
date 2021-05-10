webpackHotUpdate_N_E("pages/_app",{

/***/ "./actions/fetch-sessions.ts":
/*!***********************************!*\
  !*** ./actions/fetch-sessions.ts ***!
  \***********************************/
/*! exports provided: getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");



var getSession = /*#__PURE__*/function () {
  var _ref = Object(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
    var url, response, sessionData;
    return C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = token.includes('id_token') ? _config_globals__WEBPACK_IMPORTED_MODULE_2__["AUTH_GOOGLE_CALLBACK"] : '';
            _context.next = 3;
            return fetch(url + token);

          case 3:
            response = _context.sent;
            _context.next = 6;
            return response.json();

          case 6:
            sessionData = _context.sent;
            return _context.abrupt("return", {
              token: sessionData.jwt,
              user: {
                id: sessionData.user.id,
                username: sessionData.user.username,
                email: sessionData.user.email,
                avatar: sessionData.user.avatar ? sessionData.user.avatar.formats.thumbnail : null
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getSession(_x) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ }),

/***/ "./config/globals.ts":
/*!***************************!*\
  !*** ./config/globals.ts ***!
  \***************************/
/*! exports provided: API_DOMAIN, PAGE_LIMIT, AUTH_GOOGLE_CALLBACK, AUTH_GOOGLE_URL, STRIPE_PUBLISHED_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_DOMAIN", function() { return API_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PAGE_LIMIT", function() { return PAGE_LIMIT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_GOOGLE_CALLBACK", function() { return AUTH_GOOGLE_CALLBACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_GOOGLE_URL", function() { return AUTH_GOOGLE_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STRIPE_PUBLISHED_KEY", function() { return STRIPE_PUBLISHED_KEY; });
var API_DOMAIN = "https://cuatl.shop/api";
var PAGE_LIMIT = 12; //const AUTH_FACEBOOK_CALLBACK = `${API_DOMAIN}/auth/facebook/callback`;
//const AUTH_FACEBOOK_URL = `${API_DOMAIN}/connect/facebook`;
//const AUTH_GOOGLE_CALLBACK = `http://cuatl.shop/api/connect/google/callback`;

var AUTH_GOOGLE_URL = "https://cuatl.shop/api/connect/google";
var AUTH_GOOGLE_CALLBACK = "".concat(API_DOMAIN, "/auth/google/callback");
var STRIPE_PUBLISHED_KEY = "pk_test_51Hw15gJ4rvPOyPXnQ6Rjf7X4RxmsSBqvTVy3h3Bfwdo2WddlWAgC64bzfHeQbn4V5jJpPrJ7eHeWrGQMWOlRzW8700mrQLCJpL";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyIsIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnL2dsb2JhbHMudHMiXSwibmFtZXMiOlsiZ2V0U2Vzc2lvbiIsInRva2VuIiwidXJsIiwiaW5jbHVkZXMiLCJBVVRIX0dPT0dMRV9DQUxMQkFDSyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic2Vzc2lvbkRhdGEiLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCIsIkFQSV9ET01BSU4iLCJwcm9jZXNzIiwiUEFHRV9MSU1JVCIsIkFVVEhfR09PR0xFX1VSTCIsIlNUUklQRV9QVUJMSVNIRURfS0VZIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdPLElBQU1BLFVBQVU7QUFBQSx3VEFBRyxpQkFBT0MsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDbEJDLGVBRGtCLEdBQ0pELEtBQUssQ0FBQ0UsUUFBTixDQUFlLFVBQWYsSUFDaEJDLG9FQURnQixHQUVoQixFQUhvQjtBQUFBO0FBQUEsbUJBTUxDLEtBQUssQ0FBQ0gsR0FBRyxHQUFHRCxLQUFQLENBTkE7O0FBQUE7QUFNdEJLLG9CQU5zQjtBQUFBO0FBQUEsbUJBUUVBLFFBQVEsQ0FBQ0MsSUFBVCxFQVJGOztBQUFBO0FBUWxCQyx1QkFSa0I7QUFBQSw2Q0FVakI7QUFDTFAsbUJBQUssRUFBRU8sV0FBVyxDQUFDQyxHQURkO0FBRUxDLGtCQUFJLEVBQUU7QUFDSkMsa0JBQUUsRUFBRUgsV0FBVyxDQUFDRSxJQUFaLENBQWlCQyxFQURqQjtBQUVKQyx3QkFBUSxFQUFFSixXQUFXLENBQUNFLElBQVosQ0FBaUJFLFFBRnZCO0FBR0pDLHFCQUFLLEVBQUVMLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkcsS0FIcEI7QUFJSkMsc0JBQU0sRUFBRU4sV0FBVyxDQUFDRSxJQUFaLENBQWlCSSxNQUFqQixHQUNKTixXQUFXLENBQUNFLElBQVosQ0FBaUJJLE1BQWpCLENBQXdCQyxPQUF4QixDQUFnQ0MsU0FENUIsR0FFSjtBQU5BO0FBRkQsYUFWaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVmhCLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1pQixVQUFVLEdBQUdDLHdCQUFuQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxFQUFuQixDLENBRUE7QUFDQTtBQUNBOztBQUNBLElBQU1DLGVBQWUsMENBQXJCO0FBQ0EsSUFBTWhCLG9CQUFvQixhQUFNYSxVQUFOLDBCQUExQjtBQUdBLElBQU1JLG9CQUFvQixHQUFHSCw2R0FBN0I7QUFFQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjFkY2UxOTFjZGFhMTU2YjI3N2Y5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6ICcnO1xyXG4gICAgbGV0IHJlc3BvbnNlO1xyXG4gIFxyXG4gICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwgKyB0b2tlbik7XHJcbiAgXHJcbiAgY29uc3Qgc2Vzc2lvbkRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB0b2tlbjogc2Vzc2lvbkRhdGEuand0LFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBpZDogc2Vzc2lvbkRhdGEudXNlci5pZCxcclxuICAgICAgdXNlcm5hbWU6IHNlc3Npb25EYXRhLnVzZXIudXNlcm5hbWUsXHJcbiAgICAgIGVtYWlsOiBzZXNzaW9uRGF0YS51c2VyLmVtYWlsLFxyXG4gICAgICBhdmF0YXI6IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyXHJcbiAgICAgICAgPyBzZXNzaW9uRGF0YS51c2VyLmF2YXRhci5mb3JtYXRzLnRodW1ibmFpbFxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcbiIsImNvbnN0IEFQSV9ET01BSU4gPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfRE9NQUlOO1xyXG5jb25zdCBQQUdFX0xJTUlUID0gMTI7XHJcblxyXG4vL2NvbnN0IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2ZhY2Vib29rL2NhbGxiYWNrYDtcclxuLy9jb25zdCBBVVRIX0ZBQ0VCT09LX1VSTCA9IGAke0FQSV9ET01BSU59L2Nvbm5lY3QvZmFjZWJvb2tgO1xyXG4vL2NvbnN0IEFVVEhfR09PR0xFX0NBTExCQUNLID0gYGh0dHA6Ly9jdWF0bC5zaG9wL2FwaS9jb25uZWN0L2dvb2dsZS9jYWxsYmFja2A7XHJcbmNvbnN0IEFVVEhfR09PR0xFX1VSTCA9IGBodHRwczovL2N1YXRsLnNob3AvYXBpL2Nvbm5lY3QvZ29vZ2xlYDtcclxuY29uc3QgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgPSBgJHtBUElfRE9NQUlOfS9hdXRoL2dvb2dsZS9jYWxsYmFja2A7XHJcblxyXG5cclxuY29uc3QgU1RSSVBFX1BVQkxJU0hFRF9LRVkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJJUEVfUFVCTElTSEVEX0tFWTtcclxuXHJcbmV4cG9ydCB7XHJcbiAgQVBJX0RPTUFJTixcclxuICBQQUdFX0xJTUlULFxyXG4gIEFVVEhfR09PR0xFX0NBTExCQUNLLFxyXG4gIEFVVEhfR09PR0xFX1VSTCxcclxuICBTVFJJUEVfUFVCTElTSEVEX0tFWVxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9