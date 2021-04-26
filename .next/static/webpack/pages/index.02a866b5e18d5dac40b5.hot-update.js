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
/* harmony import */ var _MyBackdrop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../MyBackdrop */ "./components/MyBackdrop.tsx");





var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\buttons\\PaymentButton.js",
    _this = undefined,
    _s = $RefreshSig$();







var PaymentButton = function PaymentButton() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  function myF() {
    return _myF.apply(this, arguments);
  }

  function _myF() {
    _myF = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
      var ricky;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return fetch('https://rickandmortyapi.com/api/character/2');

            case 2:
              ricky = _context2.sent;
              console.log(ricky);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _myF.apply(this, arguments);
  }

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(open);
              console.log("CLICK");
              setOpen(true);
              myF();
              setOpen(false);
              console.log("E");
              /*
              setOpen(false)*/
              //router.push('/user/address');

            case 6:
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MyBackdrop__WEBPACK_IMPORTED_MODULE_7__["default"], {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      onClick: handleClick,
      variant: "contained",
      color: "secondary",
      fullWidth: true,
      children: "Continuar la compra"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PaymentButton, "ytWOlNORoNjKCJyRctHL6U+Vztg=", false, function () {
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9idXR0b25zL1BheW1lbnRCdXR0b24uanMiXSwibmFtZXMiOlsiUGF5bWVudEJ1dHRvbiIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJteUYiLCJmZXRjaCIsInJpY2t5IiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwicHJvcFR5cGVzIiwib3JkZXIiLCJQcm9wVHlwZXMiLCJhcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQyxLQUFELENBRE47QUFBQSxNQUNuQkMsSUFEbUI7QUFBQSxNQUNiQyxPQURhOztBQUUxQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUYwQixXQUlYQyxHQUpXO0FBQUE7QUFBQTs7QUFBQTtBQUFBLDhRQUkxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUNzQkMsS0FBSyxDQUFDLDZDQUFELENBRDNCOztBQUFBO0FBQ1FDLG1CQURSO0FBRUVDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjs7QUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUowQjtBQUFBO0FBQUE7O0FBUzFCLE1BQU1HLFdBQVc7QUFBQSxrUkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2xCRixxQkFBTyxDQUFDQyxHQUFSLENBQVlSLElBQVo7QUFDQU8scUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVo7QUFDQVAscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDQUcsaUJBQUc7QUFDSEgscUJBQU8sQ0FBQyxLQUFELENBQVA7QUFDQU0scUJBQU8sQ0FBQ0MsR0FBUixDQUFZLEdBQVo7QUFDQTtBQUNKO0FBQ0k7O0FBVGtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVhDLFdBQVc7QUFBQTtBQUFBO0FBQUEsS0FBakI7O0FBWUEsc0JBQ0U7QUFBQSw0QkFDRSxxRUFBQyxtREFBRDtBQUFZLFVBQUksRUFBRVQ7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsd0RBQUQ7QUFBUSxhQUFPLEVBQUVTLFdBQWpCO0FBQThCLGFBQU8sRUFBQyxXQUF0QztBQUFrRCxXQUFLLEVBQUMsV0FBeEQ7QUFBb0UsZUFBUyxNQUE3RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUEsa0JBREY7QUFRRCxDQTdCRDs7R0FBTVgsYTtVQUVXSyxxRDs7O0tBRlhMLGE7QUErQk5BLGFBQWEsQ0FBQ1ksU0FBZCxHQUEwQjtBQUN4QkMsT0FBSyxFQUFFQyxpREFBUyxDQUFDQztBQURPLENBQTFCO0FBSUFmLGFBQWEsV0FBYixHQUF3QjtBQUN0QmEsT0FBSyxFQUFFO0FBRGUsQ0FBeEI7QUFJZWIsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDJhODY2YjVlMThkNWRhYzQwYjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IE15QmFja2Ryb3AgZnJvbSAnLi4vTXlCYWNrZHJvcCdcclxuXHJcbmNvbnN0IFBheW1lbnRCdXR0b24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIG15Rigpe1xyXG4gICAgY29uc3Qgcmlja3kgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yaWNrYW5kbW9ydHlhcGkuY29tL2FwaS9jaGFyYWN0ZXIvMicpXHJcbiAgICBjb25zb2xlLmxvZyhyaWNreSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2cob3BlbilcclxuICAgIGNvbnNvbGUubG9nKFwiQ0xJQ0tcIilcclxuICAgIHNldE9wZW4odHJ1ZSlcclxuICAgIG15RigpXHJcbiAgICBzZXRPcGVuKGZhbHNlKVxyXG4gICAgY29uc29sZS5sb2coXCJFXCIpXHJcbiAgICAvKlxyXG4gICAgc2V0T3BlbihmYWxzZSkqL1xyXG4gICAgLy9yb3V0ZXIucHVzaCgnL3VzZXIvYWRkcmVzcycpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8TXlCYWNrZHJvcCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBmdWxsV2lkdGg+XHJcbiAgICAgICAgQ29udGludWFyIGxhIGNvbXByYVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLnByb3BUeXBlcyA9IHtcclxuICBvcmRlcjogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5QYXltZW50QnV0dG9uLmRlZmF1bHQgPSB7XHJcbiAgb3JkZXI6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXltZW50QnV0dG9uO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9