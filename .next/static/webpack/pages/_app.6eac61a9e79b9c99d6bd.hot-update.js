webpackHotUpdate_N_E("pages/_app",{

/***/ "./context/AuthContext.tsx":
/*!*********************************!*\
  !*** ./context/AuthContext.tsx ***!
  \*********************************/
/*! exports provided: default, AuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/fetch-sessions */ "./actions/fetch-sessions.ts");




var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\context\\AuthContext.tsx",
    _s2 = $RefreshSig$();




//: use this context wherever you want to access the AuthProvider
var AuthContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_4__["createContext"])(null);
/* harmony default export */ __webpack_exports__["default"] = (AuthContext);
 //: use this component in the _app.tsx file to share the authentication state
//: globally

function AuthProvider(_ref) {
  _s2();

  var _s = $RefreshSig$();

  var children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      user = _useState[0],
      setUser = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var login = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var session;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log("Aqui");
              console.log(router.query);

              if (!('id_token' in router.query || 'access_token' in router.query)) {
                _context.next = 12;
                break;
              }

              console.log("A");
              _context.next = 6;
              return Object(_actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_5__["getSession"])(location.search);

            case 6:
              session = _context.sent;
              console.log("SEs");
              console.log(session);
              router.replace('/');
              sessionStorage.setItem('session', JSON.stringify(session));
              setUser(session.user);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function login() {
      return _ref2.apply(this, arguments);
    };
  }();

  var logout = function logout() {
    sessionStorage.removeItem('session');
    setUser(null);
    router.push('/');
  };

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
  }; //: use this custom hook to set the local session into the global state each
  //: time a page is refreshed; use it only on page components


  var useSession = function useSession() {
    _s();

    Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
      var session = getSessionStorage();
      setUser(session === null || session === void 0 ? void 0 : session.user);
    }, []);
  };

  _s(useSession, "OD7bBpZva5O2jO+Puf00hKivP7c=");

  var isUserLoggedIn = function isUserLoggedIn() {
    return getSessionStorage() ? true : false;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthContext.Provider, {
    value: {
      user: user,
      login: login,
      logout: logout,
      getToken: getToken,
      isUserLoggedIn: isUserLoggedIn,
      useSession: useSession
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 68,
    columnNumber: 5
  }, this);
}

_s2(AuthProvider, "zefM1Knqb/9oUSAMqz/jv6nTK4c=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = AuthProvider;
;

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJnZXRTZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXNzaW9uIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFqQztBQUVlRCwwRUFBZjtDQUdBO0FBQ0E7O0FBQ0EsU0FBU0UsWUFBVCxPQUFvQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBUSxJQUFSLENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsS0FBSztBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0ssS0FBbkI7O0FBRlksb0JBR1IsY0FBY0wsTUFBTSxDQUFDSyxLQUFyQixJQUE4QixrQkFBa0JMLE1BQU0sQ0FBQ0ssS0FIL0M7QUFBQTtBQUFBO0FBQUE7O0FBSVZGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBSlU7QUFBQSxxQkFLc0JFLDBFQUFVLENBQUNDLFFBQVEsQ0FBQ0MsTUFBVixDQUxoQzs7QUFBQTtBQUtKQyxxQkFMSTtBQU1WTixxQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVo7QUFDQVQsb0JBQU0sQ0FBQ1UsT0FBUCxDQUFlLEdBQWY7QUFDQUMsNEJBQWMsQ0FBQ0MsT0FBZixDQUF1QixTQUF2QixFQUFrQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLE9BQWYsQ0FBbEM7QUFDQVYscUJBQU8sQ0FBQ1UsT0FBTyxDQUFDWCxJQUFULENBQVA7O0FBVlU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTEksS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYOztBQWNBLE1BQU1hLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQVk7QUFDekJKLGtCQUFjLENBQUNLLFVBQWYsQ0FBMEIsU0FBMUI7QUFDQWpCLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUMsVUFBTSxDQUFDaUIsSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUpEOztBQU1BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBdUI7QUFDL0MsUUFBSTtBQUNGLGFBQU9MLElBQUksQ0FBQ00sS0FBTCxDQUFXUixjQUFjLENBQUNTLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBWCxDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLE1BQVAsRUFBZTtBQUNmbEIsYUFBTyxDQUFDbUIsS0FBUixDQUFlRCxNQUFELENBQXdCRSxPQUF0QztBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFxQjtBQUNwQyxXQUFPTixpQkFBaUIsR0FBR08sS0FBM0I7QUFDRCxHQUZELENBakNrQyxDQXFDbEM7QUFDQTs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUFBOztBQUM3QkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2QsVUFBTWxCLE9BQWlCLEdBQUdTLGlCQUFpQixFQUEzQztBQUVBbkIsYUFBTyxDQUFDVSxPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRVgsSUFBVixDQUFQO0FBQ0QsS0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtELEdBTkQ7O0FBdkNrQyxLQXVDNUI0QixVQXZDNEI7O0FBK0NsQyxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWU7QUFDcEMsV0FBT1YsaUJBQWlCLEtBQUssSUFBTCxHQUFZLEtBQXBDO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDM0JwQixVQUFJLEVBQUpBLElBRDJCO0FBQ3JCSSxXQUFLLEVBQUxBLEtBRHFCO0FBQ2RhLFlBQU0sRUFBTkEsTUFEYztBQUNOUyxjQUFRLEVBQVJBLFFBRE07QUFDSUksb0JBQWMsRUFBZEEsY0FESjtBQUNvQkYsZ0JBQVUsRUFBVkE7QUFEcEIsS0FBN0I7QUFBQSxjQUdHOUI7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7SUExRFFELFk7VUFFUU0scUQ7OztLQUZSTixZO0FBMERSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNmVhYzYxYTllNzliOWM5OWQ2YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnQC9tb2RlbHMvSVVzZXInO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlcmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBBdXRoUHJvdmlkZXJcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiB0aGUgX2FwcC50c3ggZmlsZSB0byBzaGFyZSB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuLy86IGdsb2JhbGx5XHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBcXVpXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQVwiKVxyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24obG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTRXNcIilcclxuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbilcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=