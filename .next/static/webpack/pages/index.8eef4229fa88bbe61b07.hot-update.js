webpackHotUpdate_N_E("pages/index",{

/***/ "./components/buttons/PaymentButton.js":
/*!*********************************************!*\
  !*** ./components/buttons/PaymentButton.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");





var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\PaymentButton.js",
    _this = undefined,
    _s = $RefreshSig$();






var PaymentButton = function PaymentButton() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      open = _useState[0],
      setOpen = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: ["H", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Backdrop"], {
      open: open,
      onClick: function onClick() {
        setOpen(!open);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["CircularProgress"], {
        color: "inherit"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: handleClick,
      variant: "contained",
      color: "secondary",
      fullWidth: true,
      children: "Continuar la compra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }, _this)]
  }, void 0, true);
};

_s(PaymentButton, "X/As4KjdAU7jO4Wa4y51Jr2p3GY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = PaymentButton;
PaymentButton.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};
PaymentButton["default"] = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (PaymentButton);

var _c;

$RefreshReg$(_c, "PaymentButton");

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

/***/ }),

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
/* harmony import */ var _components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/galleries/ProductsGallery */ "./components/galleries/ProductsGallery.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/buttons/PaymentButton */ "./components/buttons/PaymentButton.js");






var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\index.tsx",
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_galleries_ProductsGallery__WEBPACK_IMPORTED_MODULE_7__["default"], {
      products: page.data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL1BheW1lbnRCdXR0b24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJQYXltZW50QnV0dG9uIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZUNsaWNrIiwicHJvcFR5cGVzIiwib3JkZXIiLCJQcm9wVHlwZXMiLCJhcnJheSIsIkhvbWVQYWdlIiwiaW5pdGlhbFByb2R1Y3RzIiwiYXBvbGxvQ2xpZW50IiwidXNlQXBvbGxvQ2xpZW50IiwiaW5kZXgiLCJkYXRhIiwicHJldmlvdXNEYXRhIiwicGFnZSIsInNldFBhZ2UiLCJnZXROZXdQYWdlIiwiZ2V0UHJvZHVjdHNQYWdlIiwic3RhcnQiLCJsZW5ndGgiLCJsaW1pdCIsIlBBR0VfTElNSVQiLCJuZXdQYWdlIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLElBQUQsQ0FETjtBQUFBLE1BQ25CQyxJQURtQjtBQUFBLE1BQ2JDLE9BRGE7O0FBRTFCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsTUFBTUMsV0FBVztBQUFBLGtSQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWEEsV0FBVztBQUFBO0FBQUE7QUFBQSxLQUFqQjs7QUFJQSxzQkFDRTtBQUFBLGlDQUVBLHFFQUFDLDBEQUFEO0FBQVUsVUFBSSxFQUFFSixJQUFoQjtBQUFzQixhQUFPLEVBQUUsbUJBQUk7QUFBQ0MsZUFBTyxDQUFDLENBQUNELElBQUYsQ0FBUDtBQUFlLE9BQW5EO0FBQUEsNkJBQ0UscUVBQUMsa0VBQUQ7QUFBa0IsYUFBSyxFQUFDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkEsZUFLQSxxRUFBQyx3REFBRDtBQUFRLGFBQU8sRUFBRUksV0FBakI7QUFBOEIsYUFBTyxFQUFDLFdBQXRDO0FBQWtELFdBQUssRUFBQyxXQUF4RDtBQUFvRSxlQUFTLE1BQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEE7QUFBQSxrQkFERjtBQVdELENBbkJEOztHQUFNTixhO1VBRVdLLHFEOzs7S0FGWEwsYTtBQXFCTkEsYUFBYSxDQUFDTyxTQUFkLEdBQTBCO0FBQ3hCQyxPQUFLLEVBQUVDLGlEQUFTLENBQUNDO0FBRE8sQ0FBMUI7QUFJQVYsYUFBYSxXQUFiLEdBQXdCO0FBQ3RCUSxPQUFLLEVBQUU7QUFEZSxDQUF4QjtBQUllUiw0RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBOztBQUVlLFNBQVNXLFFBQVQsT0FBdUM7QUFBQTs7QUFBQSxNQUFuQkMsZUFBbUIsUUFBbkJBLGVBQW1CO0FBRXBELE1BQU1DLFlBQVksR0FBR0MsMEVBQWUsQ0FBQ0YsZUFBRCxDQUFwQzs7QUFGb0Qsa0JBRzVCWCw0REFBUSxDQUFRO0FBQ3RDYyxTQUFLLEVBQUUsQ0FEK0I7QUFFdENDLFFBQUksRUFBRUosZUFGZ0M7QUFHdENLLGdCQUFZLEVBQUVMO0FBSHdCLEdBQVIsQ0FIb0I7QUFBQTtBQUFBLE1BRzdDTSxJQUg2QztBQUFBLE1BR3ZDQyxPQUh1Qzs7QUFTcEQsTUFBTUMsVUFBVTtBQUFBLG1SQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ2lCQywrRUFBZSxDQUMvQ1IsWUFEK0MsRUFDakM7QUFBRVMscUJBQUssRUFBRUosSUFBSSxDQUFDRixJQUFMLENBQVVPLE1BQW5CO0FBQTJCQyxxQkFBSyxFQUFFQywwREFBVUE7QUFBNUMsZUFEaUMsQ0FEaEM7O0FBQUE7QUFDWEMscUJBRFc7QUFLakJQLHFCQUFPLENBQUM7QUFDTkoscUJBQUssRUFBRUcsSUFBSSxDQUFDSCxLQUFMLEdBQWEsQ0FEZDtBQUVOQyxvQkFBSSxFQUFFRSxJQUFJLENBQUNGLElBQUwsQ0FBVVcsTUFBVixDQUFpQkQsT0FBakIsQ0FGQTtBQUdOVCw0QkFBWSxFQUFFUztBQUhSLGVBQUQsQ0FBUDs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVk4sVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFZQSxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFLHFFQUFDLDZFQUFEO0FBQWlCLGNBQVEsRUFBRUYsSUFBSSxDQUFDRjtBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsRUFHRyxDQUFDRSxJQUFJLENBQUNELFlBQUwsQ0FBa0JNLE1BQW5CLGdCQUNDLHFFQUFDLDBFQUFEO0FBQ0UsYUFBTyxFQUFFSDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxHQUlDLElBUEo7QUFBQSxrQkFERjtBQVlEOztHQWpDdUJULFE7VUFFREcsa0U7OztLQUZDSCxRO0FBaUN2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZWVmNDIyOWZhODhiYmU2MWIwNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHtCdXR0b24sIENpcmN1bGFyUHJvZ3Jlc3MsIEJhY2tkcm9wfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IFBheW1lbnRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAvL3JvdXRlci5wdXNoKCcvdXNlci9hZGRyZXNzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICBIXHJcbiAgICA8QmFja2Ryb3Agb3Blbj17b3Blbn0gb25DbGljaz17KCk9PntzZXRPcGVuKCFvcGVuKX19PlxyXG4gICAgICA8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIi8+XHJcbiAgICA8L0JhY2tkcm9wPlxyXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwic2Vjb25kYXJ5XCIgZnVsbFdpZHRoPlxyXG4gICAgICBDb250aW51YXIgbGEgY29tcHJhXHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLmRlZmF1bHQgPSB7XHJcbiAgb3JkZXI6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50QnV0dG9uO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0L2luZGV4JztcclxuaW1wb3J0IHsgZ2V0UHJvZHVjdHNQYWdlIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLXByb2R1Y3RzJztcclxuaW1wb3J0IExvYWRNb3JlQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL0xvYWRNb3JlQnV0dG9uJztcclxuaW1wb3J0IFByb2R1Y3RzR2FsbGVyeSBmcm9tICdAL2NvbXBvbmVudHMvZ2FsbGVyaWVzL1Byb2R1Y3RzR2FsbGVyeSc7XHJcbmltcG9ydCB7IFBBR0VfTElNSVQgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCwgdXNlQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCBJUGFnZSBmcm9tICdAL21vZGVscy9JUGFnZSc7XHJcbmltcG9ydCBJUHJvZHVjdCBmcm9tICdAL21vZGVscy9JUHJvZHVjdCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgUGF5bWVudEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9QYXltZW50QnV0dG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgaW5pdGlhbFByb2R1Y3RzIH0pIHtcclxuXHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gdXNlQXBvbGxvQ2xpZW50KGluaXRpYWxQcm9kdWN0cyk7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGU8SVBhZ2U+KHtcclxuICAgIGluZGV4OiAwLFxyXG4gICAgZGF0YTogaW5pdGlhbFByb2R1Y3RzLFxyXG4gICAgcHJldmlvdXNEYXRhOiBpbml0aWFsUHJvZHVjdHNcclxuICB9KTtcclxuXHJcbiAgY29uc3QgZ2V0TmV3UGFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1BhZ2U6IElQcm9kdWN0W10gPSBhd2FpdCBnZXRQcm9kdWN0c1BhZ2UoXHJcbiAgICAgIGFwb2xsb0NsaWVudCwgeyBzdGFydDogcGFnZS5kYXRhLmxlbmd0aCwgbGltaXQ6IFBBR0VfTElNSVQgfVxyXG4gICAgKTtcclxuXHJcbiAgICBzZXRQYWdlKHtcclxuICAgICAgaW5kZXg6IHBhZ2UuaW5kZXggKyAxLFxyXG4gICAgICBkYXRhOiBwYWdlLmRhdGEuY29uY2F0KG5ld1BhZ2UpLFxyXG4gICAgICBwcmV2aW91c0RhdGE6IG5ld1BhZ2VcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8UGF5bWVudEJ1dHRvbi8+XHJcbiAgICAgIDxQcm9kdWN0c0dhbGxlcnkgcHJvZHVjdHM9e3BhZ2UuZGF0YX0gLz5cclxuICAgICAgeyFwYWdlLnByZXZpb3VzRGF0YS5sZW5ndGggPyBcclxuICAgICAgICA8TG9hZE1vcmVCdXR0b25cclxuICAgICAgICAgIGZldGNoZXI9e2dldE5ld1BhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgOiBudWxsfVxyXG4gICAgPC8+XHJcbiAgKTtcclxuICBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgaW5pdGlhbFByb2R1Y3RzID0gYXdhaXQgZ2V0UHJvZHVjdHNQYWdlKGFwb2xsb0NsaWVudCwge1xyXG4gICAgc3RhcnQ6IDAsXHJcbiAgICBsaW1pdDogUEFHRV9MSU1JVFxyXG4gIH0pO1xyXG4gIHJldHVybiB7IHByb3BzOiB7IGluaXRpYWxQcm9kdWN0cyB9IH07XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=