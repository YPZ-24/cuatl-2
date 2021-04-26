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
            console.log("URL");
            console.log(url);
            _context.next = 5;
            return fetch(url + token);

          case 5:
            response = _context.sent;
            _context.next = 8;
            return response.json();

          case 8:
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

          case 10:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInJlc3BvbnNlIiwianNvbiIsInNlc3Npb25EYXRhIiwiand0IiwidXNlciIsImlkIiwidXNlcm5hbWUiLCJlbWFpbCIsImF2YXRhciIsImZvcm1hdHMiLCJ0aHVtYm5haWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBR08sSUFBTUEsVUFBVTtBQUFBLGdSQUFHLGlCQUFPQyxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNsQkMsZUFEa0IsR0FDSkQsS0FBSyxDQUFDRSxRQUFOLENBQWUsVUFBZixJQUNoQkMsb0VBRGdCLEdBRWhCQyxzRUFIb0I7QUFJdEJDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FELG1CQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWjtBQUxzQjtBQUFBLG1CQU9ETSxLQUFLLENBQUNOLEdBQUcsR0FBR0QsS0FBUCxDQVBKOztBQUFBO0FBT2xCUSxvQkFQa0I7QUFBQTtBQUFBLG1CQVFFQSxRQUFRLENBQUNDLElBQVQsRUFSRjs7QUFBQTtBQVFsQkMsdUJBUmtCO0FBQUEsNkNBVWpCO0FBQ0xWLG1CQUFLLEVBQUVVLFdBQVcsQ0FBQ0MsR0FEZDtBQUVMQyxrQkFBSSxFQUFFO0FBQ0pDLGtCQUFFLEVBQUVILFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkMsRUFEakI7QUFFSkMsd0JBQVEsRUFBRUosV0FBVyxDQUFDRSxJQUFaLENBQWlCRSxRQUZ2QjtBQUdKQyxxQkFBSyxFQUFFTCxXQUFXLENBQUNFLElBQVosQ0FBaUJHLEtBSHBCO0FBSUpDLHNCQUFNLEVBQUVOLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkksTUFBakIsR0FDSk4sV0FBVyxDQUFDRSxJQUFaLENBQWlCSSxNQUFqQixDQUF3QkMsT0FBeEIsQ0FBZ0NDLFNBRDVCLEdBRUo7QUFOQTtBQUZELGFBVmlCOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVZuQixVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNzI5Mzc2ZjlkMWY3NzdmNjA1YzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0ssIEFVVEhfR09PR0xFX0NBTExCQUNLIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2Vzc2lvbiA9IGFzeW5jICh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxJU2Vzc2lvbj4gPT4ge1xyXG4gIGNvbnN0IHVybDogc3RyaW5nID0gdG9rZW4uaW5jbHVkZXMoJ2lkX3Rva2VuJylcclxuICAgID8gQVVUSF9HT09HTEVfQ0FMTEJBQ0tcclxuICAgIDogQVVUSF9GQUNFQk9PS19DQUxMQkFDSztcclxuICAgIGNvbnNvbGUubG9nKFwiVVJMXCIpXHJcbiAgICBjb25zb2xlLmxvZyh1cmwpXHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgdG9rZW4pO1xyXG4gIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHNlc3Npb25EYXRhLmp3dCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgaWQ6IHNlc3Npb25EYXRhLnVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBzZXNzaW9uRGF0YS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcclxuICAgICAgYXZhdGFyOiBzZXNzaW9uRGF0YS51c2VyLmF2YXRhclxyXG4gICAgICAgID8gc2Vzc2lvbkRhdGEudXNlci5hdmF0YXIuZm9ybWF0cy50aHVtYm5haWxcclxuICAgICAgICA6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9