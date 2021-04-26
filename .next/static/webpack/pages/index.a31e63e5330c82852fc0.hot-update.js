webpackHotUpdate_N_E("pages/index",{

/***/ "./assets/images/media_not_found.svg":
false,

/***/ "./components/cards/ProductCard.tsx":
false,

/***/ "./components/galleries/ProductsGallery.tsx":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomePage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/index */ "./node_modules/react/index.js");
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_fetch_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/fetch-products */ "./actions/fetch-products.ts");
/* harmony import */ var _components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/buttons/LoadMoreButton */ "./components/buttons/LoadMoreButton.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/buttons/PaymentButton */ "./components/buttons/PaymentButton.js");






var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\index.tsx",
    _s = $RefreshSig$();







var __N_SSP = true;
function HomePage(_ref) {
  _s();

  var initialProducts = _ref.initialProducts;
  var apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useApolloClient"])(initialProducts);

  var _useState = Object(react_index__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  }),
      _useState2 = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var getNewPage = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var newPage;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_5__["getProductsPage"])(apolloClient, {
                start: page.data.length,
                limit: _config_globals__WEBPACK_IMPORTED_MODULE_7__["PAGE_LIMIT"]
              });

            case 2:
              newPage = _context.sent;
              setPage({
                index: page.index + 1,
                data: page.data.concat(newPage),
                previousData: newPage
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getNewPage() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), !page.previousData.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fetcher: getNewPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this) : null]
  }, void 0, true);
}

_s(HomePage, "hDytRZP519C4TBCjlnDQL8IVGK8=", false, function () {
  return [_lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__["useApolloClient"]];
});

_c = HomePage;
;

var _c;

$RefreshReg$(_c, "HomePage");

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

/***/ "./utils/format-price.ts":
false,

/***/ "./utils/get-media-source.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvQ2xpZW50IiwidXNlU3RhdGUiLCJpbmRleCIsImRhdGEiLCJwcmV2aW91c0RhdGEiLCJwYWdlIiwic2V0UGFnZSIsImdldE5ld1BhZ2UiLCJnZXRQcm9kdWN0c1BhZ2UiLCJzdGFydCIsImxlbmd0aCIsImxpbWl0IiwiUEFHRV9MSU1JVCIsIm5ld1BhZ2UiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBOztBQUVlLFNBQVNBLFFBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBRXBELE1BQU1DLFlBQVksR0FBR0MsMEVBQWUsQ0FBQ0YsZUFBRCxDQUFwQzs7QUFGb0Qsa0JBRzVCRyw0REFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLFFBQUksRUFBRUwsZUFGZ0M7QUFHdENNLGdCQUFZLEVBQUVOO0FBSHdCLEdBQVIsQ0FIb0I7QUFBQTtBQUFBLE1BRzdDTyxJQUg2QztBQUFBLE1BR3ZDQyxPQUh1Qzs7QUFTcEQsTUFBTUMsVUFBVTtBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2lCQywrRUFBZSxDQUMvQ1QsWUFEK0MsRUFDakM7QUFBRVUscUJBQUssRUFBRUosSUFBSSxDQUFDRixJQUFMLENBQVVPLE1BQW5CO0FBQTJCQyxxQkFBSyxFQUFFQywwREFBVUE7QUFBNUMsZUFEaUMsQ0FEaEM7O0FBQUE7QUFDWEMscUJBRFc7QUFLakJQLHFCQUFPLENBQUM7QUFDTkoscUJBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFMLEdBQWEsQ0FEZDtBQUVOQyxvQkFBSSxFQUFFRSxJQUFJLENBQUNGLElBQUwsQ0FBVVcsTUFBVixDQUFpQkQsT0FBakIsQ0FGQTtBQUdOVCw0QkFBWSxFQUFFUztBQUhSLGVBQUQsQ0FBUDs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVk4sVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFZQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUdHLENBQUNGLElBQUksQ0FBQ0QsWUFBTCxDQUFrQk0sTUFBbkIsZ0JBQ0MscUVBQUMsMEVBQUQ7QUFDRSxhQUFPLEVBQUVIO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBSUMsSUFQSjtBQUFBLGtCQURGO0FBWUQ7O0dBakN1QlYsUTtVQUVERyxrRTs7O0tBRkNILFE7QUFpQ3ZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmEzMWU2M2U1MzMwYzgyODUyZmMwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2luZGV4JztcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNQYWdlIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzJztcclxuaW1wb3J0IExvYWRNb3JlQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0xvYWRNb3JlQnV0dG9uJztcclxuaW1wb3J0IFByb2R1Y3RzR2FsbGVyeSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyaWVzL1Byb2R1Y3RzR2FsbGVyeSc7XHJcbmltcG9ydCB7IFBBR0VfTElNSVQgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCwgdXNlQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBJUGFnZSBmcm9tICdAL21vZGVscy9JUGFnZSc7XHJcbmltcG9ydCBJUHJvZHVjdCBmcm9tICdAL21vZGVscy9JUHJvZHVjdCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUGF5bWVudEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9QYXltZW50QnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgaW5pdGlhbFByb2R1Y3RzIH0pIHtcclxuXHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KGluaXRpYWxQcm9kdWN0cyk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8SVBhZ2U+KHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgZGF0YTogaW5pdGlhbFByb2R1Y3RzLFxyXG4gICAgcHJldmlvdXNEYXRhOiBpbml0aWFsUHJvZHVjdHNcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0TmV3UGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1BhZ2U6IElQcm9kdWN0W10gPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoXHJcbiAgICAgIGFwb2xsb0NsaWVudCwgeyBzdGFydDogcGFnZS5kYXRhLmxlbmd0aCwgbGltaXQ6IFBBR0VfTElNSVQgfVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQYWdlKHtcclxuICAgICAgaW5kZXg6IHBhZ2UuaW5kZXggKyAxLFxyXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxyXG4gICAgICBwcmV2aW91c0RhdGE6IG5ld1BhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGF5bWVudEJ1dHRvbi8+XHJcbiAgICAgIFxyXG4gICAgICB7IXBhZ2UucHJldmlvdXNEYXRhLmxlbmd0aCA/IFxyXG4gICAgICAgIDxMb2FkTW9yZUJ1dHRvblxyXG4gICAgICAgICAgZmV0Y2hlcj17Z2V0TmV3UGFnZX1cclxuICAgICAgICAvPlxyXG4gICAgICA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICBjb25zdCBpbml0aWFsUHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoYXBvbGxvQ2xpZW50LCB7XHJcbiAgICBzdGFydDogMCxcclxuICAgIGxpbWl0OiBQQUdFX0xJTUlUXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgaW5pdGlhbFByb2R1Y3RzIH0gfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==