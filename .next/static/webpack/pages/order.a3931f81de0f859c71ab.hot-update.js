webpackHotUpdate_N_E("pages/order",{

/***/ "./pages/order.tsx":
/*!*************************!*\
  !*** ./pages/order.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OrderPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/PaymentButton */ "./components/buttons/PaymentButton.js");
/* harmony import */ var _components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/navbars/Omnibar */ "./components/navbars/Omnibar.tsx");
/* harmony import */ var _components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/navbars/Tabbar */ "./components/navbars/Tabbar.tsx");
/* harmony import */ var _components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/tables/OrderResumeTable */ "./components/tables/OrderResumeTable.js");
/* harmony import */ var _components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/tables/OrderTable */ "./components/tables/OrderTable.js");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\order.tsx",
    _s = $RefreshSig$();










var __N_SSP = true;
function OrderPage(_ref) {
  _s();

  var departments = _ref.departments;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      user = _useContext.user,
      useSession = _useContext.useSession;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      order = _useContext2.order,
      removeProduct = _useContext2.removeProduct; //const [order, setOrder] = useState([]);

  /*
  const getOrder = (): Array<IPaymentOrder> => {
    try {
      return JSON.parse(localStorage.getItem('order')) || [];
    } catch (error) { }
      return [];
  };
    useEffect(()=>{
    setOrder(getOrder)
  },[])*/


  useSession();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "h-screen max-w-full",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Cuatl - Bolsa de compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Tu bolsa de compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menuEntries: departments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:bg-bse md:shadow md:m-12 md:p-12 md:rounded-xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "md:font-display md:text-3xl md:mb-12",
        children: "Bolsa de compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          maxHeight: 'calc(100% - 6rem)'
        },
        className: "md:flex md:flex-row md:flex-nowrap",
        children: order.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "md:w-full md:flex md:flex-row md:flex-nowrap md:justify-center md:items-center md:text-center",
          children: ["Parece que a\xFAn no tienes productos en tu bolsa.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 15
          }, this), "\xA1Vamos, agrega algunos!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "md:grid md:grid-cols-4 md:gap-12 md:w-full",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
              order: order,
              removeProduct: removeProduct
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:col-span-1 md:col-start-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
              order: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:col-span-full md:justify-self-end md:mt-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              order: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: _components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_5__["TAB_PAGES"].BAG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this);
}

_s(OrderPage, "eC9U6Jcx28gpk0y6XPIi7lyHu7E=", true);

_c = OrderPage;
;

var _c;

$RefreshReg$(_c, "OrderPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIudHN4Il0sIm5hbWVzIjpbIk9yZGVyUGFnZSIsImRlcGFydG1lbnRzIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXgiLCJ1c2VyIiwidXNlU2Vzc2lvbiIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwicmVtb3ZlUHJvZHVjdCIsIm1heEhlaWdodCIsImxlbmd0aCIsIlRBQl9QQUdFUyIsIkJBRyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFFZSxTQUFTQSxTQUFULE9BQW9DO0FBQUE7O0FBQUEsTUFBZkMsV0FBZSxRQUFmQSxXQUFlOztBQUFBLG9CQUNwQkMsd0RBQVUsQ0FBQ0MsNERBQUQsQ0FEVTtBQUFBLE1BQ3pDQyxJQUR5QyxlQUN6Q0EsSUFEeUM7QUFBQSxNQUNuQ0MsVUFEbUMsZUFDbkNBLFVBRG1DOztBQUFBLHFCQUdoQkgsd0RBQVUsQ0FBQ0ksNkRBQUQsQ0FITTtBQUFBLE1BR3pDQyxLQUh5QyxnQkFHekNBLEtBSHlDO0FBQUEsTUFHbENDLGFBSGtDLGdCQUdsQ0EsYUFIa0MsRUFNakQ7O0FBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUtFSCxZQUFVO0FBRVYsc0JBQ0U7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFlBQUksRUFBQyxhQUFYO0FBQXlCLGVBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFNRSxxRUFBQyxtRUFBRDtBQUFTLGlCQUFXLEVBQUVKO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVFFO0FBQUssZUFBUyxFQUFDLG1EQUFmO0FBQUEsOEJBRUU7QUFBSSxpQkFBUyxFQUFDLHNDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFJRTtBQUNFLGFBQUssRUFBRTtBQUFFUSxtQkFBUyxFQUFFO0FBQWIsU0FEVDtBQUVFLGlCQUFTLEVBQUMsb0NBRlo7QUFBQSxrQkFLSUYsS0FBSyxDQUFDRyxNQUFOLEtBQWlCLENBQWpCLGdCQUNFO0FBQ0UsbUJBQVMsRUFBQywrRkFEWjtBQUFBLHdGQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGdCQVNFO0FBQUssbUJBQVMsRUFBQyw0Q0FBZjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBQyxlQUFmO0FBQUEsbUNBQ0UscUVBQUMscUVBQUQ7QUFBWSxtQkFBSyxFQUFFSCxLQUFuQjtBQUEwQiwyQkFBYSxFQUFFQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUsscUJBQVMsRUFBQyw4QkFBZjtBQUFBLG1DQUNFLHFFQUFDLDJFQUFEO0FBQWtCLG1CQUFLLEVBQUVEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLCtDQUFmO0FBQUEsbUNBQ0UscUVBQUMseUVBQUQ7QUFBZSxtQkFBSyxFQUFFQTtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFURjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFkTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUEyQ0UscUVBQUMsa0VBQUQ7QUFBUSxVQUFJLEVBQUVJLG9FQUFTLENBQUNDO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUEzQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7O0dBeEV1QlosUzs7S0FBQUEsUztBQXdFdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXIuYTM5MzFmODFkZTBmODU5YzcxYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgUGF5bWVudEJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9QYXltZW50QnV0dG9uJztcclxuaW1wb3J0IE9tbmliYXIgZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcnMvT21uaWJhcic7XHJcbmltcG9ydCBUYWJiYXIsIHsgVEFCX1BBR0VTIH0gZnJvbSAnQC9jb21wb25lbnRzL25hdmJhcnMvVGFiYmFyJztcclxuaW1wb3J0IE9yZGVyUmVzdW1lVGFibGUgZnJvbSAnQC9jb21wb25lbnRzL3RhYmxlcy9PcmRlclJlc3VtZVRhYmxlJztcclxuaW1wb3J0IE9yZGVyVGFibGUgZnJvbSAnQC9jb21wb25lbnRzL3RhYmxlcy9PcmRlclRhYmxlJztcclxuaW1wb3J0IEF1dGhDb250ZXggZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgSVBheW1lbnRPcmRlciBmcm9tICdAL21vZGVscy9JUGF5bWVudE9yZGVyJztcclxuaW1wb3J0IE9yZGVyQ29udGV4dCBmcm9tICdAL2NvbnRleHQvT3JkZXJDb250ZXh0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9yZGVyUGFnZSh7IGRlcGFydG1lbnRzIH0pIHtcclxuICBjb25zdCB7IHVzZXIsIHVzZVNlc3Npb24gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleCk7XHJcblxyXG4gIGNvbnN0IHsgb3JkZXIsIHJlbW92ZVByb2R1Y3QgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuICBcclxuICBcclxuICAvL2NvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAvKlxyXG4gIGNvbnN0IGdldE9yZGVyID0gKCk6IEFycmF5PElQYXltZW50T3JkZXI+ID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdvcmRlcicpKSB8fCBbXTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBzZXRPcmRlcihnZXRPcmRlcilcclxuICB9LFtdKSovXHJcblxyXG5cclxuICB1c2VTZXNzaW9uKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIG1heC13LWZ1bGxcIj5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkN1YXRsIC0gQm9sc2EgZGUgY29tcHJhczwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIlR1IGJvbHNhIGRlIGNvbXByYXNcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICA8T21uaWJhciBtZW51RW50cmllcz17ZGVwYXJ0bWVudHN9IC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmJnLWJzZSBtZDpzaGFkb3cgbWQ6bS0xMiBtZDpwLTEyIG1kOnJvdW5kZWQteGxcIj5cclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOmZvbnQtZGlzcGxheSBtZDp0ZXh0LTN4bCBtZDptYi0xMlwiPkJvbHNhIGRlIGNvbXByYXM8L2gxPlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBtYXhIZWlnaHQ6ICdjYWxjKDEwMCUgLSA2cmVtKScgfX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmZsZXggbWQ6ZmxleC1yb3cgbWQ6ZmxleC1ub3dyYXBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgb3JkZXIubGVuZ3RoID09PSAwID9cclxuICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dy1mdWxsIG1kOmZsZXggbWQ6ZmxleC1yb3cgbWQ6ZmxleC1ub3dyYXAgbWQ6anVzdGlmeS1jZW50ZXIgbWQ6aXRlbXMtY2VudGVyIG1kOnRleHQtY2VudGVyXCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBQYXJlY2UgcXVlIGHDum4gbm8gdGllbmVzIHByb2R1Y3RvcyBlbiB0dSBib2xzYS5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICDCoVZhbW9zLCBhZ3JlZ2EgYWxndW5vcyFcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTQgbWQ6Z2FwLTEyIG1kOnctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxPcmRlclRhYmxlIG9yZGVyPXtvcmRlcn0gcmVtb3ZlUHJvZHVjdD17cmVtb3ZlUHJvZHVjdH0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tMSBtZDpjb2wtc3RhcnQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8T3JkZXJSZXN1bWVUYWJsZSBvcmRlcj17b3JkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLWZ1bGwgbWQ6anVzdGlmeS1zZWxmLWVuZCBtZDptdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8UGF5bWVudEJ1dHRvbiBvcmRlcj17b3JkZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8VGFiYmFyIHBhZ2U9e1RBQl9QQUdFUy5CQUd9IC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgY29uc3QgZGVwYXJ0bWVudHMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG5cclxuICByZXR1cm4geyBwcm9wczogeyBkZXBhcnRtZW50cyB9IH07XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9