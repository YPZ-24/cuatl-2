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
                _context.next = 13;
                break;
              }

              console.log("A");
              console.log(router.asPath);
              _context.next = 7;
              return Object(_actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_5__["getSession"])(location.search);

            case 7:
              session = _context.sent;
              console.log("SEs");
              console.log(session);
              router.replace('/');
              sessionStorage.setItem('session', JSON.stringify(session));
              setUser(session.user);

            case 13:
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
    lineNumber: 69,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJhc1BhdGgiLCJnZXRTZXNzaW9uIiwibG9jYXRpb24iLCJzZWFyY2giLCJzZXNzaW9uIiwicmVwbGFjZSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJsb2dvdXQiLCJyZW1vdmVJdGVtIiwicHVzaCIsImdldFNlc3Npb25TdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiX2Vycm9yIiwiZXJyb3IiLCJtZXNzYWdlIiwiZ2V0VG9rZW4iLCJ0b2tlbiIsInVzZVNlc3Npb24iLCJ1c2VFZmZlY3QiLCJpc1VzZXJMb2dnZWRJbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFJQTtBQUNBLElBQU1BLFdBQVcsZ0JBQUdDLDJEQUFhLENBQUMsSUFBRCxDQUFqQztBQUVlRCwwRUFBZjtDQUdBO0FBQ0E7O0FBQ0EsU0FBU0UsWUFBVCxPQUFvQztBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDVkMsc0RBQVEsQ0FBUSxJQUFSLENBREU7QUFBQSxNQUMzQkMsSUFEMkI7QUFBQSxNQUNyQkMsT0FEcUI7O0FBRWxDLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsS0FBSztBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNaQyxxQkFBTyxDQUFDQyxHQUFSLENBQVksTUFBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ0ssS0FBbkI7O0FBRlksb0JBR1IsY0FBY0wsTUFBTSxDQUFDSyxLQUFyQixJQUE4QixrQkFBa0JMLE1BQU0sQ0FBQ0ssS0FIL0M7QUFBQTtBQUFBO0FBQUE7O0FBSVZGLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FELHFCQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBTSxDQUFDTSxNQUFuQjtBQUxVO0FBQUEscUJBTXNCQywwRUFBVSxDQUFDQyxRQUFRLENBQUNDLE1BQVYsQ0FOaEM7O0FBQUE7QUFNSkMscUJBTkk7QUFPVlAscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZTSxPQUFaO0FBQ0FWLG9CQUFNLENBQUNXLE9BQVAsQ0FBZSxHQUFmO0FBQ0FDLDRCQUFjLENBQUNDLE9BQWYsQ0FBdUIsU0FBdkIsRUFBa0NDLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxPQUFmLENBQWxDO0FBQ0FYLHFCQUFPLENBQUNXLE9BQU8sQ0FBQ1osSUFBVCxDQUFQOztBQVhVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUxJLEtBQUs7QUFBQTtBQUFBO0FBQUEsS0FBWDs7QUFlQSxNQUFNYyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFZO0FBQ3pCSixrQkFBYyxDQUFDSyxVQUFmLENBQTBCLFNBQTFCO0FBQ0FsQixXQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0FDLFVBQU0sQ0FBQ2tCLElBQVAsQ0FBWSxHQUFaO0FBQ0QsR0FKRDs7QUFNQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQXVCO0FBQy9DLFFBQUk7QUFDRixhQUFPTCxJQUFJLENBQUNNLEtBQUwsQ0FBV1IsY0FBYyxDQUFDUyxPQUFmLENBQXVCLFNBQXZCLENBQVgsQ0FBUDtBQUNELEtBRkQsQ0FFRSxPQUFPQyxNQUFQLEVBQWU7QUFDZm5CLGFBQU8sQ0FBQ29CLEtBQVIsQ0FBZUQsTUFBRCxDQUF3QkUsT0FBdEM7QUFDQSxhQUFPLElBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBcUI7QUFDcEMsV0FBT04saUJBQWlCLEdBQUdPLEtBQTNCO0FBQ0QsR0FGRCxDQWxDa0MsQ0FzQ2xDO0FBQ0E7OztBQUNBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQVk7QUFBQTs7QUFDN0JDLDJEQUFTLENBQUMsWUFBTTtBQUNkLFVBQU1sQixPQUFpQixHQUFHUyxpQkFBaUIsRUFBM0M7QUFFQXBCLGFBQU8sQ0FBQ1csT0FBRCxhQUFDQSxPQUFELHVCQUFDQSxPQUFPLENBQUVaLElBQVYsQ0FBUDtBQUNELEtBSlEsRUFJTixFQUpNLENBQVQ7QUFLRCxHQU5EOztBQXhDa0MsS0F3QzVCNkIsVUF4QzRCOztBQWdEbEMsTUFBTUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFlO0FBQ3BDLFdBQU9WLGlCQUFpQixLQUFLLElBQUwsR0FBWSxLQUFwQztBQUNELEdBRkQ7O0FBSUEsc0JBQ0UscUVBQUMsV0FBRCxDQUFhLFFBQWI7QUFBc0IsU0FBSyxFQUFFO0FBQzNCckIsVUFBSSxFQUFKQSxJQUQyQjtBQUNyQkksV0FBSyxFQUFMQSxLQURxQjtBQUNkYyxZQUFNLEVBQU5BLE1BRGM7QUFDTlMsY0FBUSxFQUFSQSxRQURNO0FBQ0lJLG9CQUFjLEVBQWRBLGNBREo7QUFDb0JGLGdCQUFVLEVBQVZBO0FBRHBCLEtBQTdCO0FBQUEsY0FHRy9CO0FBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBT0Q7O0lBM0RRRCxZO1VBRVFNLHFEOzs7S0FGUk4sWTtBQTJEUiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmMyNDAzNTVkNDAxOGFjYTM1M2EzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXNlc3Npb25zJztcclxuaW1wb3J0IElTZXNzaW9uIGZyb20gJ0AvbW9kZWxzL0lTZXNzaW9uJztcclxuaW1wb3J0IElVc2VyIGZyb20gJ0AvbW9kZWxzL0lVc2VyJztcclxuXHJcbi8vOiB1c2UgdGhpcyBjb250ZXh0IHdoZXJldmVyIHlvdSB3YW50IHRvIGFjY2VzcyB0aGUgQXV0aFByb3ZpZGVyXHJcbmNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhDb250ZXh0O1xyXG5leHBvcnQgeyBBdXRoUHJvdmlkZXIgfTtcclxuXHJcbi8vOiB1c2UgdGhpcyBjb21wb25lbnQgaW4gdGhlIF9hcHAudHN4IGZpbGUgdG8gc2hhcmUgdGhlIGF1dGhlbnRpY2F0aW9uIHN0YXRlXHJcbi8vOiBnbG9iYWxseVxyXG5mdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8SVVzZXI+KG51bGwpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBjb25zdCBsb2dpbiA9IGFzeW5jICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXF1aVwiKVxyXG4gICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5KVxyXG4gICAgaWYgKCdpZF90b2tlbicgaW4gcm91dGVyLnF1ZXJ5IHx8ICdhY2Nlc3NfdG9rZW4nIGluIHJvdXRlci5xdWVyeSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkFcIilcclxuICAgICAgY29uc29sZS5sb2cocm91dGVyLmFzUGF0aClcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKGxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiU0VzXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXHJcbiAgICAgIHJvdXRlci5yZXBsYWNlKCcvJyk7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3Nlc3Npb24nLCBKU09OLnN0cmluZ2lmeShzZXNzaW9uKSk7XHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbi51c2VyKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBsb2dvdXQgPSAoKTogdm9pZCA9PiB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCdzZXNzaW9uJyk7XHJcbiAgICBzZXRVc2VyKG51bGwpO1xyXG4gICAgcm91dGVyLnB1c2goJy8nKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRTZXNzaW9uU3RvcmFnZSA9ICgpOiBJU2Vzc2lvbiB8IG51bGwgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc2Vzc2lvbicpKTtcclxuICAgIH0gY2F0Y2ggKF9lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKChfZXJyb3IgYXMgU3ludGF4RXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpLnRva2VuO1xyXG4gIH07XHJcblxyXG4gIC8vOiB1c2UgdGhpcyBjdXN0b20gaG9vayB0byBzZXQgdGhlIGxvY2FsIHNlc3Npb24gaW50byB0aGUgZ2xvYmFsIHN0YXRlIGVhY2hcclxuICAvLzogdGltZSBhIHBhZ2UgaXMgcmVmcmVzaGVkOyB1c2UgaXQgb25seSBvbiBwYWdlIGNvbXBvbmVudHNcclxuICBjb25zdCB1c2VTZXNzaW9uID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgc2Vzc2lvbjogSVNlc3Npb24gPSBnZXRTZXNzaW9uU3RvcmFnZSgpO1xyXG5cclxuICAgICAgc2V0VXNlcihzZXNzaW9uPy51c2VyKTtcclxuICAgIH0sIFtdKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBpc1VzZXJMb2dnZWRJbiA9ICgpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBnZXRTZXNzaW9uU3RvcmFnZSgpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tcclxuICAgICAgdXNlciwgbG9naW4sIGxvZ291dCwgZ2V0VG9rZW4sIGlzVXNlckxvZ2dlZEluLCB1c2VTZXNzaW9uXHJcbiAgICB9fT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9