webpackHotUpdate_N_E("pages/auth",{

/***/ "./actions/fetch-sessions.ts":
/*!***********************************!*\
  !*** ./actions/fetch-sessions.ts ***!
  \***********************************/
/*! exports provided: getSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSession", function() { return getSession; });
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");



var getSession = /*#__PURE__*/function () {
  var _ref = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(token) {
    var url, response, sessionData;
    return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = token.includes('id_token') ? _config_globals__WEBPACK_IMPORTED_MODULE_2__["AUTH_GOOGLE_CALLBACK"] : _config_globals__WEBPACK_IMPORTED_MODULE_2__["AUTH_FACEBOOK_CALLBACK"];
            token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlOTU1NmFkNDY4MDMxMmMxMTdhZmFlZjI5MjBmNWY5OWE0Yzc5ZmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTE2ODg3NTUyOTc2LTc2dmZtazZsNzZvOHIzY3IxZHVlbzNqcXNyb2w5Mm0xLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTE2ODg3NTUyOTc2LTc2dmZtazZsNzZvOHIzY3IxZHVlbzNqcXNyb2w5Mm0xLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1OTE4NzMzNDM0MzY2Mjc1NjE5IiwiZW1haWwiOiJ5ZXBlemF5bGluMjRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJhYWtNYnN3bjM3dS1VMjQ1QTMtclRnIiwiaWF0IjoxNjE5NDA2NzgzLCJleHAiOjE2MTk0MTAzODN9.QYWQeLOk0YbsbcrQCKjDIMxm5SDOAjLtKMAmJnpgxJx3H2nxvD6kDF0kvIgqj_QkodEbiOS0CkDOC4sfkDQttXShKUBZNhIM1mCilk3mgveWEq4FHZaqAjUfTc2GbW_6QvVDFcE4nt7pX19AOGGsJr3m02GVi5sKdE4du_pBWcsyHtNXXNn2dthkDzMawEFEktdGRnzHU99isjqCdtG2xc9iDHwhT29Bc2QkAOfNEks3eWSkKDT56o1af41-wqNYJn8znmlZvNKYCq9qw5VYcswKQ7dfttOZzKKs8X1l4o_yV73wBCYPZEkNSMTR9cSj47_LIuBcmuNhRYpPhZHwsQ';
            _context.next = 4;
            return fetch(url + "/" + token);

          case 4:
            response = _context.sent;
            _context.next = 7;
            return response.json();

          case 7:
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

          case 9:
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic2Vzc2lvbkRhdGEiLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxVQUFVO0FBQUEsZ1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxlQURrQixHQUNKRCxLQUFLLENBQUNFLFFBQU4sQ0FBZSxVQUFmLElBQ2hCQyxvRUFEZ0IsR0FFaEJDLHNFQUhvQjtBQUl0QkosaUJBQUssR0FBRyw0NEJBQVI7QUFKc0I7QUFBQSxtQkFRREssS0FBSyxDQUFDSixHQUFHLEdBQUUsR0FBTCxHQUFVRCxLQUFYLENBUko7O0FBQUE7QUFRbEJNLG9CQVJrQjtBQUFBO0FBQUEsbUJBU0VBLFFBQVEsQ0FBQ0MsSUFBVCxFQVRGOztBQUFBO0FBU2xCQyx1QkFUa0I7QUFBQSw2Q0FXakI7QUFDTFIsbUJBQUssRUFBRVEsV0FBVyxDQUFDQyxHQURkO0FBRUxDLGtCQUFJLEVBQUU7QUFDSkMsa0JBQUUsRUFBRUgsV0FBVyxDQUFDRSxJQUFaLENBQWlCQyxFQURqQjtBQUVKQyx3QkFBUSxFQUFFSixXQUFXLENBQUNFLElBQVosQ0FBaUJFLFFBRnZCO0FBR0pDLHFCQUFLLEVBQUVMLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkcsS0FIcEI7QUFJSkMsc0JBQU0sRUFBRU4sV0FBVyxDQUFDRSxJQUFaLENBQWlCSSxNQUFqQixHQUNKTixXQUFXLENBQUNFLElBQVosQ0FBaUJJLE1BQWpCLENBQXdCQyxPQUF4QixDQUFnQ0MsU0FENUIsR0FFSjtBQU5BO0FBRkQsYUFYaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVmpCLFVBQVU7QUFBQTtBQUFBO0FBQUEsR0FBaEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYXV0aC43YzhjNDJlMDc0MDY2MTAxNjkyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVVUSF9GQUNFQk9PS19DQUxMQkFDSywgQVVUSF9HT09HTEVfQ0FMTEJBQ0sgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXNzaW9uID0gYXN5bmMgKHRva2VuOiBzdHJpbmcpOiBQcm9taXNlPElTZXNzaW9uPiA9PiB7XHJcbiAgY29uc3QgdXJsOiBzdHJpbmcgPSB0b2tlbi5pbmNsdWRlcygnaWRfdG9rZW4nKVxyXG4gICAgPyBBVVRIX0dPT0dMRV9DQUxMQkFDS1xyXG4gICAgOiBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLO1xyXG4gICAgdG9rZW4gPSAnZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNkltUmxPVFUxTm1Ga05EWTRNRE14TW1NeE1UZGhabUZsWmpJNU1qQm1OV1k1T1dFMFl6YzVabVFpTENKMGVYQWlPaUpLVjFRaWZRLmV5SnBjM01pT2lKaFkyTnZkVzUwY3k1bmIyOW5iR1V1WTI5dElpd2lZWHB3SWpvaU9URTJPRGczTlRVeU9UYzJMVGMyZG1adGF6WnNOelp2T0hJelkzSXhaSFZsYnpOcWNYTnliMnc1TW0weExtRndjSE11WjI5dloyeGxkWE5sY21OdmJuUmxiblF1WTI5dElpd2lZWFZrSWpvaU9URTJPRGczTlRVeU9UYzJMVGMyZG1adGF6WnNOelp2T0hJelkzSXhaSFZsYnpOcWNYTnliMnc1TW0weExtRndjSE11WjI5dloyeGxkWE5sY21OdmJuUmxiblF1WTI5dElpd2ljM1ZpSWpvaU1URTFPVEU0TnpNek5ETTBNelkyTWpjMU5qRTVJaXdpWlcxaGFXd2lPaUo1WlhCbGVtRjViR2x1TWpSQVoyMWhhV3d1WTI5dElpd2laVzFoYVd4ZmRtVnlhV1pwWldRaU9uUnlkV1VzSW1GMFgyaGhjMmdpT2lKaFlXdE5Zbk4zYmpNM2RTMVZNalExUVRNdGNsUm5JaXdpYVdGMElqb3hOakU1TkRBMk56Z3pMQ0psZUhBaU9qRTJNVGswTVRBek9ETjkuUVlXUWVMT2swWWJzYmNyUUNLakRJTXhtNVNET0FqTHRLTUFtSm5wZ3hKeDNIMm54dkQ2a0RGMGt2SWdxal9Ra29kRWJpT1MwQ2tET0M0c2ZrRFF0dFhTaEtVQlpOaElNMW1DaWxrM21ndmVXRXE0RkhaYXFBalVmVGMyR2JXXzZRdlZERmNFNG50N3BYMTlBT0dHc0pyM20wMkdWaTVzS2RFNGR1X3BCV2NzeUh0TlhYTm4yZHRoa0R6TWF3RUZFa3RkR1JuekhVOTlpc2pxQ2R0RzJ4YzlpREh3aFQyOUJjMlFrQU9mTkVrczNlV1NrS0RUNTZvMWFmNDEtd3FOWUpuOHpubWxadk5LWUNxOXF3NVZZY3N3S1E3ZGZ0dE9aektLczhYMWw0b195Vjczd0JDWVBaRWtOU01UUjljU2o0N19MSXVCY211TmhSWXBQaFpId3NRJ1xyXG5cclxuICAgIFxyXG5cclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArXCIvXCIrIHRva2VuKTtcclxuICBjb25zdCBzZXNzaW9uRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHRva2VuOiBzZXNzaW9uRGF0YS5qd3QsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGlkOiBzZXNzaW9uRGF0YS51c2VyLmlkLFxyXG4gICAgICB1c2VybmFtZTogc2Vzc2lvbkRhdGEudXNlci51c2VybmFtZSxcclxuICAgICAgZW1haWw6IHNlc3Npb25EYXRhLnVzZXIuZW1haWwsXHJcbiAgICAgIGF2YXRhcjogc2Vzc2lvbkRhdGEudXNlci5hdmF0YXJcclxuICAgICAgICA/IHNlc3Npb25EYXRhLnVzZXIuYXZhdGFyLmZvcm1hdHMudGh1bWJuYWlsXHJcbiAgICAgICAgOiBudWxsXHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==