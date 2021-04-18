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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");





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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_16__["default"], {
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
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJjb250YWluZXIiLCJkZXBhcnRtZW50cyIsIm1lbnUiLCJsaW5rR3JvdXAiLCJiYWciLCJpdGVtc0NvdW50ZXIiLCJ1c2VyIiwibG9nbyIsImltYWdlIiwibmF2YmFyIiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY2FydmluZ0ltYWdlIiwiZm9udFNpemUiLCJ0YWlsd2luZCIsImRlcGFydG1lbnRzTWVudSIsIm1lbnVDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJzZXRNZW51RW50cmllcyIsImdldERlcHRvcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJnZXREZXBhcnRtZW50cyIsIm1FbnRyaWVzIiwidXNlRWZmZWN0IiwibG9nb0ltYWdlIiwibGVuZ3RoIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDO0FBREwsQ0FBcEI7QUFJQUosT0FBTyxDQUFDSyxZQUFSLEdBQXVCO0FBQ3JCSCxhQUFXLEVBQUU7QUFEUSxDQUF2QjtBQUlBLElBQU1JLE9BQU8sR0FBRztBQUNkQyxTQUFPLDhDQURPO0FBT2RDLFdBQVMsb0lBUEs7QUFvQmRDLGFBQVcsRUFBRTtBQUNYRCxhQUFTLG1HQURFO0FBUVhFLFFBQUk7QUFSTyxHQXBCQztBQW9DZEMsV0FBUyxFQUFFO0FBQ1RDLE9BQUcsRUFBRTtBQUNISixlQUFTLHFMQUROO0FBV0hLLGtCQUFZO0FBWFQsS0FESTtBQStCVEwsYUFBUyw2R0EvQkE7QUF1Q1RNLFFBQUksRUFBRTtBQUNKTixlQUFTO0FBREw7QUF2Q0csR0FwQ0c7QUFvRmRPLE1BQUksRUFBRTtBQUNKUCxhQUFTLHVHQURMO0FBU0pRLFNBQUs7QUFURCxHQXBGUTtBQW1HZEMsUUFBTTtBQW5HUSxDQUFoQjtBQThHQSxJQUFNQyxNQUFNLEdBQUc7QUFDYlgsU0FBTyxFQUFFO0FBQ1BZLG1CQUFlLGlCQUFVQyxnRUFBVjtBQURSLEdBREk7QUFJYlAsY0FBWSxFQUFFO0FBQ1pRLFlBQVEsRUFBRTtBQURFLEdBSkQ7QUFPYkMsVUFBUSxFQUFFO0FBQ1JDLG1CQUFlLEVBQUU7QUFDZkMsbUJBQWE7QUFERTtBQURUO0FBUEcsQ0FBZjtBQXFCZSxTQUFTeEIsT0FBVCxHQUFtQjtBQUFBOztBQUFBLG9CQUNmeUIsd0RBQVUsQ0FBQ0MsNkRBQUQsQ0FESztBQUFBLE1BQ3hCWixJQUR3QixlQUN4QkEsSUFEd0I7O0FBQUEscUJBRWRXLHdEQUFVLENBQUNFLDhEQUFELENBRkk7QUFBQSxNQUV4QkMsS0FGd0IsZ0JBRXhCQSxLQUZ3Qjs7QUFBQSxrQkFHVUMsc0RBQVEsQ0FBVSxLQUFWLENBSGxCO0FBQUEsTUFHekJDLGFBSHlCO0FBQUEsTUFHVkMsZ0JBSFU7O0FBQUEsbUJBSU1GLHNEQUFRLEVBSmQ7QUFBQSxNQUl6QjNCLFdBSnlCO0FBQUEsTUFJWjhCLGNBSlk7O0FBQUEsV0FNakJDLFNBTmlCO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG9SQU1oQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUUMsMEJBRFIsR0FDdUJDLGtGQUFzQixFQUQ3QztBQUFBO0FBQUEscUJBRXlCQyxrRkFBYyxDQUFDRixZQUFELENBRnZDOztBQUFBO0FBRVFHLHNCQUZSO0FBR0VMLDRCQUFjLENBQUNLLFFBQUQsQ0FBZDs7QUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU5nQztBQUFBO0FBQUE7O0FBWWhDQyx5REFBUyxDQUFDLFlBQUk7QUFDWkwsYUFBUztBQUNWLEdBRlEsQ0FBVDtBQUlBLHNCQUNFO0FBQUEsMkJBQ0UscUVBQUMsK0RBQUQ7QUFBTSxlQUFTLE1BQWY7QUFBZ0IsYUFBTyxFQUFFLENBQXpCO0FBQUEsOEJBQ0UscUVBQUMsK0RBQUQ7QUFBTSxZQUFJLE1BQVY7QUFBVyxVQUFFLEVBQUUsRUFBZjtBQUFBLCtCQUNFO0FBQUssbUJBQVMsRUFBRTNCLE9BQU8sQ0FBQ0MsT0FBeEI7QUFBaUMsZUFBSyxFQUFFVyxNQUFNLENBQUNYO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRSxxRUFBQywrREFBRDtBQUFBLCtCQUNFO0FBQUcsY0FBSSxFQUFDLEdBQVI7QUFBWSxtQkFBUyxFQUFFRCxPQUFPLENBQUNTLElBQVIsQ0FBYVAsU0FBcEM7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUVGLE9BQU8sQ0FBQ1MsSUFBUixDQUFhQyxLQUE3QjtBQUFvQyxlQUFHLEVBQUV1QiwrREFBekM7QUFBb0QsZUFBRyxFQUFDO0FBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBU0UscUVBQUMsK0RBQUQ7QUFBQSwrQkFDRSxxRUFBQyx1RUFBRDtBQUNFLGVBQUssRUFBQyxlQURSO0FBRUUsaUJBQU8sRUFBRTtBQUFBLG1CQUFNUixnQkFBZ0IsQ0FBQyxDQUFDRCxhQUFGLENBQXRCO0FBQUE7QUFGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBZUUscUVBQUMsK0RBQUQ7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBRWhCLElBQUksR0FBRyxRQUFILEdBQWMsT0FEMUI7QUFFRSxtQkFBUyxFQUFFUixPQUFPLENBQUNLLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCSixTQUZuQztBQUFBLGtDQUlFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkYsZUFLRTtBQUNFLHFCQUFTLEVBQUVGLE9BQU8sQ0FBQ0ssU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0JDLFlBRG5DO0FBRUUsaUJBQUssRUFBRUssTUFBTSxDQUFDTCxZQUZoQjtBQUFBLHNCQUlHZSxLQUFLLENBQUNZO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBZkYsZUE2QkUscUVBQUMsK0RBQUQ7QUFBQSwrQkFDRTtBQUNFLGNBQUksRUFBRTFCLElBQUksR0FBRyxlQUFILEdBQXFCLE9BRGpDO0FBRUUsbUJBQVMsRUFBRVIsT0FBTyxDQUFDSyxTQUFSLENBQWtCRyxJQUFsQixDQUF1Qk4sU0FGcEM7QUFBQSxvQkFLSU0sSUFBSSxnQkFDQSxxRUFBQyx3RUFBRDtBQUFjLGtCQUFNLEVBQUVBLElBQUksQ0FBQzJCLE1BQTNCO0FBQW1DLGdCQUFJLEVBQUM7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxnQkFFQSxxRUFBQyx5RUFBRDtBQUFlLGlCQUFLLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JGLEVBMENJWCxhQUFhLGlCQUNiO0FBQUssaUJBQVMsRUFBRVosTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxlQUFoQixDQUFnQ0MsYUFBaEQ7QUFBQSwrQkFDRSxxRUFBQywwRUFBRDtBQUFpQixxQkFBVyxFQUFFdEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0EzQ0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFvREQ7O0dBcEV1QkYsTzs7S0FBQUEsTztBQW9FdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41Mzc1NTA1M2E3OWQxNDI4ZmQ4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcclxuaW1wb3J0IHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTW9yZUhvcml6b250YWwsIE1vcmVWZXJ0aWNhbCwgU2hvcHBpbmdCYWcgfSBmcm9tICdyZWFjdC1mZWF0aGVyJztcclxuXHJcbmltcG9ydCBjYXJ2aW5nSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2ZyYW1lLnN2Zyc7XHJcbmltcG9ydCBsb2dvSW1hZ2UgZnJvbSAnQC9hc3NldHMvaW1hZ2VzL2xvZ28uc3ZnJztcclxuaW1wb3J0IENpcmNsZUF2YXRhciBmcm9tICdAL2NvbXBvbmVudHMvYXZhdGFycy9DaXJjbGVBdmF0YXInO1xyXG5pbXBvcnQgT3V0bGluZUJ1dHRvbiBmcm9tICdAL2NvbXBvbmVudHMvYnV0dG9ucy9PdXRsaW5lQnV0dG9uJztcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gJ0AvY29tcG9uZW50cy9kcm9wZG93bnMvRHJvcGRvd24nO1xyXG5pbXBvcnQgRGVwYXJ0bWVudHNNZW51IGZyb20gJ0AvY29tcG9uZW50cy9tZW51cy9EZXBhcnRtZW50c01lbnUnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IE9yZGVyQ29udGV4dCBmcm9tICdAL2NvbnRleHQvT3JkZXJDb250ZXh0JztcclxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCB9IGZyb20gJ0AvbGliL2Fwb2xsby1jbGllbnQnO1xyXG5pbXBvcnQgeyBnZXREZXBhcnRtZW50cyB9IGZyb20gJ0AvYWN0aW9ucy9mZXRjaC1kZXBhcnRtZW50cyc7XHJcbmltcG9ydCBJRGVwYXJ0bWVudCBmcm9tICdAL21vZGVscy9JRGVwYXJ0bWVudCc7XHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcblxyXG5PbW5pYmFyLnByb3BUeXBlcyA9IHtcclxuICBtZW51RW50cmllczogUHJvcFR5cGVzLmFycmF5XHJcbn07XHJcblxyXG5PbW5pYmFyLmRlZmF1bHRQcm9wcyA9IHtcclxuICBtZW51RW50cmllczogW11cclxufTtcclxuXHJcbmNvbnN0IGNsYXNzZXMgPSB7XHJcbiAgY2FydmluZzogYFxyXG4gICAgYmctcmVwZWF0LXhcclxuICAgIGgtOFxyXG4gICAgdy1mdWxsXHJcbiAgYCxcclxuXHJcbiAgY29udGFpbmVyOiBgXHJcbiAgICBiZy1ic2VcclxuICAgIGZsZXhcclxuICAgIGZsZXgtY29sXHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaC0yNFxyXG4gICAgbWQ6aC0yOFxyXG4gICAgcmVsYXRpdmVcclxuICAgIHNoYWRvd1xyXG4gICAgdy1mdWxsXHJcbiAgICB6LTUwXHJcbiAgYCxcclxuXHJcbiAgZGVwYXJ0bWVudHM6IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBjdXJzb3ItcG9pbnRlclxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgYCxcclxuICAgIG1lbnU6IGBcclxuICAgICAgYWJzb2x1dGVcclxuICAgICAgbWF4LWgtMS8yXHJcbiAgICAgIHctZnVsbFxyXG4gICAgICB6LTQwXHJcbiAgICBgXHJcbiAgfSxcclxuXHJcbiAgbGlua0dyb3VwOiB7XHJcbiAgICBiYWc6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgbWQ6ZmxleFxyXG4gICAgICAgIG1kOmZsZXgtcm93XHJcbiAgICAgICAgbWQ6ZmxleC1ub3dyYXBcclxuICAgICAgICBtZDppdGVtcy1jZW50ZXJcclxuICAgICAgICBtZDpqdXN0aWZ5LWNlbnRlclxyXG4gICAgICAgIG1kOmgtMTJcclxuICAgICAgICBtZDpyZWxhdGl2ZVxyXG4gICAgICAgIG1kOnctMTJcclxuICAgICAgYCxcclxuICAgICAgaXRlbXNDb3VudGVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBiZy1hY2NlbnRcclxuICAgICAgICBib3JkZXItMlxyXG4gICAgICAgIGJvcmRlci1ic2VcclxuICAgICAgICBmbGV4XHJcbiAgICAgICAgZmxleC1yb3dcclxuICAgICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICAgIGZvbnQtYm9sZFxyXG4gICAgICAgIGgtNVxyXG4gICAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICAgIGp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgcmlnaHQtMVxyXG4gICAgICAgIHJvdW5kZWQtZnVsbFxyXG4gICAgICAgIHRleHQtYnNlXHJcbiAgICAgICAgdG9wLTFcclxuICAgICAgICB3LTVcclxuICAgICAgYFxyXG4gICAgfSxcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGl0ZW1zLWNlbnRlclxyXG4gICAgICBqdXN0aWZ5LWVuZFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIHVzZXI6IHtcclxuICAgICAgY29udGFpbmVyOiBgXHJcbiAgICAgICAgbWQ6Y3Vyc29yLXBvaW50ZXJcclxuICAgICAgICBtZDppbmxpbmUtYmxvY2tcclxuICAgICAgICBtZDptbC00XHJcbiAgICAgIGBcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBsb2dvOiB7XHJcbiAgICBjb250YWluZXI6IGBcclxuICAgICAgZmxleFxyXG4gICAgICBmbGV4LXJvd1xyXG4gICAgICBmbGV4LW5vd3JhcFxyXG4gICAgICBoLTEyXHJcbiAgICAgIGp1c3RpZnktc3RhcnRcclxuICAgICAgdy0xLzNcclxuICAgIGAsXHJcbiAgICBpbWFnZTogYFxyXG4gICAgICBtYXgtaC1mdWxsXHJcbiAgICAgIG1heC13LWZ1bGxcclxuICAgIGAsXHJcbiAgfSxcclxuXHJcbiAgbmF2YmFyOiBgXHJcbiAgICBmbGV4XHJcbiAgICBmbGV4LTFcclxuICAgIGZsZXgtcm93XHJcbiAgICBmbGV4LW5vd3JhcFxyXG4gICAgaXRlbXMtY2VudGVyXHJcbiAgICBqdXN0aWZ5LWJldHdlZW5cclxuICAgIHB4LTdcclxuICBgXHJcbn07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY2FydmluZzoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke2NhcnZpbmdJbWFnZX0nKWBcclxuICB9LFxyXG4gIGl0ZW1zQ291bnRlcjoge1xyXG4gICAgZm9udFNpemU6ICcwLjc1cmVtJ1xyXG4gIH0sXHJcbiAgdGFpbHdpbmQ6IHtcclxuICAgIGRlcGFydG1lbnRzTWVudToge1xyXG4gICAgICBtZW51Q29udGFpbmVyOiBgXHJcbiAgICAgICAgYWJzb2x1dGVcclxuICAgICAgICBtYXgtaC0xLzJcclxuICAgICAgICBvdmVyZmxvdy15LXNjcm9sbFxyXG4gICAgICAgIHRvcC0yNFxyXG4gICAgICAgIHctZnVsbFxyXG4gICAgICAgIHotNDBcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE9tbmliYXIoKSB7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW2lzTWVudVZpc2libGUsIHNldElzTWVudVZpc2libGVdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51RW50cmllcywgc2V0TWVudUVudHJpZXNdID0gdXNlU3RhdGU8SURlcGFydG1lbnRbXT4oKTtcclxuXHJcbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVwdG9zKCl7XHJcbiAgICBjb25zdCBhcG9sbG9DbGllbnQgPSBpbml0aWFsaXplQXBvbGxvQ2xpZW50KCk7XHJcbiAgICBjb25zdCBtRW50cmllcyA9IGF3YWl0IGdldERlcGFydG1lbnRzKGFwb2xsb0NsaWVudCk7XHJcbiAgICBzZXRNZW51RW50cmllcyhtRW50cmllcylcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgZ2V0RGVwdG9zKClcclxuICB9KVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnZpbmd9IHN0eWxlPXtzdHlsZXMuY2FydmluZ30+PC9kaXY+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubG9nby5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvLmltYWdlfSBzcmM9e2xvZ29JbWFnZX0gYWx0PVwiTG9nb1wiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPERyb3Bkb3duXHJcbiAgICAgICAgICAgIGxhYmVsPVwiRGVwYXJ0YW1lbnRvc1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudVZpc2libGUoIWlzTWVudVZpc2libGUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQ+XHJcbiAgICAgICAgICA8YVxyXG4gICAgICAgICAgICBocmVmPXt1c2VyID8gJy9vcmRlcicgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLmJhZy5jb250YWluZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC5iYWcuaXRlbXNDb3VudGVyfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaXRlbXNDb3VudGVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge29yZGVyLmxlbmd0aH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkPlxyXG4gICAgICAgICAgPGFcclxuICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAudXNlci5jb250YWluZXJ9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB1c2VyXHJcbiAgICAgICAgICAgICAgICA/IDxDaXJjbGVBdmF0YXIgYXZhdGFyPXt1c2VyLmF2YXRhcn0gc2l6ZT1cIjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgOiA8T3V0bGluZUJ1dHRvbiBsYWJlbD1cIlJlZ8Otc3RyYXRlIG8gaW5ncmVzYVwiIC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNNZW51VmlzaWJsZSAmJlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWlsd2luZC5kZXBhcnRtZW50c01lbnUubWVudUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxEZXBhcnRtZW50c01lbnUgZGVwYXJ0bWVudHM9e21lbnVFbnRyaWVzfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9