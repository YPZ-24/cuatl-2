webpackHotUpdate_N_E("pages/store/[filter]",{

/***/ "./pages/store/[filter].tsx":
/*!**********************************!*\
  !*** ./pages/store/[filter].tsx ***!
  \**********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilteredProductsPage; });
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






var _jsxFileName = "C:\\Users\\DELL\\Desktop\\Cu\\cuatl-2\\pages\\store\\[filter].tsx",
    _s = $RefreshSig$();







var classes = {
  container: "\n    h-screen\n    max-w-screen\n  ",
  gallery: {
    container: "\n      h-3/4\n      md:h-auto\n      md:overflow-visible\n      overflow-y-auto\n      px-7\n      py-12\n      top-0\n      w-full\n    ",
    loadButton: "\n      flex\n      flex-nowrap\n      flex-row\n      justify-center\n      my-12\n    "
  }
};
var __N_SSP = true;
function FilteredProductsPage(_ref) {
  _s();

  var initialProducts = _ref.initialProducts,
      departments = _ref.departments,
      query = _ref.query;
  var apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useApolloClient"])(initialProducts);

  var _useState = Object(react_index__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    index: 0,
    data: initialProducts,
    previousData: initialProducts
  }),
      _useState2 = Object(C_Users_DELL_Desktop_Cu_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

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
                limit: _config_globals__WEBPACK_IMPORTED_MODULE_8__["PAGE_LIMIT"],
                query: query
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
      lineNumber: 60,
      columnNumber: 7
    }, this), page.previousData.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fetcher: getNewPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }, this) : null]
  }, void 0, true);
}

_s(FilteredProductsPage, "hDytRZP519C4TBCjlnDQL8IVGK8=", false, function () {
  return [_lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__["useApolloClient"]];
});

_c = FilteredProductsPage;
;
;

var _c;

$RefreshReg$(_c, "FilteredProductsPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUvW2ZpbHRlcl0udHN4Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5IiwibG9hZEJ1dHRvbiIsIkZpbHRlcmVkUHJvZHVjdHNQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwiZGVwYXJ0bWVudHMiLCJxdWVyeSIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInVzZVN0YXRlIiwiaW5kZXgiLCJkYXRhIiwicHJldmlvdXNEYXRhIiwicGFnZSIsInNldFBhZ2UiLCJnZXROZXdQYWdlIiwiZ2V0UHJvZHVjdHNQYWdlIiwic3RhcnQiLCJsZW5ndGgiLCJsaW1pdCIsIlBBR0VfTElNSVQiLCJuZXdQYWdlIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBLElBQU1BLE9BQU8sR0FBRztBQUNkQyxXQUFTLHdDQURLO0FBTWRDLFNBQU8sRUFBRTtBQUNQRCxhQUFTLDhJQURGO0FBV1BFLGNBQVU7QUFYSDtBQU5LLENBQWhCOztBQTJCZSxTQUFTQyxvQkFBVCxPQUF1RTtBQUFBOztBQUFBLE1BQXZDQyxlQUF1QyxRQUF2Q0EsZUFBdUM7QUFBQSxNQUF0QkMsV0FBc0IsUUFBdEJBLFdBQXNCO0FBQUEsTUFBVEMsS0FBUyxRQUFUQSxLQUFTO0FBQ3BGLE1BQU1DLFlBQVksR0FBR0MsMEVBQWUsQ0FBQ0osZUFBRCxDQUFwQzs7QUFEb0Ysa0JBRTVESyw0REFBUSxDQUFRO0FBQ3RDQyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLFFBQUksRUFBRVAsZUFGZ0M7QUFHdENRLGdCQUFZLEVBQUVSO0FBSHdCLEdBQVIsQ0FGb0Q7QUFBQTtBQUFBLE1BRTdFUyxJQUY2RTtBQUFBLE1BRXZFQyxPQUZ1RTs7QUFRcEYsTUFBTUMsVUFBVTtBQUFBLDZUQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2lCQywrRUFBZSxDQUMvQ1QsWUFEK0MsRUFDakM7QUFBRVUscUJBQUssRUFBRUosSUFBSSxDQUFDRixJQUFMLENBQVVPLE1BQW5CO0FBQTJCQyxxQkFBSyxFQUFFQywwREFBbEM7QUFBOENkLHFCQUFLLEVBQUxBO0FBQTlDLGVBRGlDLENBRGhDOztBQUFBO0FBQ1hlLHFCQURXO0FBS2pCUCxxQkFBTyxDQUFDO0FBQ05KLHFCQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FBTCxHQUFhLENBRGQ7QUFFTkMsb0JBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFMLENBQVVXLE1BQVYsQ0FBaUJELE9BQWpCLENBRkE7QUFHTlQsNEJBQVksRUFBRVM7QUFIUixlQUFELENBQVA7O0FBTGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZOLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw2RUFBRDtBQUFpQixjQUFRLEVBQUVGLElBQUksQ0FBQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdFLElBQUksQ0FBQ0QsWUFBTCxDQUFrQk0sTUFBbEIsZ0JBQ0MscUVBQUMsMEVBQUQ7QUFDRSxhQUFPLEVBQUVIO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELEdBSUMsSUFOSjtBQUFBLGtCQURGO0FBVUQ7O0dBOUJ1Qlosb0I7VUFDREssa0U7OztLQURDTCxvQjtBQThCdkI7QUFZQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zdG9yZS9bZmlsdGVyXS5lMTExNDQ5OWI2YThmZGM0YWEyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdC9pbmRleCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNQYWdlIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzJztcclxuaW1wb3J0IExvYWRNb3JlQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0xvYWRNb3JlQnV0dG9uJztcclxuaW1wb3J0IFByb2R1Y3RzR2FsbGVyeSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyaWVzL1Byb2R1Y3RzR2FsbGVyeSc7XHJcbmltcG9ydCB7IFBBR0VfTElNSVQgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCwgdXNlQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBJUGFnZSBmcm9tICdAL21vZGVscy9JUGFnZSc7XHJcbmltcG9ydCBJUHJvZHVjdCBmcm9tICdAL21vZGVscy9JUHJvZHVjdCc7XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgaC1zY3JlZW5cclxuICAgIG1heC13LXNjcmVlblxyXG4gIGAsXHJcblxyXG4gIGdhbGxlcnk6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBoLTMvNFxyXG4gICAgICBtZDpoLWF1dG9cclxuICAgICAgbWQ6b3ZlcmZsb3ctdmlzaWJsZVxyXG4gICAgICBvdmVyZmxvdy15LWF1dG9cclxuICAgICAgcHgtN1xyXG4gICAgICBweS0xMlxyXG4gICAgICB0b3AtMFxyXG4gICAgICB3LWZ1bGxcclxuICAgIGAsXHJcbiAgICBsb2FkQnV0dG9uOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgZmxleC1yb3dcclxuICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgbXktMTJcclxuICAgIGBcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWx0ZXJlZFByb2R1Y3RzUGFnZSh7IGluaXRpYWxQcm9kdWN0cywgZGVwYXJ0bWVudHMsIHF1ZXJ5IH0pIHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSB1c2VBcG9sbG9DbGllbnQoaW5pdGlhbFByb2R1Y3RzKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZTxJUGFnZT4oe1xyXG4gICAgaW5kZXg6IDAsXHJcbiAgICBkYXRhOiBpbml0aWFsUHJvZHVjdHMsXHJcbiAgICBwcmV2aW91c0RhdGE6IGluaXRpYWxQcm9kdWN0c1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBnZXROZXdQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UGFnZTogSVByb2R1Y3RbXSA9IGF3YWl0IGdldFByb2R1Y3RzUGFnZShcclxuICAgICAgYXBvbGxvQ2xpZW50LCB7IHN0YXJ0OiBwYWdlLmRhdGEubGVuZ3RoLCBsaW1pdDogUEFHRV9MSU1JVCwgcXVlcnkgfVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQYWdlKHtcclxuICAgICAgaW5kZXg6IHBhZ2UuaW5kZXggKyAxLFxyXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxyXG4gICAgICBwcmV2aW91c0RhdGE6IG5ld1BhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvZHVjdHNHYWxsZXJ5IHByb2R1Y3RzPXtwYWdlLmRhdGF9IC8+XHJcbiAgICAgIHtwYWdlLnByZXZpb3VzRGF0YS5sZW5ndGggPyBcclxuICAgICAgICA8TG9hZE1vcmVCdXR0b25cclxuICAgICAgICAgIGZldGNoZXI9e2dldE5ld1BhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBxdWVyeSB9KSB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IGluaXRpYWxQcm9kdWN0cyA9IGF3YWl0IGdldFByb2R1Y3RzUGFnZShhcG9sbG9DbGllbnQsIHtcclxuICAgIHN0YXJ0OiAwLFxyXG4gICAgbGltaXQ6IFBBR0VfTElNSVQsXHJcbiAgICBxdWVyeVxyXG4gIH0pO1xyXG4gIGNvbnN0IGRlcGFydG1lbnRzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuXHJcbiAgcmV0dXJuIHsgcHJvcHM6IHsgaW5pdGlhbFByb2R1Y3RzLCBkZXBhcnRtZW50cywgcXVlcnkgfSB9O1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9