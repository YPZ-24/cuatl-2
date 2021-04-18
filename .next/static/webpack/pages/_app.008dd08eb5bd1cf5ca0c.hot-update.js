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
/* harmony import */ var _assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/frame.svg */ "./assets/images/frame.svg");
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/avatars/CircleAvatar */ "./components/avatars/CircleAvatar.tsx");
/* harmony import */ var _components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/buttons/OutlineButton */ "./components/buttons/OutlineButton.tsx");
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");
/* harmony import */ var _components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/menus/DepartmentsMenu */ "./components/menus/DepartmentsMenu.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ "./node_modules/@material-ui/icons/LocalMall.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18__);




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
    backgroundImage: "url('".concat(_assets_images_frame_svg__WEBPACK_IMPORTED_MODULE_5__["default"], "')")
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
      user = _useContext.user;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_12__["default"]),
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
              apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_13__["initializeApolloClient"])();
              _context.next = 3;
              return Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_14__["getDepartments"])(apolloClient);

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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.carving,
          style: styles.carving
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 182,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/",
          className: classes.logo.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: classes.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_9__["default"], {
          label: "Departamentos",
          onClick: function onClick() {
            return setIsMenuVisible(!isMenuVisible);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
          href: user ? '/order' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Badge"], {
            badgeContent: order.length,
            color: "primary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 198,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Grid"], {
        item: true,
        xs: 2,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__["default"], {
          href: user ? '/user/profile' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: classes.linkGroup.user.container,
          children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
            avatar: user.avatar,
            size: "8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 19
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 9
      }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: styles.tailwind.departmentsMenu.menuContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 180,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 177,
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

/***/ }),

/***/ "./node_modules/@material-ui/icons/AccountCircle.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/icons/AccountCircle.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
}), 'AccountCircle');

exports.default = _default;

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Iiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2ljb25zL0FjY291bnRDaXJjbGUuanMiXSwibmFtZXMiOlsiT21uaWJhciIsInByb3BUeXBlcyIsIm1lbnVFbnRyaWVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJkZWZhdWx0UHJvcHMiLCJjbGFzc2VzIiwiY2FydmluZyIsImNvbnRhaW5lciIsImRlcGFydG1lbnRzIiwibWVudSIsImxpbmtHcm91cCIsImJhZyIsIml0ZW1zQ291bnRlciIsInVzZXIiLCJsb2dvIiwiaW1hZ2UiLCJuYXZiYXIiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjYXJ2aW5nSW1hZ2UiLCJmb250U2l6ZSIsInRhaWx3aW5kIiwiZGVwYXJ0bWVudHNNZW51IiwibWVudUNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwidXNlU3RhdGUiLCJpc01lbnVWaXNpYmxlIiwic2V0SXNNZW51VmlzaWJsZSIsInNldE1lbnVFbnRyaWVzIiwiZ2V0RGVwdG9zIiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCIsImdldERlcGFydG1lbnRzIiwibUVudHJpZXMiLCJ1c2VFZmZlY3QiLCJiYWNrZ3JvdW5kIiwibG9nb0ltYWdlIiwibGVuZ3RoIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsU0FBUixHQUFvQjtBQUNsQkMsYUFBVyxFQUFFQyxpREFBUyxDQUFDQztBQURMLENBQXBCO0FBSUFKLE9B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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGLEVBd0NJWixhQUFhLGlCQUNiO0FBQUssaUJBQVMsRUFBRVosTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxlQUFoQixDQUFnQ0MsYUFBaEQ7QUFBQSwrQkFDRSxxRUFBQywwRUFBRDtBQUFpQixxQkFBVyxFQUFFdEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F6Q0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0REOztHQXBFdUJGLE87O0tBQUFBLE87QUFvRXZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbk9ZOztBQUViLDZCQUE2QixtQkFBTyxDQUFDLG9IQUE4Qzs7QUFFbkYsOEJBQThCLG1CQUFPLENBQUMsc0hBQStDOztBQUVyRjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLG9DQUFvQyxtQkFBTyxDQUFDLDRDQUFPOztBQUVuRCw0Q0FBNEMsbUJBQU8sQ0FBQyx1RkFBdUI7O0FBRTNFO0FBQ0E7QUFDQSxDQUFDOztBQUVELDJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDA4ZGQwOGViNWJkMWNmNWNhMGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vcmVIb3Jpem9udGFsLCBNb3JlVmVydGljYWwsIFNob3BwaW5nQmFnIH0gZnJvbSAncmVhY3QtZmVhdGhlcic7XHJcblxyXG5pbXBvcnQgY2FydmluZ0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9mcmFtZS5zdmcnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBDaXJjbGVBdmF0YXIgZnJvbSAnQC9jb21wb25lbnRzL2F2YXRhcnMvQ2lyY2xlQXZhdGFyJztcclxuaW1wb3J0IE91dGxpbmVCdXR0b24gZnJvbSAnQC9jb21wb25lbnRzL2J1dHRvbnMvT3V0bGluZUJ1dHRvbic7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tICdAL2NvbXBvbmVudHMvZHJvcGRvd25zL0Ryb3Bkb3duJztcclxuaW1wb3J0IERlcGFydG1lbnRzTWVudSBmcm9tICdAL2NvbXBvbmVudHMvbWVudXMvRGVwYXJ0bWVudHNNZW51JztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcbmltcG9ydCB7IGluaXRpYWxpemVBcG9sbG9DbGllbnQgfSBmcm9tICdAL2xpYi9hcG9sbG8tY2xpZW50JztcclxuaW1wb3J0IHsgZ2V0RGVwYXJ0bWVudHMgfSBmcm9tICdAL2FjdGlvbnMvZmV0Y2gtZGVwYXJ0bWVudHMnO1xyXG5pbXBvcnQgSURlcGFydG1lbnQgZnJvbSAnQC9tb2RlbHMvSURlcGFydG1lbnQnO1xyXG5pbXBvcnQge0dyaWQsIEJhZGdlfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IExvY2FsTWFsbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XHJcblxyXG5PbW5pYmFyLnByb3BUeXBlcyA9IHtcclxuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZW51RW50cmllczogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY2FydmluZzogYFxyXG4gICAgYmctcmVwZWF0LXhcclxuICAgIGgtOFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBiZy1ic2VcclxuICAgIGZsZXhcclxuICAgIGZsZXgtY29sXHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaC0yNFxyXG4gICAgbWQ6aC0yOFxyXG4gICAgcmVsYXRpdmVcclxuICAgIHNoYWRvd1xyXG4gICAgdy1mdWxsXHJcbiAgICB6LTUwXHJcbiAgYCxcclxuXHJcbiAgZGVwYXJ0bWVudHM6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgYCxcclxuICAgIG1lbnU6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgbWF4LWgtMS8yXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTQwXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgbGlua0dyb3VwOiB7XHJcbiAgICBiYWc6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgbWQ6ZmxleFxyXG4gICAgICAgIG1kOmZsZXgtcm93XHJcbiAgICAgICAgbWQ6ZmxleC1ub3dyYXBcclxuICAgICAgICBtZDppdGVtcy1jZW50ZXJcclxuICAgICAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIG1kOmgtMTJcclxuICAgICAgICBtZDpyZWxhdGl2ZVxyXG4gICAgICAgIG1kOnctMTJcclxuICAgICAgYCxcclxuICAgICAgaXRlbXNDb3VudGVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBiZy1hY2NlbnRcclxuICAgICAgICBib3JkZXItMlxyXG4gICAgICAgIGJvcmRlci1ic2VcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgIGgtNVxyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgcmlnaHQtMVxyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgIHRleHQtYnNlXHJcbiAgICAgICAgdG9wLTFcclxuICAgICAgICB3LTVcclxuICAgICAgYFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWVuZFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgbWQ6Y3Vyc29yLXBvaW50ZXJcclxuICAgICAgICBtZDppbmxpbmUtYmxvY2tcclxuICAgICAgICBtZDptbC00XHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBoLTEyXHJcbiAgICAgIGp1c3RpZnktc3RhcnRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICBpbWFnZTogYFxyXG4gICAgICBtYXgtaC1mdWxsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgfSxcclxuXHJcbiAgbmF2YmFyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LTFcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBqdXN0aWZ5LWJldHdlZW5cclxuICAgIHB4LTdcclxuICBgXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FydmluZzoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2NhcnZpbmdJbWFnZX0nKWBcclxuICB9LFxyXG4gIGl0ZW1zQ291bnRlcjoge1xyXG4gICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gIH0sXHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgICBtZW51Q29udGFpbmVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBtYXgtaC0xLzJcclxuICAgICAgICBvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICAgIHRvcC0yNFxyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHotNDBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9tbmliYXIoKSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51RW50cmllcywgc2V0TWVudUVudHJpZXNdID0gdXNlU3RhdGU8SURlcGFydG1lbnRbXT4oKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwdG9zKCl7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgICBjb25zdCBtRW50cmllcyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcbiAgICBzZXRNZW51RW50cmllcyhtRW50cmllcylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0RGVwdG9zKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e1xyXG4gICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCJcclxuICAgIH19PlxyXG4gICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17MX0+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FydmluZ30gc3R5bGU9e3N0eWxlcy5jYXJ2aW5nfT48L2Rpdj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uaW1hZ2V9IHNyYz17bG9nb0ltYWdlfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICA8RHJvcGRvd25cclxuICAgICAgICAgICAgbGFiZWw9XCJEZXBhcnRhbWVudG9zXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNNZW51VmlzaWJsZSghaXNNZW51VmlzaWJsZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGhyZWY9e3VzZXIgPyAnL29yZGVyJyA6ICcvYXV0aCd9PlxyXG4gICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtvcmRlci5sZW5ndGh9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxMb2NhbE1hbGxJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9PlxyXG4gICAgICAgICAgICA8QWNjb3VudENpcmNsZUljb24vPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG5cclxuXHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC51c2VyLmNvbnRhaW5lcn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgID8gPENpcmNsZUF2YXRhciBhdmF0YXI9e3VzZXIuYXZhdGFyfSBzaXplPVwiOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA6IDxPdXRsaW5lQnV0dG9uIGxhYmVsPVwiUmVnw61zdHJhdGUgbyBpbmdyZXNhXCIgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc01lbnVWaXNpYmxlICYmXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhaWx3aW5kLmRlcGFydG1lbnRzTWVudS5tZW51Q29udGFpbmVyfT5cclxuICAgICAgICAgICAgPERlcGFydG1lbnRzTWVudSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9jcmVhdGVTdmdJY29uID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9jcmVhdGVTdmdJY29uXCIpKTtcblxudmFyIF9kZWZhdWx0ID0gKDAsIF9jcmVhdGVTdmdJY29uLmRlZmF1bHQpKCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICBkOiBcIk0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDNjMS42NiAwIDMgMS4zNCAzIDNzLTEuMzQgMy0zIDMtMy0xLjM0LTMtMyAxLjM0LTMgMy0zem0wIDE0LjJjLTIuNSAwLTQuNzEtMS4yOC02LTMuMjIuMDMtMS45OSA0LTMuMDggNi0zLjA4IDEuOTkgMCA1Ljk3IDEuMDkgNiAzLjA4LTEuMjkgMS45NC0zLjUgMy4yMi02IDMuMjJ6XCJcbn0pLCAnQWNjb3VudENpcmNsZScpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDsiXSwic291cmNlUm9vdCI6IiJ9