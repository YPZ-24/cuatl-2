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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\dropdowns\\Dropdown.tsx",
    _s = $RefreshSig$();




Dropdown.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
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
  var arrowIcon = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var animate = function animate() {
    arrowIcon.current.classList.toggle('animate-flipHorizontalBottom');
    onClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
      style: {
        color: "black"
      },
      onClick: animate,
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "mr-1",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        ref: arrowIcon,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ChevronDown"], {
          size: "18"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 31
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24udHN4Il0sIm5hbWVzIjpbIkRyb3Bkb3duIiwicHJvcFR5cGVzIiwibGFiZWwiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJkZWZhdWx0UHJvcHMiLCJjbGFzc2VzIiwiY29udGFpbmVyIiwiY2hpbGRyZW4iLCJvbkNsaWNrIiwiYXJyb3dJY29uIiwidXNlUmVmIiwiYW5pbWF0ZSIsImN1cnJlbnQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBQSxRQUFRLENBQUNDLFNBQVQsR0FBcUI7QUFDbkJDLE9BQUssRUFBRUMsaURBQVMsQ0FBQ0M7QUFERSxDQUFyQjtBQUlBSixRQUFRLENBQUNLLFlBQVQsR0FBd0I7QUFDdEJILE9BQUssRUFBRTtBQURlLENBQXhCO0FBSUEsSUFBTUksT0FBTyxHQUFHO0FBQ2RDLFdBQVM7QUFESyxDQUFoQjtBQVVlLFNBQVNQLFFBQVQsT0FBcUQ7QUFBQTs7QUFBQSwyQkFBakNRLFFBQWlDO0FBQUEsTUFBakNBLFFBQWlDLDhCQUF0QixFQUFzQjtBQUFBLE1BQWxCTixLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYTyxPQUFXLFFBQVhBLE9BQVc7QUFDbEUsTUFBTUMsU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNwQkYsYUFBUyxDQUFDRyxPQUFWLENBQWtCQyxTQUFsQixDQUE0QkMsTUFBNUIsQ0FBbUMsOEJBQW5DO0FBQ0FOLFdBQU87QUFDUixHQUhEOztBQUtBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBRyxXQUFLLEVBQUU7QUFDUk8sYUFBSyxFQUFFO0FBREMsT0FBVjtBQUVHLGFBQU8sRUFBRUosT0FGWjtBQUVxQixlQUFTLEVBQUVOLE9BQU8sQ0FBQ0MsU0FGeEM7QUFBQSw4QkFHRTtBQUFNLGlCQUFTLEVBQUMsTUFBaEI7QUFBQSxrQkFBd0JMO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRixlQUlFO0FBQU0sV0FBRyxFQUFFUSxTQUFYO0FBQUEsK0JBQXNCLHFFQUFDLHlEQUFEO0FBQWEsY0FBSSxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBT0dGLFFBUEg7QUFBQSxrQkFERjtBQVdEOztHQW5CdUJSLFE7O0tBQUFBLFE7QUFtQnZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuOGIyMDRmNGI0ZGYzNTczZmZiZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ2hldnJvbkRvd24gfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbkRyb3Bkb3duLnByb3BUeXBlcyA9IHtcclxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZ1xyXG59O1xyXG5cclxuRHJvcGRvd24uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhYmVsOiAnRHJvcGRvd24nXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC1yb3dcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBmb250LWJvbGRcclxuICAgIGl0ZW1zLWNlbnRlclxyXG4gIGAsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bih7IGNoaWxkcmVuID0gJycsIGxhYmVsLCBvbkNsaWNrIH0pIHtcclxuICBjb25zdCBhcnJvd0ljb24gPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICBhcnJvd0ljb24uY3VycmVudC5jbGFzc0xpc3QudG9nZ2xlKCdhbmltYXRlLWZsaXBIb3Jpem9udGFsQm90dG9tJyk7XHJcbiAgICBvbkNsaWNrKCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxhIHN0eWxlPXt7XHJcbiAgICAgICAgY29sb3I6IFwiYmxhY2tcIlxyXG4gICAgICB9fSBvbkNsaWNrPXthbmltYXRlfSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xXCI+e2xhYmVsfTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiByZWY9e2Fycm93SWNvbn0+PENoZXZyb25Eb3duIHNpemU9XCIxOFwiIC8+PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=