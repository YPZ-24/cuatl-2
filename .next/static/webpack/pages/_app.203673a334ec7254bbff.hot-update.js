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
              console.log(router.pathname);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJwYXRobmFtZSIsImdldFNlc3Npb24iLCJsb2NhdGlvbiIsInNlYXJjaCIsInNlc3Npb24iLCJyZXBsYWNlIiwic2Vzc2lvblN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJwdXNoIiwiZ2V0U2Vzc2lvblN0b3JhZ2UiLCJwYXJzZSIsImdldEl0ZW0iLCJfZXJyb3IiLCJlcnJvciIsIm1lc3NhZ2UiLCJnZXRUb2tlbiIsInRva2VuIiwidXNlU2Vzc2lvbiIsInVzZUVmZmVjdCIsImlzVXNlckxvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUlBO0FBQ0EsSUFBTUEsV0FBVyxnQkFBR0MsMkRBQWEsQ0FBQyxJQUFELENBQWpDO0FBRWVELDBFQUFmO0NBR0E7QUFDQTs7QUFDQSxTQUFTRSxZQUFULE9BQW9DO0FBQUE7O0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGtCQUNWQyxzREFBUSxDQUFRLElBQVIsQ0FERTtBQUFBLE1BQzNCQyxJQUQyQjtBQUFBLE1BQ3JCQyxPQURxQjs7QUFFbEMsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxNQUFNQyxLQUFLO0FBQUEsbVJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1pDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELHFCQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBTSxDQUFDSyxLQUFuQjs7QUFGWSxvQkFHUixjQUFjTCxNQUFNLENBQUNLLEtBQXJCLElBQThCLGtCQUFrQkwsTUFBTSxDQUFDSyxLQUgvQztBQUFBO0FBQUE7QUFBQTs7QUFJVkYscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNNLFFBQW5CO0FBTFU7QUFBQSxxQkFNc0JDLDBFQUFVLENBQUNDLFFBQVEsQ0FBQ0MsTUFBVixDQU5oQzs7QUFBQTtBQU1KQyxxQkFOSTtBQU9WUCxxQkFBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlNLE9BQVo7QUFDQVYsb0JBQU0sQ0FBQ1csT0FBUCxDQUFlLEdBQWY7QUFDQUMsNEJBQWMsQ0FBQ0MsT0FBZixDQUF1QixTQUF2QixFQUFrQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVMLE9BQWYsQ0FBbEM7QUFDQVgscUJBQU8sQ0FBQ1csT0FBTyxDQUFDWixJQUFULENBQVA7O0FBWFU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBTEksS0FBSztBQUFBO0FBQUE7QUFBQSxLQUFYOztBQWVBLE1BQU1jLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQVk7QUFDekJKLGtCQUFjLENBQUNLLFVBQWYsQ0FBMEIsU0FBMUI7QUFDQWxCLFdBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUMsVUFBTSxDQUFDa0IsSUFBUCxDQUFZLEdBQVo7QUFDRCxHQUpEOztBQU1BLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBdUI7QUFDL0MsUUFBSTtBQUNGLGFBQU9MLElBQUksQ0FBQ00sS0FBTCxDQUFXUixjQUFjLENBQUNTLE9BQWYsQ0FBdUIsU0FBdkIsQ0FBWCxDQUFQO0FBQ0QsS0FGRCxDQUVFLE9BQU9DLE1BQVAsRUFBZTtBQUNmbkIsYUFBTyxDQUFDb0IsS0FBUixDQUFlRCxNQUFELENBQXdCRSxPQUF0QztBQUNBLGFBQU8sSUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFxQjtBQUNwQyxXQUFPTixpQkFBaUIsR0FBR08sS0FBM0I7QUFDRCxHQUZELENBbENrQyxDQXNDbEM7QUFDQTs7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBWTtBQUFBOztBQUM3QkMsMkRBQVMsQ0FBQyxZQUFNO0FBQ2QsVUFBTWxCLE9BQWlCLEdBQUdTLGlCQUFpQixFQUEzQztBQUVBcEIsYUFBTyxDQUFDVyxPQUFELGFBQUNBLE9BQUQsdUJBQUNBLE9BQU8sQ0FBRVosSUFBVixDQUFQO0FBQ0QsS0FKUSxFQUlOLEVBSk0sQ0FBVDtBQUtELEdBTkQ7O0FBeENrQyxLQXdDNUI2QixVQXhDNEI7O0FBZ0RsQyxNQUFNRSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQWU7QUFDcEMsV0FBT1YsaUJBQWlCLEtBQUssSUFBTCxHQUFZLEtBQXBDO0FBQ0QsR0FGRDs7QUFJQSxzQkFDRSxxRUFBQyxXQUFELENBQWEsUUFBYjtBQUFzQixTQUFLLEVBQUU7QUFDM0JyQixVQUFJLEVBQUpBLElBRDJCO0FBQ3JCSSxXQUFLLEVBQUxBLEtBRHFCO0FBQ2RjLFlBQU0sRUFBTkEsTUFEYztBQUNOUyxjQUFRLEVBQVJBLFFBRE07QUFDSUksb0JBQWMsRUFBZEEsY0FESjtBQUNvQkYsZ0JBQVUsRUFBVkE7QUFEcEIsS0FBN0I7QUFBQSxjQUdHL0I7QUFISDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRDs7SUEzRFFELFk7VUFFUU0scUQ7OztLQUZSTixZO0FBMkRSIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjAzNjczYTMzNGVjNzI1NGJiZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtc2Vzc2lvbnMnO1xyXG5pbXBvcnQgSVNlc3Npb24gZnJvbSAnQC9tb2RlbHMvSVNlc3Npb24nO1xyXG5pbXBvcnQgSVVzZXIgZnJvbSAnQC9tb2RlbHMvSVVzZXInO1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbnRleHQgd2hlcmV2ZXIgeW91IHdhbnQgdG8gYWNjZXNzIHRoZSBBdXRoUHJvdmlkZXJcclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHQ7XHJcbmV4cG9ydCB7IEF1dGhQcm92aWRlciB9O1xyXG5cclxuLy86IHVzZSB0aGlzIGNvbXBvbmVudCBpbiB0aGUgX2FwcC50c3ggZmlsZSB0byBzaGFyZSB0aGUgYXV0aGVudGljYXRpb24gc3RhdGVcclxuLy86IGdsb2JhbGx5XHJcbmZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxJVXNlcj4obnVsbCk7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGxvZ2luID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBcXVpXCIpXHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkpXHJcbiAgICBpZiAoJ2lkX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkgfHwgJ2FjY2Vzc190b2tlbicgaW4gcm91dGVyLnF1ZXJ5KSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQVwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpXHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihsb2NhdGlvbi5zZWFyY2gpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlNFc1wiKVxyXG4gICAgICBjb25zb2xlLmxvZyhzZXNzaW9uKVxyXG4gICAgICByb3V0ZXIucmVwbGFjZSgnLycpO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzZXNzaW9uJywgSlNPTi5zdHJpbmdpZnkoc2Vzc2lvbikpO1xyXG4gICAgICBzZXRVc2VyKHNlc3Npb24udXNlcik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9nb3V0ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgnc2Vzc2lvbicpO1xyXG4gICAgc2V0VXNlcihudWxsKTtcclxuICAgIHJvdXRlci5wdXNoKCcvJyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0U2Vzc2lvblN0b3JhZ2UgPSAoKTogSVNlc3Npb24gfCBudWxsID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3Nlc3Npb24nKSk7XHJcbiAgICB9IGNhdGNoIChfZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcigoX2Vycm9yIGFzIFN5bnRheEVycm9yKS5tZXNzYWdlKTtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKS50b2tlbjtcclxuICB9O1xyXG5cclxuICAvLzogdXNlIHRoaXMgY3VzdG9tIGhvb2sgdG8gc2V0IHRoZSBsb2NhbCBzZXNzaW9uIGludG8gdGhlIGdsb2JhbCBzdGF0ZSBlYWNoXHJcbiAgLy86IHRpbWUgYSBwYWdlIGlzIHJlZnJlc2hlZDsgdXNlIGl0IG9ubHkgb24gcGFnZSBjb21wb25lbnRzXHJcbiAgY29uc3QgdXNlU2Vzc2lvbiA9ICgpOiB2b2lkID0+IHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gZ2V0U2Vzc2lvblN0b3JhZ2UoKTtcclxuXHJcbiAgICAgIHNldFVzZXIoc2Vzc2lvbj8udXNlcik7XHJcbiAgICB9LCBbXSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaXNVc2VyTG9nZ2VkSW4gPSAoKTogYm9vbGVhbiA9PiB7XHJcbiAgICByZXR1cm4gZ2V0U2Vzc2lvblN0b3JhZ2UoKSA/IHRydWUgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgIHVzZXIsIGxvZ2luLCBsb2dvdXQsIGdldFRva2VuLCBpc1VzZXJMb2dnZWRJbiwgdXNlU2Vzc2lvblxyXG4gICAgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==