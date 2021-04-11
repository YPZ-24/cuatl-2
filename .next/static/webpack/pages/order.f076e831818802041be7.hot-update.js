webpackHotUpdate_N_E("pages/order",{

/***/ "./components/navbars/Omnibar.tsx":
/*!****************************************!*\
  !*** ./components/navbars/Omnibar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Omnibar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/images/frame.svg */ "./assets/images/frame.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/avatars/CircleAvatar */ "./components/avatars/CircleAvatar.tsx");
/* harmony import */ var _components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/buttons/OutlineButton */ "./components/buttons/OutlineButton.tsx");
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");
/* harmony import */ var _components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/menus/DepartmentsMenu */ "./components/menus/DepartmentsMenu.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Omnibar.tsx",
    _s = $RefreshSig$();












Omnibar.propTypes = {
  menuEntries: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
Omnibar.defaultProps = {
  menuEntries: []
};
var classes = {
  carving: "\n    bg-repeat-x\n    h-8\n    w-full\n  ",
  container: "\n    bg-bse\n    flex\n    flex-col\n    flex-nowrap\n    h-24\n    md:h-28\n    relative\n    shadow\n    w-full\n    z-50\n  ",
  departments: {
    container: "\n      cursor-pointer\n      flex\n      flex-row\n      flex-nowrap\n      items-center\n    ",
    menu: "\n      absolute\n      max-h-1/2\n      w-full\n      z-40\n    "
  },
  linkGroup: {
    bag: {
      container: "\n        hidden\n        md:flex\n        md:flex-row\n        md:flex-nowrap\n        md:items-center\n        md:justify-center\n        md:h-12\n        md:relative\n        md:w-12\n      ",
      itemsCounter: "\n        absolute\n        bg-accent\n        border-2\n        border-bse\n        flex\n        flex-row\n        flex-nowrap\n        font-bold\n        h-5\n        items-center\n        justify-center\n        right-1\n        rounded-full\n        text-bse\n        top-1\n        w-5\n      "
    },
    container: "\n      flex\n      flex-row\n      flex-nowrap\n      items-center\n      justify-end\n      w-1/3\n    ",
    user: {
      container: "\n        hidden\n        md:cursor-pointer\n        md:inline-block\n        md:ml-4\n      "
    }
  },
  logo: {
    container: "\n      flex\n      flex-row\n      flex-nowrap\n      h-12\n      justify-start\n      w-1/3\n    ",
    image: "\n      max-h-full\n      max-w-full\n    "
  },
  navbar: "\n    flex\n    flex-1\n    flex-row\n    flex-nowrap\n    items-center\n    justify-between\n    px-7\n  "
};
var styles = {
  carving: {
    backgroundImage: "url('".concat(_assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_4__["default"], "')")
  },
  itemsCounter: {
    fontSize: '0.75rem'
  },
  tailwind: {
    departmentsMenu: {
      menuContainer: "\n        absolute\n        max-h-1/2\n        overflow-y-scroll\n        top-24\n        w-full\n        z-40\n      "
    }
  }
};
function Omnibar(_ref) {
  _s();

  var menuEntries = _ref.menuEntries;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
      user = _useContext.user;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
      order = _useContext2.order;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isMenuVisible = _useState[0],
      setIsMenuVisible = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.carving,
        style: styles.carving
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: classes.navbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.logo.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: classes.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.departments.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
              label: "Departamentos",
              onClick: function onClick() {
                return setIsMenuVisible(!isMenuVisible);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 172,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classes.linkGroup.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "md:hidden",
            onClick: function onClick() {
              return setIsMenuVisible(!isMenuVisible);
            },
            children: isMenuVisible ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreHorizontal"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["MoreVertical"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: user ? '/order' : '/auth',
            className: classes.linkGroup.bag.container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_3__["ShoppingBag"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 194,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.linkGroup.bag.itemsCounter,
              style: styles.itemsCounter,
              children: order.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 190,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: user ? '/user/profile' : '/auth',
            className: classes.linkGroup.user.container,
            children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_6__["default"], {
              avatar: user.avatar,
              size: "8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 209,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
              label: "Reg\xEDstrate o ingresa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 210,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 7
    }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: styles.tailwind.departmentsMenu.menuContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
        departments: menuEntries
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Omnibar, "YRJ6rMpkrB88szqehzvlyZtRkdg=");

_c = Omnibar;
;

var _c;

$RefreshReg$(_c, "Omnibar");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJjb250YWluZXIiLCJkZXBhcnRtZW50cyIsIm1lbnUiLCJsaW5rR3JvdXAiLCJiYWciLCJpdGVtc0NvdW50ZXIiLCJ1c2VyIiwibG9nbyIsImltYWdlIiwibmF2YmFyIiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY2FydmluZ0ltYWdlIiwiZm9udFNpemUiLCJ0YWlsd2luZCIsImRlcGFydG1lbnRzTWVudSIsIm1lbnVDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJsb2dvSW1hZ2UiLCJsZW5ndGgiLCJhdmF0YXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDO0FBREwsQ0FBcEI7QUFJQUosT0FBTyxDQUFDSyxZQUFSLEdBQXVCO0FBQ3JCSCxhQUFXLEVBQUU7QUFEUSxDQUF2QjtBQUlBLElBQU1JLE9BQU8sR0FBRztBQUNkQyxTQUFPLDhDQURPO0FBT2RDLFdBQVMsb0lBUEs7QUFvQmRDLGFBQVcsRUFBRTtBQUNYRCxhQUFTLG1HQURFO0FBUVhFLFFBQUk7QUFSTyxHQXBCQztBQW9DZEMsV0FBUyxFQUFFO0FBQ1RDLE9BQUcsRUFBRTtBQUNISixlQUFTLHFNQUROO0FBWUhLLGtCQUFZO0FBWlQs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RG5DO0FBRUUsbUJBQUssRUFBRUssTUFBTSxDQUFDTCxZQUZoQjtBQUFBLHdCQUlHZSxLQUFLLENBQUNLO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEYsZUF3QkU7QUFDRSxnQkFBSSxFQUFFbkIsSUFBSSxHQUFHLGVBQUgsR0FBcUIsT0FEakM7QUFFRSxxQkFBUyxFQUFFUixPQUFPLENBQUNLLFNBQVIsQ0FBa0JHLElBQWxCLENBQXVCTixTQUZwQztBQUFBLHNCQUtJTSxJQUFJLGdCQUNBLHFFQUFDLHdFQUFEO0FBQWMsb0JBQU0sRUFBRUEsSUFBSSxDQUFDb0IsTUFBM0I7QUFBbUMsa0JBQUksRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURBLGdCQUVBLHFFQUFDLHlFQUFEO0FBQWUsbUJBQUssRUFBQztBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBeURJSixhQUFhLGlCQUNiO0FBQUssZUFBUyxFQUFFWixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLGVBQWhCLENBQWdDQyxhQUFoRDtBQUFBLDZCQUNFLHFFQUFDLHlFQUFEO0FBQWlCLG1CQUFXLEVBQUV0QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFESjtBQUFBLGtCQURGO0FBaUVEOztHQXRFdUJGLE87O0tBQUFBLE87QUFzRXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL29yZGVyLmYwNzZlODMxODE4ODAyMDQxYmU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCwgTW9yZVZlcnRpY2FsLCBTaG9wcGluZ0JhZyB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNhcnZpbmdJbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZnJhbWUuc3ZnJztcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgQ2lyY2xlQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9hdmF0YXJzL0NpcmNsZUF2YXRhcic7XHJcbmltcG9ydCBPdXRsaW5lQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL091dGxpbmVCdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bic7XHJcbmltcG9ydCBEZXBhcnRtZW50c01lbnUgZnJvbSAnQC9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5cclxuT21uaWJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbWVudUVudHJpZXM6IFByb3BUeXBlcy5hcnJheVxyXG59O1xyXG5cclxuT21uaWJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWVudUVudHJpZXM6IFtdXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNhcnZpbmc6IGBcclxuICAgIGJnLXJlcGVhdC14XHJcbiAgICBoLThcclxuICAgIHctZnVsbFxyXG4gIGAsXHJcblxyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgYmctYnNlXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LWNvbFxyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGgtMjRcclxuICAgIG1kOmgtMjhcclxuICAgIHJlbGF0aXZlXHJcbiAgICBzaGFkb3dcclxuICAgIHctZnVsbFxyXG4gICAgei01MFxyXG4gIGAsXHJcblxyXG4gIGRlcGFydG1lbnRzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgIGAsXHJcbiAgICBtZW51OiBgXHJcbiAgICAgIGFic29sdXRlXHJcbiAgICAgIG1heC1oLTEvMlxyXG4gICAgICB3LWZ1bGxcclxuICAgICAgei00MFxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGxpbmtHcm91cDoge1xyXG4gICAgYmFnOiB7XHJcbiAgICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICAgIGhpZGRlblxyXG4gICAgICAgIG1kOmZsZXhcclxuICAgICAgICBtZDpmbGV4LXJvd1xyXG4gICAgICAgIG1kOmZsZXgtbm93cmFwXHJcbiAgICAgICAgbWQ6aXRlbXMtY2VudGVyXHJcbiAgICAgICAgbWQ6anVzdGlmeS1jZW50ZXJcclxuICAgICAgICBtZDpoLTEyXHJcbiAgICAgICAgbWQ6cmVsYXRpdmVcclxuICAgICAgICBtZDp3LTEyXHJcbiAgICAgIGAsXHJcbiAgICAgIGl0ZW1zQ291bnRlcjogYFxyXG4gICAgICAgIGFic29sdXRlXHJcbiAgICAgICAgYmctYWNjZW50XHJcbiAgICAgICAgYm9yZGVyLTJcclxuICAgICAgICBib3JkZXItYnNlXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGZsZXgtcm93XHJcbiAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICBmb250LWJvbGRcclxuICAgICAgICBoLTVcclxuICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIHJpZ2h0LTFcclxuICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICB0ZXh0LWJzZVxyXG4gICAgICAgIHRvcC0xXHJcbiAgICAgICAgdy01XHJcbiAgICAgIGBcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1lbmRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICAgIGhpZGRlblxyXG4gICAgICAgIG1kOmN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgbWQ6aW5saW5lLWJsb2NrXHJcbiAgICAgICAgbWQ6bWwtNFxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nbzoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaC0xMlxyXG4gICAgICBqdXN0aWZ5LXN0YXJ0XHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgaW1hZ2U6IGBcclxuICAgICAgbWF4LWgtZnVsbFxyXG4gICAgICBtYXgtdy1mdWxsXHJcbiAgICBgLFxyXG4gIH0sXHJcblxyXG4gIG5hdmJhcjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC0xXHJcbiAgICBmbGV4LXJvd1xyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGl0ZW1zLWNlbnRlclxyXG4gICAganVzdGlmeS1iZXR3ZWVuXHJcbiAgICBweC03XHJcbiAgYFxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcnZpbmc6IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtjYXJ2aW5nSW1hZ2V9JylgXHJcbiAgfSxcclxuICBpdGVtc0NvdW50ZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMC43NXJlbSdcclxuICB9LFxyXG4gIHRhaWx3aW5kOiB7XHJcbiAgICBkZXBhcnRtZW50c01lbnU6IHtcclxuICAgICAgbWVudUNvbnRhaW5lcjogYFxyXG4gICAgICAgIGFic29sdXRlXHJcbiAgICAgICAgbWF4LWgtMS8yXHJcbiAgICAgICAgb3ZlcmZsb3cteS1zY3JvbGxcclxuICAgICAgICB0b3AtMjRcclxuICAgICAgICB3LWZ1bGxcclxuICAgICAgICB6LTQwXHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbW5pYmFyKHsgbWVudUVudHJpZXMgfSkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBvcmRlciB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtpc01lbnVWaXNpYmxlLCBzZXRJc01lbnVWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FydmluZ30gc3R5bGU9e3N0eWxlcy5jYXJ2aW5nfT48L2Rpdj5cclxuXHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRlcGFydG1lbnRzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlcGFydGFtZW50b3NcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51VmlzaWJsZSghaXNNZW51VmlzaWJsZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmhpZGRlblwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51VmlzaWJsZSghaXNNZW51VmlzaWJsZSl9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlzTWVudVZpc2libGVcclxuICAgICAgICAgICAgICAgICAgPyA8TW9yZUhvcml6b250YWwgLz5cclxuICAgICAgICAgICAgICAgICAgOiA8TW9yZVZlcnRpY2FsIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLmJhZy5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLmJhZy5pdGVtc0NvdW50ZXJ9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7b3JkZXIubGVuZ3RofVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9e3VzZXIgPyAnL3VzZXIvcHJvZmlsZScgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAudXNlci5jb250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICAgICAgICAgID8gPENpcmNsZUF2YXRhciBhdmF0YXI9e3VzZXIuYXZhdGFyfSBzaXplPVwiOFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDogPE91dGxpbmVCdXR0b24gbGFiZWw9XCJSZWfDrXN0cmF0ZSBvIGluZ3Jlc2FcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uYXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAge1xyXG4gICAgICAgIGlzTWVudVZpc2libGUgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmRlcGFydG1lbnRzTWVudS5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxEZXBhcnRtZW50c01lbnUgZGVwYXJ0bWVudHM9e21lbnVFbnRyaWVzfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9