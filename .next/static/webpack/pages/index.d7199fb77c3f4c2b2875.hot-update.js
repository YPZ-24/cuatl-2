webpackHotUpdate_N_E("pages/index",{

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
/* harmony import */ var C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/index */ "./node_modules/react/index.js");
/* harmony import */ var react_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_fetch_products__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/actions/fetch-products */ "./actions/fetch-products.ts");
/* harmony import */ var _components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/buttons/LoadMoreButton */ "./components/buttons/LoadMoreButton.tsx");
/* harmony import */ var _components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/galleries/ProductsGallery */ "./components/galleries/ProductsGallery.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");






var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Cu\\cuatl-2\\pages\\index.tsx",
    _s = $RefreshSig$();







var __N_SSP = true;
function HomePage(_ref) {
  _s();

  var initialProducts = _ref.initialProducts;
  var apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useApolloClient"])(initialProducts);

  var _useState = Object(react_index__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  }),
      _useState2 = Object(C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  console.log("A");
  console.log(page.previousData.length);

  var getNewPage = /*#__PURE__*/function () {
    var _ref2 = Object(C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var newPage;
      return C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(_actions_fetch_products__WEBPACK_IMPORTED_MODULE_5__["getProductsPage"])(apolloClient, {
                start: page.data.length,
                limit: _config_globals__WEBPACK_IMPORTED_MODULE_8__["PAGE_LIMIT"]
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
      products: page.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this), page.previousData.length === _config_globals__WEBPACK_IMPORTED_MODULE_8__["PAGE_LIMIT"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fetcher: getNewPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }, this) : null]
  }, void 0, true);
}

_s(HomePage, "hDytRZP519C4TBCjlnDQL8IVGK8=", false, function () {
  return [_lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useApolloClient"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWVQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvQ2xpZW50IiwidXNlU3RhdGUiLCJpbmRleCIsImRhdGEiLCJwcmV2aW91c0RhdGEiLCJwYWdlIiwic2V0UGFnZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJnZXROZXdQYWdlIiwiZ2V0UHJvZHVjdHNQYWdlIiwic3RhcnQiLCJsaW1pdCIsIlBBR0VfTElNSVQiLCJuZXdQYWdlIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLZSxTQUFTQSxRQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBbkJDLGVBQW1CLFFBQW5CQSxlQUFtQjtBQUVwRCxNQUFNQyxZQUFZLEdBQUdDLDBFQUFlLENBQUNGLGVBQUQsQ0FBcEM7O0FBRm9ELGtCQUc1QkcsNERBQVEsQ0FBUTtBQUN0Q0MsU0FBSyxFQUFFLENBRCtCO0FBRXRDQyxRQUFJLEVBQUVMLGVBRmdDO0FBR3RDTSxnQkFBWSxFQUFFTjtBQUh3QixHQUFSLENBSG9CO0FBQUE7QUFBQSxNQUc3Q08sSUFINkM7QUFBQSxNQUd2Q0MsT0FIdUM7O0FBUXBEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNELFlBQUwsQ0FBa0JLLE1BQTlCOztBQUVBLE1BQU1DLFVBQVU7QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNpQkMsK0VBQWUsQ0FDL0NaLFlBRCtDLEVBQ2pDO0FBQUVhLHFCQUFLLEVBQUVQLElBQUksQ0FBQ0YsSUFBTCxDQUFVTSxNQUFuQjtBQUEyQkkscUJBQUssRUFBRUMsMERBQVVBO0FBQTVDLGVBRGlDLENBRGhDOztBQUFBO0FBQ1hDLHFCQURXO0FBS2pCVCxxQkFBTyxDQUFDO0FBQ05KLHFCQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FBTCxHQUFhLENBRGQ7QUFFTkMsb0JBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFMLENBQVVhLE1BQVYsQ0FBaUJELE9BQWpCLENBRkE7QUFHTlgsNEJBQVksRUFBRVc7QUFIUixlQUFELENBQVA7O0FBTGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw2RUFBRDtBQUFpQixjQUFRLEVBQUVMLElBQUksQ0FBQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdFLElBQUksQ0FBQ0QsWUFBTCxDQUFrQkssTUFBbEIsS0FBMkJLLDBEQUEzQixnQkFDQyxxRUFBQywwRUFBRDtBQUNFLGFBQU8sRUFBRUo7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FJQyxJQU5KO0FBQUEsa0JBREY7QUFXRDs7R0FsQ3VCYixRO1VBRURHLGtFOzs7S0FGQ0gsUTtBQWtDdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDcxOTlmYjc3YzNmNGMyYjI4NzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QvaW5kZXgnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0c1BhZ2UgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtcHJvZHVjdHMnO1xyXG5pbXBvcnQgTG9hZE1vcmVCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvTG9hZE1vcmVCdXR0b24nO1xyXG5pbXBvcnQgUHJvZHVjdHNHYWxsZXJ5IGZyb20gJ0AvY29tcG9uZW50cy9nYWxsZXJpZXMvUHJvZHVjdHNHYWxsZXJ5JztcclxuaW1wb3J0IHsgUEFHRV9MSU1JVCB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IElQYWdlIGZyb20gJ0AvbW9kZWxzL0lQYWdlJztcclxuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL0lQcm9kdWN0JztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSAnbmV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGluaXRpYWxQcm9kdWN0cyB9KSB7XHJcblxyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudChpbml0aWFsUHJvZHVjdHMpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPElQYWdlPih7XHJcbiAgICBpbmRleDogMCxcclxuICAgIGRhdGE6IGluaXRpYWxQcm9kdWN0cyxcclxuICAgIHByZXZpb3VzRGF0YTogaW5pdGlhbFByb2R1Y3RzXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJBXCIpXHJcbiAgY29uc29sZS5sb2cocGFnZS5wcmV2aW91c0RhdGEubGVuZ3RoKVxyXG5cclxuICBjb25zdCBnZXROZXdQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UGFnZTogSVByb2R1Y3RbXSA9IGF3YWl0IGdldFByb2R1Y3RzUGFnZShcclxuICAgICAgYXBvbGxvQ2xpZW50LCB7IHN0YXJ0OiBwYWdlLmRhdGEubGVuZ3RoLCBsaW1pdDogUEFHRV9MSU1JVCB9XHJcbiAgICApO1xyXG5cclxuICAgIHNldFBhZ2Uoe1xyXG4gICAgICBpbmRleDogcGFnZS5pbmRleCArIDEsXHJcbiAgICAgIGRhdGE6IHBhZ2UuZGF0YS5jb25jYXQobmV3UGFnZSksXHJcbiAgICAgIHByZXZpb3VzRGF0YTogbmV3UGFnZVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxQcm9kdWN0c0dhbGxlcnkgcHJvZHVjdHM9e3BhZ2UuZGF0YX0gLz5cclxuICAgICAge3BhZ2UucHJldmlvdXNEYXRhLmxlbmd0aD09PVBBR0VfTElNSVQgPyBcclxuICAgICAgICA8TG9hZE1vcmVCdXR0b25cclxuICAgICAgICAgIGZldGNoZXI9e2dldE5ld1BhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgaW5pdGlhbFByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHNQYWdlKGFwb2xsb0NsaWVudCwge1xyXG4gICAgc3RhcnQ6IDAsXHJcbiAgICBsaW1pdDogUEFHRV9MSU1JVFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxQcm9kdWN0cyB9IH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=