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
            token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImRlOTU1NmFkNDY4MDMxMmMxMTdhZmFlZjI5MjBmNWY5OWE0Yzc5ZmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiOTE2ODg3NTUyOTc2LTc2dmZtazZsNzZvOHIzY3IxZHVlbzNqcXNyb2w5Mm0xLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiOTE2ODg3NTUyOTc2LTc2dmZtazZsNzZvOHIzY3IxZHVlbzNqcXNyb2w5Mm0xLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1OTE4NzMzNDM0MzY2Mjc1NjE5IiwiZW1haWwiOiJ5ZXBlemF5bGluMjRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJhYWtNYnN3bjM3dS1VMjQ1QTMtclRnIiwiaWF0IjoxNjE5NDA2NzgzLCJleHAiOjE2MTk0MTAzODN9.QYWQeLOk0YbsbcrQCKjDIMxm5SDOAjLtKMAmJnpgxJx3H2nxvD6kDF0kvIgqj_QkodEbiOS0CkDOC4sfkDQttXShKUBZNhIM1mCilk3mgveWEq4FHZaqAjUfTc2GbW_6QvVDFcE4nt7pX19AOGGsJr3m02GVi5sKdE4du_pBWcsyHtNXXNn2dthkDzMawEFEktdGRnzHU99isjqCdtG2xc9iDHwhT29Bc2QkAOfNEks3eWSkKDT56o1af41-wqNYJn8znmlZvNKYCq9qw5VYcswKQ7dfttOZzKKs8X1l4o_yV73wBCYPZEkNSMTR9cSj47_LIuBcmuNhRYpPhZHwsQ';
            _context.next = 4;
            return fetch(url + token);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9mZXRjaC1zZXNzaW9ucy50cyJdLCJuYW1lcyI6WyJnZXRTZXNzaW9uIiwidG9rZW4iLCJ1cmwiLCJpbmNsdWRlcyIsIkFVVEhfR09PR0xFX0NBTExCQUNLIiwiQVVUSF9GQUNFQk9PS19DQUxMQkFDSyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwic2Vzc2lvbkRhdGEiLCJqd3QiLCJ1c2VyIiwiaWQiLCJ1c2VybmFtZSIsImVtYWlsIiwiYXZhdGFyIiwiZm9ybWF0cyIsInRodW1ibmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFHTyxJQUFNQSxVQUFVO0FBQUEsZ1JBQUcsaUJBQU9DLEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCQyxlQURrQixHQUNKRCxLQUFLLENBQUNFLFFBQU4sQ0FBZSxVQUFmLElBQ2hCQyxvRUFEZ0IsR0FFaEJDLHNFQUhvQjtBQUl0QkosaUJBQUssR0FBRyw0NEJBQVI7QUFKc0I7QUFBQSxtQkFRREssS0FBSyxDQUFDSixHQUFHLEdBQUdELEtBQVAsQ0FSSjs7QUFBQTtBQVFsQk0sb0JBUmtCO0FBQUE7QUFBQSxtQkFTRUEsUUFBUSxDQUFDQyxJQUFULEVBVEY7O0FBQUE7QUFTbEJDLHVCQVRrQjtBQUFBLDZDQVdqQjtBQUNMUixtQkFBSyxFQUFFUSxXQUFXLENBQUNDLEdBRGQ7QUFFTEMsa0JBQUksRUFBRTtBQUNKQyxrQkFBRSxFQUFFSCxXQUFXLENBQUNFLElBQVosQ0FBaUJDLEVBRGpCO0FBRUpDLHdCQUFRLEVBQUVKLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkUsUUFGdkI7QUFHSkMscUJBQUssRUFBRUwsV0FBVyxDQUFDRSxJQUFaLENBQWlCRyxLQUhwQjtBQUlKQyxzQkFBTSxFQUFFTixXQUFXLENBQUNFLElBQVosQ0FBaUJJLE1BQWpCLEdBQ0pOLFdBQVcsQ0FBQ0UsSUFBWixDQUFpQkksTUFBakIsQ0FBd0JDLE9BQXhCLENBQWdDQyxTQUQ1QixHQUVKO0FBTkE7QUFGRCxhQVhpQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWakIsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjc4NmQ5ZThiNzQ5YWQ1MWFhZjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBVVRIX0ZBQ0VCT09LX0NBTExCQUNLLCBBVVRIX0dPT0dMRV9DQUxMQkFDSyB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlc3Npb24gPSBhc3luYyAodG9rZW46IHN0cmluZyk6IFByb21pc2U8SVNlc3Npb24+ID0+IHtcclxuICBjb25zdCB1cmw6IHN0cmluZyA9IHRva2VuLmluY2x1ZGVzKCdpZF90b2tlbicpXHJcbiAgICA/IEFVVEhfR09PR0xFX0NBTExCQUNLXHJcbiAgICA6IEFVVEhfRkFDRUJPT0tfQ0FMTEJBQ0s7XHJcbiAgICB0b2tlbiA9ICdleUpoYkdjaU9pSlNVekkxTmlJc0ltdHBaQ0k2SW1SbE9UVTFObUZrTkRZNE1ETXhNbU14TVRkaFptRmxaakk1TWpCbU5XWTVPV0UwWXpjNVptUWlMQ0owZVhBaU9pSktWMVFpZlEuZXlKcGMzTWlPaUpoWTJOdmRXNTBjeTVuYjI5bmJHVXVZMjl0SWl3aVlYcHdJam9pT1RFMk9EZzNOVFV5T1RjMkxUYzJkbVp0YXpac056WnZPSEl6WTNJeFpIVmxiek5xY1hOeWIydzVNbTB4TG1Gd2NITXVaMjl2WjJ4bGRYTmxjbU52Ym5SbGJuUXVZMjl0SWl3aVlYVmtJam9pT1RFMk9EZzNOVFV5T1RjMkxUYzJkbVp0YXpac056WnZPSEl6WTNJeFpIVmxiek5xY1hOeWIydzVNbTB4TG1Gd2NITXVaMjl2WjJ4bGRYTmxjbU52Ym5SbGJuUXVZMjl0SWl3aWMzVmlJam9pTVRFMU9URTROek16TkRNME16WTJNamMxTmpFNUlpd2laVzFoYVd3aU9pSjVaWEJsZW1GNWJHbHVNalJBWjIxaGFXd3VZMjl0SWl3aVpXMWhhV3hmZG1WeWFXWnBaV1FpT25SeWRXVXNJbUYwWDJoaGMyZ2lPaUpoWVd0TlluTjNiak0zZFMxVk1qUTFRVE10Y2xSbklpd2lhV0YwSWpveE5qRTVOREEyTnpnekxDSmxlSEFpT2pFMk1UazBNVEF6T0ROOS5RWVdRZUxPazBZYnNiY3JRQ0tqRElNeG01U0RPQWpMdEtNQW1KbnBneEp4M0gybnh2RDZrREYwa3ZJZ3FqX1Frb2RFYmlPUzBDa0RPQzRzZmtEUXR0WFNoS1VCWk5oSU0xbUNpbGszbWd2ZVdFcTRGSFphcUFqVWZUYzJHYldfNlF2VkRGY0U0bnQ3cFgxOUFPR0dzSnIzbTAyR1ZpNXNLZEU0ZHVfcEJXY3N5SHROWFhObjJkdGhrRHpNYXdFRkVrdGRHUm56SFU5OWlzanFDZHRHMnhjOWlESHdoVDI5QmMyUWtBT2ZORWtzM2VXU2tLRFQ1Nm8xYWY0MS13cU5ZSm44em5tbFp2TktZQ3E5cXc1Vlljc3dLUTdkZnR0T1p6S0tzOFgxbDRvX3lWNzN3QkNZUFpFa05TTVRSOWNTajQ3X0xJdUJjbXVOaFJZcFBoWkh3c1EnXHJcblxyXG4gICAgXHJcblxyXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsICsgdG9rZW4pO1xyXG4gIGNvbnN0IHNlc3Npb25EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdG9rZW46IHNlc3Npb25EYXRhLmp3dCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgaWQ6IHNlc3Npb25EYXRhLnVzZXIuaWQsXHJcbiAgICAgIHVzZXJuYW1lOiBzZXNzaW9uRGF0YS51c2VyLnVzZXJuYW1lLFxyXG4gICAgICBlbWFpbDogc2Vzc2lvbkRhdGEudXNlci5lbWFpbCxcclxuICAgICAgYXZhdGFyOiBzZXNzaW9uRGF0YS51c2VyLmF2YXRhclxyXG4gICAgICAgID8gc2Vzc2lvbkRhdGEudXNlci5hdmF0YXIuZm9ybWF0cy50aHVtYm5haWxcclxuICAgICAgICA6IG51bGxcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9