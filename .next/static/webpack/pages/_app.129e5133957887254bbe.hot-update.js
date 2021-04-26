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
              return Object(_actions_fetch_sessions__WEBPACK_IMPORTED_MODULE_5__["getSession"])(router.asPath);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9BdXRoQ29udGV4dC50c3giXSwibmFtZXMiOlsiQXV0aENvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9naW4iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJhc1BhdGgiLCJnZXRTZXNzaW9uIiwic2Vzc2lvbiIsInJlcGxhY2UiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsInB1c2giLCJnZXRTZXNzaW9uU3RvcmFnZSIsInBhcnNlIiwiZ2V0SXRlbSIsIl9lcnJvciIsImVycm9yIiwibWVzc2FnZSIsImdldFRva2VuIiwidG9rZW4iLCJ1c2VTZXNzaW9uIiwidXNlRWZmZWN0IiwiaXNVc2VyTG9nZ2VkSW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQSxJQUFNQSxXQUFXLGdCQUFHQywyREFBYSxDQUFDLElBQUQsQ0FBakM7QUFFZUQsMEVBQWY7Q0FHQTtBQUNBOztBQUNBLFNBQVNFLFlBQVQsT0FBb0M7QUFBQTs7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQVEsSUFBUixDQURFO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCOztBQUVsQyxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLE1BQU1DLEtBQUs7QUFBQSxtUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDWkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixNQUFNLENBQUNLLEtBQW5COztBQUZZLG9CQUdSLGNBQWNMLE1BQU0sQ0FBQ0ssS0FBckIsSUFBOEIsa0JBQWtCTCxNQUFNLENBQUNLLEtBSC9DO0FBQUE7QUFBQTtBQUFBOztBQUlWRixxQkFBTyxDQUFDQyxHQUFSLENBQVksR0FBWjtBQUNBRCxxQkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQU0sQ0FBQ00sTUFBbkI7QUFMVTtBQUFBLHFCQU1zQkMsMEVBQVUsQ0FBQ1AsTUFBTSxDQUFDTSxNQUFSLENBTmhDOztBQUFBO0FBTUpFLHFCQU5JO0FBT1ZMLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFaO0FBQ0FELHFCQUFPLENBQUNDLEdBQVIsQ0FBWUksT0FBWjtBQUNBUixvQkFBTSxDQUFDUyxPQUFQLENBQWUsR0FBZjtBQUNBQyw0QkFBYyxDQUFDQyxPQUFmLENBQXVCLFNBQXZCLEVBQWtDQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUwsT0FBZixDQUFsQztBQUNBVCxxQkFBTyxDQUFDUyxPQUFPLENBQUNWLElBQVQsQ0FBUDs7QUFYVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFMSSxLQUFLO0FBQUE7QUFBQTtBQUFBLEtBQVg7O0FBZUEsTUFBTVksTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBWTtBQUN6Qkosa0JBQWMsQ0FBQ0ssVUFBZixDQUEwQixTQUExQjtBQUNBaEIsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBQyxVQUFNLENBQUNnQixJQUFQLENBQVksR0FBWjtBQUNELEdBSkQ7O0FBTUEsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUF1QjtBQUMvQyxRQUFJO0FBQ0YsYUFBT0wsSUFBSSxDQUFDTSxLQUFMLENBQVdSLGNBQWMsQ0FBQ1MsT0FBZixDQUF1QixTQUF2QixDQUFYLENBQVA7QUFDRCxLQUZELENBRUUsT0FBT0MsTUFBUCxFQUFlO0FBQ2ZqQixhQUFPLENBQUNrQixLQUFSLENBQWVELE1BQUQsQ0FBd0JFLE9BQXRDO0FBQ0EsYUFBTyxJQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQXFCO0FBQ3BDLFdBQU9OLGlCQUFpQixHQUFHTyxLQUEzQjtBQUNELEdBRkQsQ0FsQ2tDLENBc0NsQztBQUNBOzs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQUE7O0FBQzdCQywyREFBUyxDQUFDLFlBQU07QUFDZCxVQUFNbEIsT0FBaUIsR0FBR1MsaUJBQWlCLEVBQTNDO0FBRUFsQixhQUFPLENBQUNTLE9BQUQsYUFBQ0EsT0FBRCx1QkFBQ0EsT0FBTyxDQUFFVixJQUFWLENBQVA7QUFDRCxLQUpRLEVBSU4sRUFKTSxDQUFUO0FBS0QsR0FORDs7QUF4Q2tDLEtBd0M1QjJCLFVBeEM0Qjs7QUFnRGxDLE1BQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBZTtBQUNwQyxXQUFPVixpQkFBaUIsS0FBSyxJQUFMLEdBQVksS0FBcEM7QUFDRCxHQUZEOztBQUlBLHNCQUNFLHFFQUFDLFdBQUQsQ0FBYSxRQUFiO0FBQXNCLFNBQUssRUFBRTtBQUMzQm5CLFVBQUksRUFBSkEsSUFEMkI7QUFDckJJLFdBQUssRUFBTEEsS0FEcUI7QUFDZFksWUFBTSxFQUFOQSxNQURjO0FBQ05TLGNBQVEsRUFBUkEsUUFETTtBQUNJSSxvQkFBYyxFQUFkQSxjQURKO0FBQ29CRixnQkFBVSxFQUFWQTtBQURwQixLQUE3QjtBQUFBLGNBR0c3QjtBQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQU9EOztJQTNEUUQsWTtVQUVRTSxxRDs7O0tBRlJOLFk7QUEyRFIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4xMjllNTEzMzk1Nzg4NzI1NGJiZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1zZXNzaW9ucyc7XHJcbmltcG9ydCBJU2Vzc2lvbiBmcm9tICdAL21vZGVscy9JU2Vzc2lvbic7XHJcbmltcG9ydCBJVXNlciBmcm9tICdAL21vZGVscy9JVXNlcic7XHJcblxyXG4vLzogdXNlIHRoaXMgY29udGV4dCB3aGVyZXZlciB5b3Ugd2FudCB0byBhY2Nlc3MgdGhlIEF1dGhQcm92aWRlclxyXG5jb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoQ29udGV4dDtcclxuZXhwb3J0IHsgQXV0aFByb3ZpZGVyIH07XHJcblxyXG4vLzogdXNlIHRoaXMgY29tcG9uZW50IGluIHRoZSBfYXBwLnRzeCBmaWxlIHRvIHNoYXJlIHRoZSBhdXRoZW50aWNhdGlvbiBzdGF0ZVxyXG4vLzogZ2xvYmFsbHlcclxuZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPElVc2VyPihudWxsKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgbG9naW4gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkFxdWlcIilcclxuICAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeSlcclxuICAgIGlmICgnaWRfdG9rZW4nIGluIHJvdXRlci5xdWVyeSB8fCAnYWNjZXNzX3Rva2VuJyBpbiByb3V0ZXIucXVlcnkpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJBXCIpXHJcbiAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5hc1BhdGgpXHJcbiAgICAgIGNvbnN0IHNlc3Npb246IElTZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihyb3V0ZXIuYXNQYXRoKTtcclxuICAgICAgY29uc29sZS5sb2coXCJTRXNcIilcclxuICAgICAgY29uc29sZS5sb2coc2Vzc2lvbilcclxuICAgICAgcm91dGVyLnJlcGxhY2UoJy8nKTtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnc2Vzc2lvbicsIEpTT04uc3RyaW5naWZ5KHNlc3Npb24pKTtcclxuICAgICAgc2V0VXNlcihzZXNzaW9uLnVzZXIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGxvZ291dCA9ICgpOiB2b2lkID0+IHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3Nlc3Npb24nKTtcclxuICAgIHNldFVzZXIobnVsbCk7XHJcbiAgICByb3V0ZXIucHVzaCgnLycpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFNlc3Npb25TdG9yYWdlID0gKCk6IElTZXNzaW9uIHwgbnVsbCA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdzZXNzaW9uJykpO1xyXG4gICAgfSBjYXRjaCAoX2Vycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoKF9lcnJvciBhcyBTeW50YXhFcnJvcikubWVzc2FnZSk7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkudG9rZW47XHJcbiAgfTtcclxuXHJcbiAgLy86IHVzZSB0aGlzIGN1c3RvbSBob29rIHRvIHNldCB0aGUgbG9jYWwgc2Vzc2lvbiBpbnRvIHRoZSBnbG9iYWwgc3RhdGUgZWFjaFxyXG4gIC8vOiB0aW1lIGEgcGFnZSBpcyByZWZyZXNoZWQ7IHVzZSBpdCBvbmx5IG9uIHBhZ2UgY29tcG9uZW50c1xyXG4gIGNvbnN0IHVzZVNlc3Npb24gPSAoKTogdm9pZCA9PiB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBzZXNzaW9uOiBJU2Vzc2lvbiA9IGdldFNlc3Npb25TdG9yYWdlKCk7XHJcblxyXG4gICAgICBzZXRVc2VyKHNlc3Npb24/LnVzZXIpO1xyXG4gICAgfSwgW10pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGlzVXNlckxvZ2dlZEluID0gKCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgcmV0dXJuIGdldFNlc3Npb25TdG9yYWdlKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e1xyXG4gICAgICB1c2VyLCBsb2dpbiwgbG9nb3V0LCBnZXRUb2tlbiwgaXNVc2VyTG9nZ2VkSW4sIHVzZVNlc3Npb25cclxuICAgIH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=