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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.carving,
        style: styles.carving
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("nav", {
        className: classes.navbar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/",
          className: classes.logo.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: classes.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.departments.container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "hidden md:block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_dropdowns_Dropdown__WEBPACK_IMPORTED_MODULE_10__["default"], {
              label: "Departamentos",
              onClick: function onClick() {
                return setIsMenuVisible(!isMenuVisible);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 186,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 185,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.linkGroup.container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: "md:hidden",
            onClick: function onClick() {
              return setIsMenuVisible(!isMenuVisible);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["MoreVertical"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 197,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 194,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: user ? '/order' : '/auth',
            className: classes.linkGroup.bag.container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_feather__WEBPACK_IMPORTED_MODULE_5__["ShoppingBag"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.linkGroup.bag.itemsCounter,
              style: styles.itemsCounter,
              children: order.length
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 205,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
            href: user ? '/user/profile' : '/auth',
            className: classes.linkGroup.user.container,
            children: user ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_avatars_CircleAvatar__WEBPACK_IMPORTED_MODULE_8__["default"], {
              avatar: user.avatar,
              size: "8"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 21
            }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_buttons_OutlineButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
              label: "Reg\xEDstrate o ingresa"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 21
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 7
    }, this), isMenuVisible && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: styles.tailwind.departmentsMenu.menuContainer,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_menus_DepartmentsMenu__WEBPACK_IMPORTED_MODULE_11__["default"], {
        departments: menuEntries
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 9
    }, this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwiY2xhc3NlcyIsImNhcnZpbmciLCJjb250YWluZXIiLCJkZXBhcnRtZW50cyIsIm1lbnUiLCJsaW5rR3JvdXAiLCJiYWciLCJpdGVtc0NvdW50ZXIiLCJ1c2VyIiwibG9nbyIsImltYWdlIiwibmF2YmFyIiwic3R5bGVzIiwiYmFja2dyb3VuZEltYWdlIiwiY2FydmluZ0ltYWdlIiwiZm9udFNpemUiLCJ0YWlsd2luZCIsImRlcGFydG1lbnRzTWVudSIsIm1lbnVDb250YWluZXIiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJPcmRlckNvbnRleHQiLCJvcmRlciIsInVzZVN0YXRlIiwiaXNNZW51VmlzaWJsZSIsInNldElzTWVudVZpc2libGUiLCJzZXRNZW51RW50cmllcyIsImdldERlcHRvcyIsImFwb2xsb0NsaWVudCIsImluaXRpYWxpemVBcG9sbG9DbGllbnQiLCJnZXREZXBhcnRtZW50cyIsIm1FbnRyaWVzIiwidXNlRWZmZWN0IiwibG9nb0ltYWdlIiwibGVuZ3RoIiwiYXZhdGFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDO0FBREwsQ0FBcEI7QUFJQUosT0FBTyxDQUFDSyxZQUFSLEdBQXVCO0FBQ3JCSCxhQUFXLEVBQUU7QUFEUSxDQUF2QjtBQUlBLElBQU1JLE9BQU8sR0FBRztBQUNkQyxTQUFPLDhDQURPO0FBT2RDLFdBQVMsb0lB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QUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQXFESVgsYUFBYSxpQkFDYjtBQUFLLGVBQVMsRUFBRVosTUFBTSxDQUFDSSxRQUFQLENBQWdCQyxlQUFoQixDQUFnQ0MsYUFBaEQ7QUFBQSw2QkFDRSxxRUFBQywwRUFBRDtBQUFpQixtQkFBVyxFQUFFdEI7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0REo7QUFBQSxrQkFERjtBQTZERDs7R0E3RXVCRixPOztLQUFBQSxPO0FBNkV2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjBlOWE3YmZmZTliMmEwMWQ3ZDZmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBNb3JlSG9yaXpvbnRhbCwgTW9yZVZlcnRpY2FsLCBTaG9wcGluZ0JhZyB9IGZyb20gJ3JlYWN0LWZlYXRoZXInO1xyXG5cclxuaW1wb3J0IGNhcnZpbmdJbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvZnJhbWUuc3ZnJztcclxuaW1wb3J0IGxvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmcnO1xyXG5pbXBvcnQgQ2lyY2xlQXZhdGFyIGZyb20gJ0AvY29tcG9uZW50cy9hdmF0YXJzL0NpcmNsZUF2YXRhcic7XHJcbmltcG9ydCBPdXRsaW5lQnV0dG9uIGZyb20gJ0AvY29tcG9uZW50cy9idXR0b25zL091dGxpbmVCdXR0b24nO1xyXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL2Ryb3Bkb3ducy9Ecm9wZG93bic7XHJcbmltcG9ydCBEZXBhcnRtZW50c01lbnUgZnJvbSAnQC9jb21wb25lbnRzL21lbnVzL0RlcGFydG1lbnRzTWVudSc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuXHJcbk9tbmliYXIucHJvcFR5cGVzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbk9tbmliYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgY2xhc3NlcyA9IHtcclxuICBjYXJ2aW5nOiBgXHJcbiAgICBiZy1yZXBlYXQteFxyXG4gICAgaC04XHJcbiAgICB3LWZ1bGxcclxuICBgLFxyXG5cclxuICBjb250YWluZXI6IGBcclxuICAgIGJnLWJzZVxyXG4gICAgZmxleFxyXG4gICAgZmxleC1jb2xcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBoLTI0XHJcbiAgICBtZDpoLTI4XHJcbiAgICByZWxhdGl2ZVxyXG4gICAgc2hhZG93XHJcbiAgICB3LWZ1bGxcclxuICAgIHotNTBcclxuICBgLFxyXG5cclxuICBkZXBhcnRtZW50czoge1xyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGN1cnNvci1wb2ludGVyXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICBgLFxyXG4gICAgbWVudTogYFxyXG4gICAgICBhYnNvbHV0ZVxyXG4gICAgICBtYXgtaC0xLzJcclxuICAgICAgdy1mdWxsXHJcbiAgICAgIHotNDBcclxuICAgIGBcclxuICB9LFxyXG5cclxuICBsaW5rR3JvdXA6IHtcclxuICAgIGJhZzoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBoaWRkZW5cclxuICAgICAgICBtZDpmbGV4XHJcbiAgICAgICAgbWQ6ZmxleC1yb3dcclxuICAgICAgICBtZDpmbGV4LW5vd3JhcFxyXG4gICAgICAgIG1kOml0ZW1zLWNlbnRlclxyXG4gICAgICAgIG1kOmp1c3RpZnktY2VudGVyXHJcbiAgICAgICAgbWQ6aC0xMlxyXG4gICAgICAgIG1kOnJlbGF0aXZlXHJcbiAgICAgICAgbWQ6dy0xMlxyXG4gICAgICBgLFxyXG4gICAgICBpdGVtc0NvdW50ZXI6IGBcclxuICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgIGJnLWFjY2VudFxyXG4gICAgICAgIGJvcmRlci0yXHJcbiAgICAgICAgYm9yZGVyLWJzZVxyXG4gICAgICAgIGZsZXhcclxuICAgICAgICBmbGV4LXJvd1xyXG4gICAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgICAgZm9udC1ib2xkXHJcbiAgICAgICAgaC01XHJcbiAgICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgICAganVzdGlmeS1jZW50ZXJcclxuICAgICAgICByaWdodC0xXHJcbiAgICAgICAgcm91bmRlZC1mdWxsXHJcbiAgICAgICAgdGV4dC1ic2VcclxuICAgICAgICB0b3AtMVxyXG4gICAgICAgIHctNVxyXG4gICAgICBgXHJcbiAgICB9LFxyXG4gICAgY29udGFpbmVyOiBgXHJcbiAgICAgIGZsZXhcclxuICAgICAgZmxleC1yb3dcclxuICAgICAgZmxleC1ub3dyYXBcclxuICAgICAgaXRlbXMtY2VudGVyXHJcbiAgICAgIGp1c3RpZnktZW5kXHJcbiAgICAgIHctMS8zXHJcbiAgICBgLFxyXG4gICAgdXNlcjoge1xyXG4gICAgICBjb250YWluZXI6IGBcclxuICAgICAgICBoaWRkZW5cclxuICAgICAgICBtZDpjdXJzb3ItcG9pbnRlclxyXG4gICAgICAgIG1kOmlubGluZS1ibG9ja1xyXG4gICAgICAgIG1kOm1sLTRcclxuICAgICAgYFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIGxvZ286IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGgtMTJcclxuICAgICAganVzdGlmeS1zdGFydFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIGltYWdlOiBgXHJcbiAgICAgIG1heC1oLWZ1bGxcclxuICAgICAgbWF4LXctZnVsbFxyXG4gICAgYCxcclxuICB9LFxyXG5cclxuICBuYXZiYXI6IGBcclxuICAgIGZsZXhcclxuICAgIGZsZXgtMVxyXG4gICAgZmxleC1yb3dcclxuICAgIGZsZXgtbm93cmFwXHJcbiAgICBpdGVtcy1jZW50ZXJcclxuICAgIGp1c3RpZnktYmV0d2VlblxyXG4gICAgcHgtN1xyXG4gIGBcclxufTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjYXJ2aW5nOiB7XHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7Y2FydmluZ0ltYWdlfScpYFxyXG4gIH0sXHJcbiAgaXRlbXNDb3VudGVyOiB7XHJcbiAgICBmb250U2l6ZTogJzAuNzVyZW0nXHJcbiAgfSxcclxuICB0YWlsd2luZDoge1xyXG4gICAgZGVwYXJ0bWVudHNNZW51OiB7XHJcbiAgICAgIG1lbnVDb250YWluZXI6IGBcclxuICAgICAgICBhYnNvbHV0ZVxyXG4gICAgICAgIG1heC1oLTEvMlxyXG4gICAgICAgIG92ZXJmbG93LXktc2Nyb2xsXHJcbiAgICAgICAgdG9wLTI0XHJcbiAgICAgICAgdy1mdWxsXHJcbiAgICAgICAgei00MFxyXG4gICAgICBgXHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT21uaWJhcigpIHtcclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gIGNvbnN0IHsgb3JkZXIgfSA9IHVzZUNvbnRleHQoT3JkZXJDb250ZXh0KTtcclxuICBjb25zdCBbaXNNZW51VmlzaWJsZSwgc2V0SXNNZW51VmlzaWJsZV0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVFbnRyaWVzLCBzZXRNZW51RW50cmllc10gPSB1c2VTdGF0ZTxJRGVwYXJ0bWVudFtdPigpO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXREZXB0b3MoKXtcclxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICAgIGNvbnN0IG1FbnRyaWVzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuICAgIHNldE1lbnVFbnRyaWVzKG1FbnRyaWVzKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXREZXB0b3MoKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnZpbmd9IHN0eWxlPXtzdHlsZXMuY2FydmluZ30+PC9kaXY+XHJcblxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmJhcn0+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ28uaW1hZ2V9IHNyYz17bG9nb0ltYWdlfSBhbHQ9XCJMb2dvXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXBhcnRtZW50cy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9ja1wiPlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93blxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXBhcnRhbWVudG9zXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudVZpc2libGUoIWlzTWVudVZpc2libGUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubGlua0dyb3VwLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZDpoaWRkZW5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzTWVudVZpc2libGUoIWlzTWVudVZpc2libGUpfT5cclxuICAgICAgICAgICAgICA8TW9yZVZlcnRpY2FsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPXt1c2VyID8gJy9vcmRlcicgOiAnL2F1dGgnfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0JhZyAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rR3JvdXAuYmFnLml0ZW1zQ291bnRlcn1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuaXRlbXNDb3VudGVyfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtvcmRlci5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgaHJlZj17dXNlciA/ICcvdXNlci9wcm9maWxlJyA6ICcvYXV0aCd9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxpbmtHcm91cC51c2VyLmNvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgPyA8Q2lyY2xlQXZhdGFyIGF2YXRhcj17dXNlci5hdmF0YXJ9IHNpemU9XCI4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgOiA8T3V0bGluZUJ1dHRvbiBsYWJlbD1cIlJlZ8Otc3RyYXRlIG8gaW5ncmVzYVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25hdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7XHJcbiAgICAgICAgaXNNZW51VmlzaWJsZSAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFpbHdpbmQuZGVwYXJ0bWVudHNNZW51Lm1lbnVDb250YWluZXJ9PlxyXG4gICAgICAgICAgPERlcGFydG1lbnRzTWVudSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=