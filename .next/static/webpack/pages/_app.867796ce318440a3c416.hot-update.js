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
/* harmony import */ var _components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/dropdowns/Dropdown */ "./components/dropdowns/Dropdown.tsx");
/* harmony import */ var _components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/menus/DepartmentsMenu */ "./components/menus/DepartmentsMenu.tsx");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ "./node_modules/@material-ui/icons/LocalMall.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16__);




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
  departments: {
    container: "\n      cursor-pointer\n      flex\n      flex-row\n      flex-nowrap\n      items-center\n    ",
    menu: "\n      absolute\n      max-h-1/2\n      w-full\n      z-40\n    "
  },
  logo: {
    container: "\n      flex\n      flex-row\n      flex-nowrap\n      h-12\n      justify-start\n      w-1/3\n    ",
    image: "\n      max-h-full\n      max-w-full\n    "
  }
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      user = _useContext.user;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_10__["default"]),
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
              apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_11__["initializeApolloClient"])();
              _context.next = 3;
              return Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_12__["getDepartments"])(apolloClient);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["AppBar"], {
    position: "static",
    style: {
      marginBottom: "20px",
      background: "white"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.carving,
          style: styles.carving
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
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
            lineNumber: 116,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        item: true,
        xs: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Departamentos",
          onClick: function onClick() {
            return setIsMenuVisible(!isMenuVisible);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          href: user ? '/order' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Badge"], {
            badgeContent: order.length,
            color: "primary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Grid"], {
        item: true,
        xs: 2,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          href: user ? '/user/profile' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_16___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 9
      }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: styles.tailwind.departmentsMenu.menuContainer,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
          departments: menuEntries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 106,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJkZXBhcnRtZW50cyIsImNvbnRhaW5lciIsIm1lbnUiLCJsb2dvIiwiaW1hZ2UiLCJzdHlsZXMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJjYXJ2aW5nSW1hZ2UiLCJpdGVtc0NvdW50ZXIiLCJmb250U2l6ZSIsInRhaWx3aW5kIiwiZGVwYXJ0bWVudHNNZW51IiwibWVudUNvbnRhaW5lciIsInVzZUNvbnRleHQiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJzZXRNZW51RW50cmllcyIsImdldERlcHRvcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJnZXREZXBhcnRtZW50cyIsIm1FbnRyaWVzIiwidXNlRWZmZWN0IiwibWFyZ2luQm90dG9tIiwiYmFja2dyb3VuZCIsImxvZ29JbWFnZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxPQUFPLENBQUNDLFNBQVIsR0FBb0I7QUFDbEJDLGFBQVcsRUFBRUMsaURBQVMsQ0FBQ0M7QUFETCxDQUFwQjtBQUlBSixPQUFPLENBQUNLLFlBQVIsR0FBdUI7QUFDckJILGFBQVcsRUFBRTtBQURRLENBQXZCO0FBSUEsSUFBTUksT0FBTyxHQUFHO0FBQ2RDLFNBQU8sOENBRE87QUFPZEMsYUFBVyxFQUFF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O0FBQUEsK0JBQ0UscUVBQUMscUVBQUQ7QUFBWSxjQUFJLEVBQUVKLElBQUksR0FBRyxRQUFILEdBQWMsT0FBcEM7QUFBQSxpQ0FDRSxxRUFBQyx3REFBRDtBQUFPLHdCQUFZLEVBQUVFLEtBQUssQ0FBQ2MsTUFBM0I7QUFBbUMsaUJBQUssRUFBQyxTQUF6QztBQUFBLG1DQUNFLHFFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmRixlQXNCRSxxRUFBQyx1REFBRDtBQUFNLFlBQUksTUFBVjtBQUFXLFVBQUUsRUFBRSxDQUFmO0FBQUEsK0JBQ0UscUVBQUMscUVBQUQ7QUFBWSxjQUFJLEVBQUVoQixJQUFJLEdBQUcsZUFBSCxHQUFxQixPQUEzQztBQUFBLGlDQUNFLHFFQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCRixFQTRCSUksYUFBYSxpQkFDYjtBQUFLLGlCQUFTLEVBQUVkLE1BQU0sQ0FBQ0ssUUFBUCxDQUFnQkMsZUFBaEIsQ0FBZ0NDLGFBQWhEO0FBQUEsK0JBQ0UscUVBQUMseUVBQUQ7QUFBaUIscUJBQVcsRUFBRWxCO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXlDRDs7R0F6RHVCRixPOztLQUFBQSxPO0FBeUR2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjg2Nzc5NmNlMzE4NDQwYTNjNDE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCwgTW9yZVZlcnRpY2FsLCBTaG9wcGluZ0JhZyB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNhcnZpbmdJbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZnJhbWUuc3ZnJztcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgQ2lyY2xlQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9hdmF0YXJzL0NpcmNsZUF2YXRhcic7XHJcbmltcG9ydCBPdXRsaW5lQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL091dGxpbmVCdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bic7XHJcbmltcG9ydCBEZXBhcnRtZW50c01lbnUgZnJvbSAnQC9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuaW1wb3J0IHtHcmlkLCBCYWRnZSwgQXBwQmFyfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IExvY2FsTWFsbEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xvY2FsTWFsbCc7XHJcbmltcG9ydCBBY2NvdW50Q2lyY2xlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQWNjb3VudENpcmNsZSc7XHJcblxyXG5PbW5pYmFyLnByb3BUeXBlcyA9IHtcclxuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZW51RW50cmllczogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY2FydmluZzogYFxyXG4gICAgYmctcmVwZWF0LXhcclxuICAgIGgtOFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgZGVwYXJ0bWVudHM6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgYCxcclxuICAgIG1lbnU6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgbWF4LWgtMS8yXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTQwXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgbG9nbzoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaC0xMlxyXG4gICAgICBqdXN0aWZ5LXN0YXJ0XHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgaW1hZ2U6IGBcclxuICAgICAgbWF4LWgtZnVsbFxyXG4gICAgICBtYXgtdy1mdWxsXHJcbiAgICBgLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FydmluZzoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2NhcnZpbmdJbWFnZX0nKWBcclxuICB9LFxyXG4gIGl0ZW1zQ291bnRlcjoge1xyXG4gICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gIH0sXHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgICBtZW51Q29udGFpbmVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBtYXgtaC0xLzJcclxuICAgICAgICBvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICAgIHRvcC0yNFxyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHotNDBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9tbmliYXIoKSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51RW50cmllcywgc2V0TWVudUVudHJpZXNdID0gdXNlU3RhdGU8SURlcGFydG1lbnRbXT4oKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwdG9zKCl7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgICBjb25zdCBtRW50cmllcyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcbiAgICBzZXRNZW51RW50cmllcyhtRW50cmllcylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0RGVwdG9zKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiIHN0eWxlPXt7XHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCIyMHB4XCIsXHJcbiAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIlxyXG4gICAgfX0+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsxfT5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ2aW5nfSBzdHlsZT17c3R5bGVzLmNhcnZpbmd9PjwvZGl2PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXsyfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICBsYWJlbD1cIkRlcGFydGFtZW50b3NcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc01lbnVWaXNpYmxlKCFpc01lbnVWaXNpYmxlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9PlxyXG4gICAgICAgICAgPEljb25CdXR0b24gaHJlZj17dXNlciA/ICcvb3JkZXInIDogJy9hdXRoJ30+XHJcbiAgICAgICAgICAgIDxCYWRnZSBiYWRnZUNvbnRlbnQ9e29yZGVyLmxlbmd0aH0gY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgPExvY2FsTWFsbEljb24gLz5cclxuICAgICAgICAgICAgPC9CYWRnZT5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17Mn0+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBocmVmPXt1c2VyID8gJy91c2VyL3Byb2ZpbGUnIDogJy9hdXRoJ30+XHJcbiAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlSWNvbi8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzTWVudVZpc2libGUgJiZcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8RGVwYXJ0bWVudHNNZW51IGRlcGFydG1lbnRzPXttZW51RW50cmllc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==