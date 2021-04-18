webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbars/Omnibar.tsx":
/*!****************************************!*\
  !*** ./components/navbars/Omnibar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Omnibar; });
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/frame.svg */ "./assets/images/frame.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/avatars/CircleAvatar */ "./components/avatars/CircleAvatar.tsx");
/* harmony import */ var _components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/buttons/OutlineButton */ "./components/buttons/OutlineButton.tsx");
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");
/* harmony import */ var _components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/menus/DepartmentsMenu */ "./components/menus/DepartmentsMenu.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Omnibar.tsx",
    _s = $RefreshSig$();















Omnibar.propTypes = {
  menuEntries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
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
      container: "\n        md:flex\n        md:flex-row\n        md:flex-nowrap\n        md:items-center\n        md:justify-center\n        md:h-12\n        md:relative\n        md:w-12\n      ",
      itemsCounter: "\n        absolute\n        bg-accent\n        border-2\n        border-bse\n        flex\n        flex-row\n        flex-nowrap\n        font-bold\n        h-5\n        items-center\n        justify-center\n        right-1\n        rounded-full\n        text-bse\n        top-1\n        w-5\n      "
    },
    container: "\n      flex\n      flex-row\n      flex-nowrap\n      items-center\n      justify-end\n      w-1/3\n    ",
    user: {
      container: "\n        md:cursor-pointer\n        md:inline-block\n        md:ml-4\n      "
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
    backgroundImage: "url('".concat(_assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_6__["default"], "')")
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
function Omnibar() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_12__["default"]),
      user = _useContext.user;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_13__["default"]),
      order = _useContext2.order;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isMenuVisible = _useState[0],
      setIsMenuVisible = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      menuEntries = _useState2[0],
      setMenuEntries = _useState2[1];

  function getDeptos() {
    return _getDeptos.apply(this, arguments);
  }

  function _getDeptos() {
    _getDeptos = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var apolloClient, mEntries;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_14__["initializeApolloClient"])();
              _context.next = 3;
              return Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_15__["getDepartments"])(apolloClient);

            case 3:
              mEntries = _context.sent;
              setMenuEntries(mEntries);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getDeptos.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getDeptos();
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    style: {
      background: "white"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.carving,
          style: styles.carving
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/",
          className: classes.logo.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: classes.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 183,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
          label: "Departamentos",
          onClick: function onClick() {
            return setIsMenuVisible(!isMenuVisible);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: user ? '/order' : '/auth',
          className: classes.linkGroup.bag.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ShoppingBag"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.linkGroup.bag.itemsCounter,
            style: styles.itemsCounter,
            children: order.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: user ? '/user/profile' : '/auth',
          className: classes.linkGroup.user.container,
          children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
            avatar: user.avatar,
            size: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 19
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            label: "Reg\xEDstrate o ingresa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 215,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 9
      }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: styles.tailwind.departmentsMenu.menuContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
          departments: menuEntries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 175,
    columnNumber: 5
  }, this);
}

_s(Omnibar, "o1KhlkKsTrxP3VXr2mVTIB28MHE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJjb250YWluZXIiLCJkZXBhcnRtZW50cyIsIm1lbnUiLCJsaW5rR3JvdXAiLCJiYWciLCJpdGVtc0NvdW50ZXIiLCJ1c2VyIiwibG9nbyIsImltYWdlIiwibmF2YmFyIiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY2FydmluZ0ltYWdlIiwiZm9udFNpemUiLCJ0YWlsd2luZCIsImRlcGFydG1lbnRzTWVudSIsIm1lbnVDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJzZXRNZW51RW50cmllcyIsImdldERlcHRvcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJnZXREZXBhcnRtZW50cyIsIm1FbnRyaWVzIiwidXNlRWZmZWN0IiwiYmFja2dyb3VuZCIsImxvZ29JbWFnZSIsImxlbmd0aCIsImF2YXRhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDO0FBREwsQ0FBcEI7QUFJQUosT0FBTyxDQUFDSyxZQUFSLEdBQXVCO0FBQ3JCSCxhQUFXLEVBQUU7QUFEUSxDQUF2QjtBQUlBLElBQU1JLE9BQU8sR0FBRztBQUNkQyxTQUFPLDhD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QkYsRUEwQ0laLGFBQWEsaUJBQ2I7QUFBSyxpQkFBUyxFQUFFWixNQUFNLENBQUNJLFFBQVAsQ0FBZ0JDLGVBQWhCLENBQWdDQyxhQUFoRDtBQUFBLCtCQUNFLHFFQUFDLDBFQUFEO0FBQWlCLHFCQUFXLEVBQUV0QjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFzREQ7O0dBdEV1QkYsTzs7S0FBQUEsTztBQXNFdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4yZTBlNzUwM2MyZGM2OWYxMjBjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9yZUhvcml6b250YWwsIE1vcmVWZXJ0aWNhbCwgU2hvcHBpbmdCYWcgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBjYXJ2aW5nSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2ZyYW1lLnN2Zyc7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJztcclxuaW1wb3J0IENpcmNsZUF2YXRhciBmcm9tICdAL2NvbXBvbmVudHMvYXZhdGFycy9DaXJjbGVBdmF0YXInO1xyXG5pbXBvcnQgT3V0bGluZUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24nO1xyXG5pbXBvcnQgRGVwYXJ0bWVudHNNZW51IGZyb20gJ0AvY29tcG9uZW50cy9tZW51cy9EZXBhcnRtZW50c01lbnUnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IE9yZGVyQ29udGV4dCBmcm9tICdAL2NvbnRleHQvT3JkZXJDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgeyBnZXREZXBhcnRtZW50cyB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cyc7XHJcbmltcG9ydCBJRGVwYXJ0bWVudCBmcm9tICdAL21vZGVscy9JRGVwYXJ0bWVudCc7XHJcbmltcG9ydCB7R3JpZCwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuXHJcbk9tbmliYXIucHJvcFR5cGVzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbk9tbmliYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjYXJ2aW5nOiBgXHJcbiAgICBiZy1yZXBlYXQteFxyXG4gICAgaC04XHJcbiAgICB3LWZ1bGxcclxuICBgLFxyXG5cclxuICBjb250YWluZXI6IGBcclxuICAgIGJnLWJzZVxyXG4gICAgZmxleFxyXG4gICAgZmxleC1jb2xcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBoLTI0XHJcbiAgICBtZDpoLTI4XHJcbiAgICByZWxhdGl2ZVxyXG4gICAgc2hhZG93XHJcbiAgICB3LWZ1bGxcclxuICAgIHotNTBcclxuICBgLFxyXG5cclxuICBkZXBhcnRtZW50czoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICBgLFxyXG4gICAgbWVudTogYFxyXG4gICAgICBhYnNvbHV0ZVxyXG4gICAgICBtYXgtaC0xLzJcclxuICAgICAgdy1mdWxsXHJcbiAgICAgIHotNDBcclxuICAgIGBcclxuICB9LFxyXG5cclxuICBsaW5rR3JvdXA6IHtcclxuICAgIGJhZzoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBtZDpmbGV4XHJcbiAgICAgICAgbWQ6ZmxleC1yb3dcclxuICAgICAgICBtZDpmbGV4LW5vd3JhcFxyXG4gICAgICAgIG1kOml0ZW1zLWNlbnRlclxyXG4gICAgICAgIG1kOmp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgbWQ6aC0xMlxyXG4gICAgICAgIG1kOnJlbGF0aXZlXHJcbiAgICAgICAgbWQ6dy0xMlxyXG4gICAgICBgLFxyXG4gICAgICBpdGVtc0NvdW50ZXI6IGBcclxuICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgIGJnLWFjY2VudFxyXG4gICAgICAgIGJvcmRlci0yXHJcbiAgICAgICAgYm9yZGVyLWJzZVxyXG4gICAgICAgIGZsZXhcclxuICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgaC01XHJcbiAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICByaWdodC0xXHJcbiAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgdGV4dC1ic2VcclxuICAgICAgICB0b3AtMVxyXG4gICAgICAgIHctNVxyXG4gICAgICBgXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgIGp1c3RpZnktZW5kXHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBtZDpjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgIG1kOmlubGluZS1ibG9ja1xyXG4gICAgICAgIG1kOm1sLTRcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZ286IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGgtMTJcclxuICAgICAganVzdGlmeS1zdGFydFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIGltYWdlOiBgXHJcbiAgICAgIG1heC1oLWZ1bGxcclxuICAgICAgbWF4LXctZnVsbFxyXG4gICAgYCxcclxuICB9LFxyXG5cclxuICBuYXZiYXI6IGBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtMVxyXG4gICAgZmxleC1yb3dcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBpdGVtcy1jZW50ZXJcclxuICAgIGp1c3RpZnktYmV0d2VlblxyXG4gICAgcHgtN1xyXG4gIGBcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJ2aW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7Y2FydmluZ0ltYWdlfScpYFxyXG4gIH0sXHJcbiAgaXRlbXNDb3VudGVyOiB7XHJcbiAgICBmb250U2l6ZTogJzAuNzVyZW0nXHJcbiAgfSxcclxuICB0YWlsd2luZDoge1xyXG4gICAgZGVwYXJ0bWVudHNNZW51OiB7XHJcbiAgICAgIG1lbnVDb250YWluZXI6IGBcclxuICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgIG1heC1oLTEvMlxyXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgICAgdG9wLTI0XHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgei00MFxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT21uaWJhcigpIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHsgb3JkZXIgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNNZW51VmlzaWJsZSwgc2V0SXNNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVFbnRyaWVzLCBzZXRNZW51RW50cmllc10gPSB1c2VTdGF0ZTxJRGVwYXJ0bWVudFtdPigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXREZXB0b3MoKXtcclxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICAgIGNvbnN0IG1FbnRyaWVzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuICAgIHNldE1lbnVFbnRyaWVzKG1FbnRyaWVzKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXREZXB0b3MoKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICBsYWJlbD1cIkRlcGFydGFtZW50b3NcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5iYWcuY29udGFpbmVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcmRlci5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzZXIgPyAnL3VzZXIvcHJvZmlsZScgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLnVzZXIuY29udGFpbmVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY2xlQXZhdGFyIGF2YXRhcj17dXNlci5hdmF0YXJ9IHNpemU9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDogPE91dGxpbmVCdXR0b24gbGFiZWw9XCJSZWfDrXN0cmF0ZSBvIGluZ3Jlc2FcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzTWVudVZpc2libGUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8RGVwYXJ0bWVudHNNZW51IGRlcGFydG1lbnRzPXttZW51RW50cmllc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==