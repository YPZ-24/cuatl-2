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
      removeProduct = _useContext2.removeProduct;

  console.log("ORDEN");
  console.log(order); //const [order, setOrder] = useState([]);

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
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: "Tu bolsa de compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Omnibar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      menuEntries: departments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "md:bg-bse md:shadow md:m-12 md:p-12 md:rounded-xl",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        className: "md:font-display md:text-3xl md:mb-12",
        children: "Bolsa de compras"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
            lineNumber: 64,
            columnNumber: 15
          }, this), "\xA1Vamos, agrega algunos!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
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
              lineNumber: 70,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:col-span-1 md:col-start-4",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_tables_OrderResumeTable__WEBPACK_IMPORTED_MODULE_6__["default"], {
              order: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:col-span-full md:justify-self-end md:mt-12",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_PaymentButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
              order: order
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 19
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 17
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: _components_navbars_Tabbar__WEBPACK_IMPORTED_MODULE_5__["TAB_PAGES"].BAG
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIudHN4Il0sIm5hbWVzIjpbIk9yZGVyUGFnZSIsImRlcGFydG1lbnRzIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXgiLCJ1c2VyIiwidXNlU2Vzc2lvbiIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwicmVtb3ZlUHJvZHVjdCIsImNvbnNvbGUiLCJsb2ciLCJtYXhIZWlnaHQiLCJsZW5ndGgiLCJUQUJfUEFHRVMiLCJCQUciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7O0FBRWUsU0FBU0EsU0FBVCxPQUFvQztBQUFBOztBQUFBLE1BQWZDLFdBQWUsUUFBZkEsV0FBZTs7QUFBQSxvQkFDcEJDLHdEQUFVLENBQUNDLDREQUFELENBRFU7QUFBQSxNQUN6Q0MsSUFEeUMsZUFDekNBLElBRHlDO0FBQUEsTUFDbkNDLFVBRG1DLGVBQ25DQSxVQURtQzs7QUFBQSxxQkFHaEJILHdEQUFVLENBQUNJLDZEQUFELENBSE07QUFBQSxNQUd6Q0MsS0FIeUMsZ0JBR3pDQSxLQUh5QztBQUFBLE1BR2xDQyxhQUhrQyxnQkFHbENBLGFBSGtDOztBQUlqREMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBRCxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUxpRCxDQU9qRDs7QUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFLRUYsWUFBVTtBQUVWLHNCQUNFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBTUUscUVBQUMsbUVBQUQ7QUFBUyxpQkFBVyxFQUFFSjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFRRTtBQUFLLGVBQVMsRUFBQyxtREFBZjtBQUFBLDhCQUVFO0FBQUksaUJBQVMsRUFBQyxzQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBSUU7QUFDRSxhQUFLLEVBQUU7QUFBRVUsbUJBQVMsRUFBRTtBQUFiLFNBRFQ7QUFFRSxpQkFBUyxFQUFDLG9DQUZaO0FBQUEsa0JBS0lKLEtBQUssQ0FBQ0ssTUFBTixLQUFpQixDQUFqQixnQkFDRTtBQUNFLG1CQUFTLEVBQUMsK0ZBRFo7QUFBQSx3RkFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixnQkFTRTtBQUFLLG1CQUFTLEVBQUMsNENBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsZUFBZjtBQUFBLG1DQUNFLHFFQUFDLHFFQUFEO0FBQVksbUJBQUssRUFBRUwsS0FBbkI7QUFBMEIsMkJBQWEsRUFBRUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUMsOEJBQWY7QUFBQSxtQ0FDRSxxRUFBQywyRUFBRDtBQUFrQixtQkFBSyxFQUFFRDtBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRixlQVNFO0FBQUsscUJBQVMsRUFBQywrQ0FBZjtBQUFBLG1DQUNFLHFFQUFDLHlFQUFEO0FBQWUsbUJBQUssRUFBRUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZE47QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGLGVBMkNFLHFFQUFDLGtFQUFEO0FBQVEsVUFBSSxFQUFFTSxvRUFBUyxDQUFDQztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0REOztHQXpFdUJkLFM7O0tBQUFBLFM7QUF5RXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyLjlmYmJmZDZiM2M1MDA5ZGVlYWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IFBheW1lbnRCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvUGF5bWVudEJ1dHRvbic7XHJcbmltcG9ydCBPbW5pYmFyIGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXInO1xyXG5pbXBvcnQgVGFiYmFyLCB7IFRBQl9QQUdFUyB9IGZyb20gJ0AvY29tcG9uZW50cy9uYXZiYXJzL1RhYmJhcic7XHJcbmltcG9ydCBPcmRlclJlc3VtZVRhYmxlIGZyb20gJ0AvY29tcG9uZW50cy90YWJsZXMvT3JkZXJSZXN1bWVUYWJsZSc7XHJcbmltcG9ydCBPcmRlclRhYmxlIGZyb20gJ0AvY29tcG9uZW50cy90YWJsZXMvT3JkZXJUYWJsZSc7XHJcbmltcG9ydCBBdXRoQ29udGV4IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IElQYXltZW50T3JkZXIgZnJvbSAnQC9tb2RlbHMvSVBheW1lbnRPcmRlcic7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlclBhZ2UoeyBkZXBhcnRtZW50cyB9KSB7XHJcbiAgY29uc3QgeyB1c2VyLCB1c2VTZXNzaW9uIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXgpO1xyXG5cclxuICBjb25zdCB7IG9yZGVyLCByZW1vdmVQcm9kdWN0IH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coXCJPUkRFTlwiKVxyXG4gIGNvbnNvbGUubG9nKG9yZGVyKVxyXG4gIFxyXG4gIC8vY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIC8qXHJcbiAgY29uc3QgZ2V0T3JkZXIgPSAoKTogQXJyYXk8SVBheW1lbnRPcmRlcj4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ29yZGVyJykpIHx8IFtdO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgfVxyXG5cclxuICAgIHJldHVybiBbXTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIHNldE9yZGVyKGdldE9yZGVyKVxyXG4gIH0sW10pKi9cclxuXHJcblxyXG4gIHVzZVNlc3Npb24oKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1zY3JlZW4gbWF4LXctZnVsbFwiPlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+Q3VhdGwgLSBCb2xzYSBkZSBjb21wcmFzPC90aXRsZT5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiVHUgYm9sc2EgZGUgY29tcHJhc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgIDxPbW5pYmFyIG1lbnVFbnRyaWVzPXtkZXBhcnRtZW50c30gLz5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6YmctYnNlIG1kOnNoYWRvdyBtZDptLTEyIG1kOnAtMTIgbWQ6cm91bmRlZC14bFwiPlxyXG5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWQ6Zm9udC1kaXNwbGF5IG1kOnRleHQtM3hsIG1kOm1iLTEyXCI+Qm9sc2EgZGUgY29tcHJhczwvaDE+XHJcblxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IG1heEhlaWdodDogJ2NhbGMoMTAwJSAtIDZyZW0pJyB9fVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6ZmxleCBtZDpmbGV4LXJvdyBtZDpmbGV4LW5vd3JhcFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBvcmRlci5sZW5ndGggPT09IDAgP1xyXG4gICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDp3LWZ1bGwgbWQ6ZmxleCBtZDpmbGV4LXJvdyBtZDpmbGV4LW5vd3JhcCBtZDpqdXN0aWZ5LWNlbnRlciBtZDppdGVtcy1jZW50ZXIgbWQ6dGV4dC1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFBhcmVjZSBxdWUgYcO6biBubyB0aWVuZXMgcHJvZHVjdG9zIGVuIHR1IGJvbHNhLlxyXG4gICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgIMKhVmFtb3MsIGFncmVnYSBhbGd1bm9zIVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Z3JpZCBtZDpncmlkLWNvbHMtNCBtZDpnYXAtMTIgbWQ6dy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPE9yZGVyVGFibGUgb3JkZXI9e29yZGVyfSByZW1vdmVQcm9kdWN0PXtyZW1vdmVQcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpjb2wtc3Bhbi0xIG1kOmNvbC1zdGFydC00XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxPcmRlclJlc3VtZVRhYmxlIG9yZGVyPXtvcmRlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6Y29sLXNwYW4tZnVsbCBtZDpqdXN0aWZ5LXNlbGYtZW5kIG1kOm10LTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQYXltZW50QnV0dG9uIG9yZGVyPXtvcmRlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxUYWJiYXIgcGFnZT17VEFCX1BBR0VTLkJBR30gLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wczogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICBjb25zdCBkZXBhcnRtZW50cyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcblxyXG4gIHJldHVybiB7IHByb3BzOiB7IGRlcGFydG1lbnRzIH0gfTtcclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=