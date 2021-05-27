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

  console.log("B");
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
      lineNumber: 62,
      columnNumber: 7
    }, this), page.previousData.length === _config_globals__WEBPACK_IMPORTED_MODULE_8__["PAGE_LIMIT"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_LoadMoreButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      fetcher: getNewPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3RvcmUvW2ZpbHRlcl0udHN4Il0sIm5hbWVzIjpbImNsYXNzZXMiLCJjb250YWluZXIiLCJnYWxsZXJ5IiwibG9hZEJ1dHRvbiIsIkZpbHRlcmVkUHJvZHVjdHNQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwiZGVwYXJ0bWVudHMiLCJxdWVyeSIsImFwb2xsb0NsaWVudCIsInVzZUFwb2xsb0NsaWVudCIsInVzZVN0YXRlIiwiaW5kZXgiLCJkYXRhIiwicHJldmlvdXNEYXRhIiwicGFnZSIsInNldFBhZ2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZ2V0TmV3UGFnZSIsImdldFByb2R1Y3RzUGFnZSIsInN0YXJ0IiwibGltaXQiLCJQQUdFX0xJTUlUIiwibmV3UGFnZSIsImNvbmNhdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsV0FBUyx3Q0FESztBQU1kQyxTQUFPLEVBQUU7QUFDUEQsYUFBUyw4SUFERjtBQVdQRSxjQUFVO0FBWEg7QUFOSyxDQUFoQjs7QUEyQmUsU0FBU0Msb0JBQVQsT0FBdUU7QUFBQTs7QUFBQSxNQUF2Q0MsZUFBdUMsUUFBdkNBLGVBQXVDO0FBQUEsTUFBdEJDLFdBQXNCLFFBQXRCQSxXQUFzQjtBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUztBQUNwRixNQUFNQyxZQUFZLEdBQUdDLDBFQUFlLENBQUNKLGVBQUQsQ0FBcEM7O0FBRG9GLGtCQUU1REssNERBQVEsQ0FBUTtBQUN0Q0MsU0FBSyxFQUFFLENBRCtCO0FBRXRDQyxRQUFJLEVBQUVQLGVBRmdDO0FBR3RDUSxnQkFBWSxFQUFFUjtBQUh3QixHQUFSLENBRm9EO0FBQUE7QUFBQSxNQUU3RVMsSUFGNkU7QUFBQSxNQUV2RUMsT0FGdUU7O0FBT3BGQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxHQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNELFlBQUwsQ0FBa0JLLE1BQTlCOztBQUVBLE1BQU1DLFVBQVU7QUFBQSw2VEFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNpQkMsK0VBQWUsQ0FDL0NaLFlBRCtDLEVBQ2pDO0FBQUVhLHFCQUFLLEVBQUVQLElBQUksQ0FBQ0YsSUFBTCxDQUFVTSxNQUFuQjtBQUEyQkkscUJBQUssRUFBRUMsMERBQWxDO0FBQThDaEIscUJBQUssRUFBTEE7QUFBOUMsZUFEaUMsQ0FEaEM7O0FBQUE7QUFDWGlCLHFCQURXO0FBS2pCVCxxQkFBTyxDQUFDO0FBQ05KLHFCQUFLLEVBQUVHLElBQUksQ0FBQ0gsS0FBTCxHQUFhLENBRGQ7QUFFTkMsb0JBQUksRUFBRUUsSUFBSSxDQUFDRixJQUFMLENBQVVhLE1BQVYsQ0FBaUJELE9BQWpCLENBRkE7QUFHTlgsNEJBQVksRUFBRVc7QUFIUixlQUFELENBQVA7O0FBTGlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZMLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyw2RUFBRDtBQUFpQixjQUFRLEVBQUVMLElBQUksQ0FBQ0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdFLElBQUksQ0FBQ0QsWUFBTCxDQUFrQkssTUFBbEIsS0FBMkJLLDBEQUEzQixnQkFDQyxxRUFBQywwRUFBRDtBQUNFLGFBQU8sRUFBRUo7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FJQyxJQU5KO0FBQUEsa0JBREY7QUFVRDs7R0FoQ3VCZixvQjtVQUNESyxrRTs7O0tBRENMLG9CO0FBZ0N2QjtBQVlBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3N0b3JlL1tmaWx0ZXJdLmJiODljMzMxZWNlZWM1ZDllZDRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2luZGV4JztcclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0c1BhZ2UgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtcHJvZHVjdHMnO1xyXG5pbXBvcnQgTG9hZE1vcmVCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvTG9hZE1vcmVCdXR0b24nO1xyXG5pbXBvcnQgUHJvZHVjdHNHYWxsZXJ5IGZyb20gJ0AvY29tcG9uZW50cy9nYWxsZXJpZXMvUHJvZHVjdHNHYWxsZXJ5JztcclxuaW1wb3J0IHsgUEFHRV9MSU1JVCB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50LCB1c2VBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IElQYWdlIGZyb20gJ0AvbW9kZWxzL0lQYWdlJztcclxuaW1wb3J0IElQcm9kdWN0IGZyb20gJ0AvbW9kZWxzL0lQcm9kdWN0JztcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBoLXNjcmVlblxyXG4gICAgbWF4LXctc2NyZWVuXHJcbiAgYCxcclxuXHJcbiAgZ2FsbGVyeToge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGgtMy80XHJcbiAgICAgIG1kOmgtYXV0b1xyXG4gICAgICBtZDpvdmVyZmxvdy12aXNpYmxlXHJcbiAgICAgIG92ZXJmbG93LXktYXV0b1xyXG4gICAgICBweC03XHJcbiAgICAgIHB5LTEyXHJcbiAgICAgIHRvcC0wXHJcbiAgICAgIHctZnVsbFxyXG4gICAgYCxcclxuICAgIGxvYWRCdXR0b246IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICBteS0xMlxyXG4gICAgYFxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbHRlcmVkUHJvZHVjdHNQYWdlKHsgaW5pdGlhbFByb2R1Y3RzLCBkZXBhcnRtZW50cywgcXVlcnkgfSkge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IHVzZUFwb2xsb0NsaWVudChpbml0aWFsUHJvZHVjdHMpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlPElQYWdlPih7XHJcbiAgICBpbmRleDogMCxcclxuICAgIGRhdGE6IGluaXRpYWxQcm9kdWN0cyxcclxuICAgIHByZXZpb3VzRGF0YTogaW5pdGlhbFByb2R1Y3RzXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2coXCJCXCIpXHJcbiAgY29uc29sZS5sb2cocGFnZS5wcmV2aW91c0RhdGEubGVuZ3RoKVxyXG5cclxuICBjb25zdCBnZXROZXdQYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3UGFnZTogSVByb2R1Y3RbXSA9IGF3YWl0IGdldFByb2R1Y3RzUGFnZShcclxuICAgICAgYXBvbGxvQ2xpZW50LCB7IHN0YXJ0OiBwYWdlLmRhdGEubGVuZ3RoLCBsaW1pdDogUEFHRV9MSU1JVCwgcXVlcnkgfVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQYWdlKHtcclxuICAgICAgaW5kZXg6IHBhZ2UuaW5kZXggKyAxLFxyXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxyXG4gICAgICBwcmV2aW91c0RhdGE6IG5ld1BhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UHJvZHVjdHNHYWxsZXJ5IHByb2R1Y3RzPXtwYWdlLmRhdGF9IC8+XHJcbiAgICAgIHtwYWdlLnByZXZpb3VzRGF0YS5sZW5ndGg9PT1QQUdFX0xJTUlUID8gXHJcbiAgICAgICAgPExvYWRNb3JlQnV0dG9uXHJcbiAgICAgICAgICBmZXRjaGVyPXtnZXROZXdQYWdlfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDogbnVsbH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKHsgcXVlcnkgfSkge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICBjb25zdCBpbml0aWFsUHJvZHVjdHMgPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoYXBvbGxvQ2xpZW50LCB7XHJcbiAgICBzdGFydDogMCxcclxuICAgIGxpbWl0OiBQQUdFX0xJTUlULFxyXG4gICAgcXVlcnlcclxuICB9KTtcclxuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxQcm9kdWN0cywgZGVwYXJ0bWVudHMsIHF1ZXJ5IH0gfTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==