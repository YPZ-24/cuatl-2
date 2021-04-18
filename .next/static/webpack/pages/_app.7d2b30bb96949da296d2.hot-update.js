webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/dropdowns/Dropdown.tsx":
/*!*******************************************!*\
  !*** ./components/dropdowns/Dropdown.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropdown; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\dropdowns\\Dropdown.tsx",
    _s = $RefreshSig$();





Dropdown.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
Dropdown.defaultProps = {
  label: 'Dropdown'
};
var classes = {
  container: "\n    flex\n    flex-row\n    flex-nowrap\n    font-bold\n    items-center\n  "
};
function Dropdown(_ref) {
  _s();

  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? '' : _ref$children,
      label = _ref.label,
      onClick = _ref.onClick;
  var arrowIcon = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var animate = function animate() {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      onClick: animate,
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
        variant: "h6",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        ref: arrowIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_4__["ChevronDown"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 31
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), children]
  }, void 0, true);
}

_s(Dropdown, "Yfa4VChNkGtFgqeoLHPPVrTvj4k=");

_c = Dropdown;
;

var _c;

$RefreshReg$(_c, "Dropdown");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcFR5cGVzIiwibGFiZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiYXJyb3dJY29uIiwidXNlUmVmIiwiYW5pbWF0ZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxTQUFULEdBQXFCO0FBQ25CQyxPQUFLLEVBQUVDLGlEQUFTLENBQUNDO0FBREUsQ0FBckI7QUFJQUosUUFBUSxDQUFDSyxZQUFULEdBQXdCO0FBQ3RCSCxPQUFLLEVBQUU7QUFEZSxDQUF4QjtBQUlBLElBQU1JLE9BQU8sR0FBRztBQUNkQyxXQUFTO0FBREssQ0FBaEI7QUFVZSxTQUFTUCxRQUFULE9BQXFEO0FBQUE7O0FBQUEsMkJBQWpDUSxRQUFpQztBQUFBLE1BQWpDQSxRQUFpQyw4QkFBdEIsRUFBc0I7QUFBQSxNQUFsQk4sS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWE8sT0FBVyxRQUFYQSxPQUFXO0FBQ2xFLE1BQU1DLFNBQVMsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQXhCOztBQUVBLE1BQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDcEJGLGFBQVMsQ0FBQ0csT0FBVixDQUFrQkMsU0FBbEIsQ0FBNEJDLE1BQTVCLENBQW1DLDhCQUFuQztBQUNBTixXQUFPO0FBQ1IsR0FIRDs7QUFLQSxzQkFDRTtBQUFBLDRCQUNFO0FBQUcsYUFBTyxFQUFFRyxPQUFaO0FBQXFCLGVBQVMsRUFBRU4sT0FBTyxDQUFDQyxTQUF4QztBQUFBLDhCQUNFLHFFQUFDLDREQUFEO0FBQVksZUFBTyxFQUFDLElBQXBCO0FBQUEsa0JBQTBCTDtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFNLFdBQUcsRUFBRVEsU0FBWDtBQUFBLCtCQUFzQixxRUFBQyx5REFBRDtBQUFhLGNBQUksRUFBQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUtHRixRQUxIO0FBQUEsa0JBREY7QUFTRDs7R0FqQnVCUixROztLQUFBQSxRO0FBaUJ2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjdkMmIzMGJiOTY5NDlkYTI5NmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENoZXZyb25Eb3duIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5Ecm9wZG93bi5wcm9wVHlwZXMgPSB7XHJcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmdcclxufTtcclxuXHJcbkRyb3Bkb3duLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYWJlbDogJ0Ryb3Bkb3duJ1xyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjb250YWluZXI6IGBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgZm9udC1ib2xkXHJcbiAgICBpdGVtcy1jZW50ZXJcclxuICBgLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oeyBjaGlsZHJlbiA9ICcnLCBsYWJlbCwgb25DbGljayB9KSB7XHJcbiAgY29uc3QgYXJyb3dJY29uID0gdXNlUmVmKG51bGwpO1xyXG5cclxuICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgYXJyb3dJY29uLmN1cnJlbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYW5pbWF0ZS1mbGlwSG9yaXpvbnRhbEJvdHRvbScpO1xyXG4gICAgb25DbGljaygpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8YSBvbkNsaWNrPXthbmltYXRlfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57bGFiZWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxzcGFuIHJlZj17YXJyb3dJY29ufT48Q2hldnJvbkRvd24gc2l6ZT1cIjE4XCIgLz48L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==