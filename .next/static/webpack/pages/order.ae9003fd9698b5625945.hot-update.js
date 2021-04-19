webpackHotUpdate_N_E("pages/order",{

/***/ "./components/buttons/ButtonDelete.js":
/*!********************************************!*\
  !*** ./components/buttons/ButtonDelete.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\ButtonDelete.js",
    _s = $RefreshSig$();






function ButtonDelete(_ref) {
  _s();

  var handlerAccept = _ref.handlerAccept;

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_2__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  function handlerDelete() {
    var _this = this;

    enqueueSnackbar("¿ Seguro que quieres eliminarlo ? ", {
      variant: "error",
      action: function action(key) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: function onClick() {
              closeSnackbar(key);
              handlerAccept();
            },
            children: "SI"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            onClick: function onClick() {
              closeSnackbar(key);
            },
            children: "NO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, _this)]
        }, void 0, true);
      }
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["IconButton"], {
    onClick: handlerDelete,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(ButtonDelete, "cLw1NvfAu36DUMQTemMFXpkNHzk=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_2__["useSnackbar"]];
});

_c = ButtonDelete;
/* harmony default export */ __webpack_exports__["default"] = (ButtonDelete);

var _c;

$RefreshReg$(_c, "ButtonDelete");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL0J1dHRvbkRlbGV0ZS5qcyJdLCJuYW1lcyI6WyJCdXR0b25EZWxldGUiLCJoYW5kbGVyQWNjZXB0IiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwiaGFuZGxlckRlbGV0ZSIsInZhcmlhbnQiLCJhY3Rpb24iLCJrZXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBaEJDLGFBQWdCLFFBQWhCQSxhQUFnQjs7QUFBQSxxQkFFUUMsNkRBQVcsRUFGbkI7QUFBQSxNQUUzQkMsZUFGMkIsZ0JBRTNCQSxlQUYyQjtBQUFBLE1BRVZDLGFBRlUsZ0JBRVZBLGFBRlU7O0FBSW5DLFdBQVNDLGFBQVQsR0FBd0I7QUFBQTs7QUFDcEJGLG1CQUFlLENBQUMsb0NBQUQsRUFBdUM7QUFDbERHLGFBQU8sRUFBRSxPQUR5QztBQUVsREMsWUFBTSxFQUFFLGdCQUFDQyxHQUFEO0FBQUEsNEJBQ0o7QUFBQSxrQ0FDSSxxRUFBQyx3REFBRDtBQUFRLG1CQUFPLEVBQUUsbUJBQUk7QUFDakJKLDJCQUFhLENBQUNJLEdBQUQsQ0FBYjtBQUNBUCwyQkFBYTtBQUNoQixhQUhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBT0kscUVBQUMsd0RBQUQ7QUFBUSxtQkFBTyxFQUFFLG1CQUFNO0FBQUVHLDJCQUFhLENBQUNJLEdBQUQsQ0FBYjtBQUFvQixhQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSjtBQUFBLHdCQURJO0FBQUE7QUFGMEMsS0FBdkMsQ0FBZjtBQWdCSDs7QUFFRCxzQkFDSSxxRUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBRUgsYUFBckI7QUFBQSwyQkFDSSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBS0g7O0dBNUJRTCxZO1VBRXNDRSxxRDs7O0tBRnRDRixZO0FBOEJNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9vcmRlci5hZTkwMDNmZDk2OThiNTYyNTk0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge3VzZVNuYWNrYmFyfSBmcm9tICdub3Rpc3RhY2snXHJcbmltcG9ydCB7IEljb25CdXR0b24sIEJ1dHRvbiB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IERlbGV0ZSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlJztcclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbkRlbGV0ZSh7aGFuZGxlckFjY2VwdH0pIHtcclxuXHJcbiAgICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVyRGVsZXRlKCl7XHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKFwiwr8gU2VndXJvIHF1ZSBxdWllcmVzIGVsaW1pbmFybG8gPyBcIiwge1xyXG4gICAgICAgICAgICB2YXJpYW50OiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgIGFjdGlvbjogKGtleSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlU25hY2tiYXIoa2V5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyQWNjZXB0KClcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU0lcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgY2xvc2VTbmFja2JhcihrZXkpIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBOT1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZXJEZWxldGV9PlxyXG4gICAgICAgICAgICA8RGVsZXRlLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkRlbGV0ZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9