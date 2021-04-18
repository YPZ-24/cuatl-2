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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Container"], {
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
          lineNumber: 178,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
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
            lineNumber: 182,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
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
          lineNumber: 186,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_16__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: user ? '/order' : '/auth',
          className: classes.linkGroup.bag.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ShoppingBag"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.linkGroup.bag.itemsCounter,
            style: styles.itemsCounter,
            children: order.length
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 191,
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
            lineNumber: 212,
            columnNumber: 19
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
            label: "Reg\xEDstrate o ingresa"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 9
      }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: styles.tailwind.departmentsMenu.menuContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
          departments: menuEntries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 219,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJjb250YWluZXIiLCJkZXBhcnRtZW50cyIsIm1lbnUiLCJsaW5rR3JvdXAiLCJiYWciLCJpdGVtc0NvdW50ZXIiLCJ1c2VyIiwibG9nbyIsImltYWdlIiwibmF2YmFyIiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY2FydmluZ0ltYWdlIiwiZm9udFNpemUiLCJ0YWlsd2luZCIsImRlcGFydG1lbnRzTWVudSIsIm1lbnVDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJzZXRNZW51RW50cmllcyIsImdldERlcHRvcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJnZXREZXBhcnRtZW50cyIsIm1FbnRyaWVzIiwidXNlRWZmZWN0IiwibG9nb0ltYWdlIiwibGVuZ3RoIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBQSxPQUFPLENBQUNDLFNBQVIsR0FBb0I7QUFDbEJDLGFBQVcsRUFBRUMsaURBQVMsQ0FBQ0M7QUFETCxDQUFwQjtBQUlBSixPQUFPLENBQUNLLFlBQVIsR0FBdUI7QUFDckJILGFBQVcsRUFBRTtBQURRLENBQXZCO0FBSUEsSUFBTUksT0FBTyxHQUFHO0FBQ2RDLFNBQU8sOENBRE87QUFPZEMsV0FB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Q0FBQ0ksUUFBUCxDQUFnQkMsZUFBaEIsQ0FBZ0NDLGFBQWhEO0FBQUEsK0JBQ0UscUVBQUMsMEVBQUQ7QUFBaUIscUJBQVcsRUFBRXRCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9ERDs7R0FwRXVCRixPOztLQUFBQSxPO0FBb0V2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjY3NTJjY2I5YTQ5ZjEzZjVhNGI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCwgTW9yZVZlcnRpY2FsLCBTaG9wcGluZ0JhZyB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNhcnZpbmdJbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZnJhbWUuc3ZnJztcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgQ2lyY2xlQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9hdmF0YXJzL0NpcmNsZUF2YXRhcic7XHJcbmltcG9ydCBPdXRsaW5lQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL091dGxpbmVCdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bic7XHJcbmltcG9ydCBEZXBhcnRtZW50c01lbnUgZnJvbSAnQC9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuaW1wb3J0IHtHcmlkLCBDb250YWluZXJ9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5cclxuT21uaWJhci5wcm9wVHlwZXMgPSB7XHJcbiAgbWVudUVudHJpZXM6IFByb3BUeXBlcy5hcnJheVxyXG59O1xyXG5cclxuT21uaWJhci5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbWVudUVudHJpZXM6IFtdXHJcbn07XHJcblxyXG5jb25zdCBjbGFzc2VzID0ge1xyXG4gIGNhcnZpbmc6IGBcclxuICAgIGJnLXJlcGVhdC14XHJcbiAgICBoLThcclxuICAgIHctZnVsbFxyXG4gIGAsXHJcblxyXG4gIGNvbnRhaW5lcjogYFxyXG4gICAgYmctYnNlXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LWNvbFxyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGgtMjRcclxuICAgIG1kOmgtMjhcclxuICAgIHJlbGF0aXZlXHJcbiAgICBzaGFkb3dcclxuICAgIHctZnVsbFxyXG4gICAgei01MFxyXG4gIGAsXHJcblxyXG4gIGRlcGFydG1lbnRzOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgY3Vyc29yLXBvaW50ZXJcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgIGAsXHJcbiAgICBtZW51OiBgXHJcbiAgICAgIGFic29sdXRlXHJcbiAgICAgIG1heC1oLTEvMlxyXG4gICAgICB3LWZ1bGxcclxuICAgICAgei00MFxyXG4gICAgYFxyXG4gIH0sXHJcblxyXG4gIGxpbmtHcm91cDoge1xyXG4gICAgYmFnOiB7XHJcbiAgICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICAgIG1kOmZsZXhcclxuICAgICAgICBtZDpmbGV4LXJvd1xyXG4gICAgICAgIG1kOmZsZXgtbm93cmFwXHJcbiAgICAgICAgbWQ6aXRlbXMtY2VudGVyXHJcbiAgICAgICAgbWQ6anVzdGlmeS1jZW50ZXJcclxuICAgICAgICBtZDpoLTEyXHJcbiAgICAgICAgbWQ6cmVsYXRpdmVcclxuICAgICAgICBtZDp3LTEyXHJcbiAgICAgIGAsXHJcbiAgICAgIGl0ZW1zQ291bnRlcjogYFxyXG4gICAgICAgIGFic29sdXRlXHJcbiAgICAgICAgYmctYWNjZW50XHJcbiAgICAgICAgYm9yZGVyLTJcclxuICAgICAgICBib3JkZXItYnNlXHJcbiAgICAgICAgZmxleFxyXG4gICAgICAgIGZsZXgtcm93XHJcbiAgICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgICBmb250LWJvbGRcclxuICAgICAgICBoLTVcclxuICAgICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAgICBqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIHJpZ2h0LTFcclxuICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICB0ZXh0LWJzZVxyXG4gICAgICAgIHRvcC0xXHJcbiAgICAgICAgdy01XHJcbiAgICAgIGBcclxuICAgIH0sXHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBpdGVtcy1jZW50ZXJcclxuICAgICAganVzdGlmeS1lbmRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICB1c2VyOiB7XHJcbiAgICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICAgIG1kOmN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgbWQ6aW5saW5lLWJsb2NrXHJcbiAgICAgICAgbWQ6bWwtNFxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgbG9nbzoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaC0xMlxyXG4gICAgICBqdXN0aWZ5LXN0YXJ0XHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgaW1hZ2U6IGBcclxuICAgICAgbWF4LWgtZnVsbFxyXG4gICAgICBtYXgtdy1mdWxsXHJcbiAgICBgLFxyXG4gIH0sXHJcblxyXG4gIG5hdmJhcjogYFxyXG4gICAgZmxleFxyXG4gICAgZmxleC0xXHJcbiAgICBmbGV4LXJvd1xyXG4gICAgZmxleC1ub3dyYXBcclxuICAgIGl0ZW1zLWNlbnRlclxyXG4gICAganVzdGlmeS1iZXR3ZWVuXHJcbiAgICBweC03XHJcbiAgYFxyXG59O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNhcnZpbmc6IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtjYXJ2aW5nSW1hZ2V9JylgXHJcbiAgfSxcclxuICBpdGVtc0NvdW50ZXI6IHtcclxuICAgIGZvbnRTaXplOiAnMC43NXJlbSdcclxuICB9LFxyXG4gIHRhaWx3aW5kOiB7XHJcbiAgICBkZXBhcnRtZW50c01lbnU6IHtcclxuICAgICAgbWVudUNvbnRhaW5lcjogYFxyXG4gICAgICAgIGFic29sdXRlXHJcbiAgICAgICAgbWF4LWgtMS8yXHJcbiAgICAgICAgb3ZlcmZsb3cteS1zY3JvbGxcclxuICAgICAgICB0b3AtMjRcclxuICAgICAgICB3LWZ1bGxcclxuICAgICAgICB6LTQwXHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPbW5pYmFyKCkge1xyXG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgY29uc3QgeyBvcmRlciB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG4gIGNvbnN0IFtpc01lbnVWaXNpYmxlLCBzZXRJc01lbnVWaXNpYmxlXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbbWVudUVudHJpZXMsIHNldE1lbnVFbnRyaWVzXSA9IHVzZVN0YXRlPElEZXBhcnRtZW50W10+KCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGdldERlcHRvcygpe1xyXG4gICAgY29uc3QgYXBvbGxvQ2xpZW50ID0gaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCgpO1xyXG4gICAgY29uc3QgbUVudHJpZXMgPSBhd2FpdCBnZXREZXBhcnRtZW50cyhhcG9sbG9DbGllbnQpO1xyXG4gICAgc2V0TWVudUVudHJpZXMobUVudHJpZXMpXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGdldERlcHRvcygpXHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICBsYWJlbD1cIkRlcGFydGFtZW50b3NcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5iYWcuY29udGFpbmVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2hvcHBpbmdCYWcgLz5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICBzdHlsZT17c3R5bGVzLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtvcmRlci5sZW5ndGh9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIGhyZWY9e3VzZXIgPyAnL3VzZXIvcHJvZmlsZScgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLnVzZXIuY29udGFpbmVyfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY2xlQXZhdGFyIGF2YXRhcj17dXNlci5hdmF0YXJ9IHNpemU9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgIDogPE91dGxpbmVCdXR0b24gbGFiZWw9XCJSZWfDrXN0cmF0ZSBvIGluZ3Jlc2FcIiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzTWVudVZpc2libGUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8RGVwYXJ0bWVudHNNZW51IGRlcGFydG1lbnRzPXttZW51RW50cmllc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==