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
/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/images/logo.svg */ "./assets/images/logo.svg");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/lib/apollo-client */ "./lib/apollo-client.ts");
/* harmony import */ var _actions_fetch_departments__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/actions/fetch-departments */ "./actions/fetch-departments.ts");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LocalMall */ "./node_modules/@material-ui/icons/LocalMall.js");
/* harmony import */ var _material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/AccountCircle */ "./node_modules/@material-ui/icons/AccountCircle.js");
/* harmony import */ var _material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _DrawerDeptops__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DrawerDeptops */ "./components/navbars/DrawerDeptops.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowDown */ "./node_modules/@material-ui/icons/KeyboardArrowDown.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_15__);




var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\Omnibar.tsx",
    _s = $RefreshSig$();














Omnibar.propTypes = {
  menuEntries: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array
};
Omnibar.defaultProps = {
  menuEntries: []
};
var useStyles = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["makeStyles"])({
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    height: "50px",
    width: "12px"
  },
  img: {
    height: "100%",
    width: "100%"
  }
});
var classess = {
  logo: {
    container: "\n      flex\n      flex-row\n      flex-nowrap\n      h-12\n      justify-start\n      w-1/3\n    ",
    image: "\n      max-h-full\n      max-w-full\n    "
  }
};
function Omnibar() {
  _s();

  var classes = useStyles();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      user = _useContext.user;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      order = _useContext2.order;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      menuEntries = _useState[0],
      setMenuEntries = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      open = _useState2[0],
      setOpen = _useState2[1];

  var colorIconUser = user ? "primary" : "default";

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
              apolloClient = Object(_lib_apollo_client__WEBPACK_IMPORTED_MODULE_8__["initializeApolloClient"])();
              _context.next = 3;
              return Object(_actions_fetch_departments__WEBPACK_IMPORTED_MODULE_9__["getDepartments"])(apolloClient);

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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["AppBar"], {
    position: "static",
    style: {
      background: "white",
      padding: "10px 20px"
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
      container: true,
      spacing: 1,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 2,
        className: classes.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          href: "/",
          className: classes.imgContainer,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: classess.logo.image,
            src: _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
            alt: "Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 8,
        className: classes.grid,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Button"], {
          fullWidth: true,
          onClick: function onClick() {
            setOpen(true);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Typography"], {
            variant: "h6",
            color: "primary",
            children: "DEPARTAMENTOS"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_KeyboardArrowDown__WEBPACK_IMPORTED_MODULE_15___default.a, {
            fontSize: "large",
            color: "primary"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_DrawerDeptops__WEBPACK_IMPORTED_MODULE_14__["default"], {
          open: open,
          setOpen: setOpen,
          departments: menuEntries
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 1,
        className: classes.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          href: user ? '/order' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Badge"], {
            badgeContent: order.length,
            color: "primary",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_LocalMall__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__["Grid"], {
        item: true,
        xs: 1,
        className: classes.grid,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          color: colorIconUser,
          href: user ? '/user/orders' : '/auth',
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AccountCircle__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, this);
}

_s(Omnibar, "UrKsfieZ1CnKiDfKEDjRzceA64c=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL09tbmliYXIudHN4Il0sIm5hbWVzIjpbIk9tbmliYXIiLCJwcm9wVHlwZXMiLCJtZW51RW50cmllcyIsIlByb3BUeXBlcyIsImFycmF5IiwiZGVmYXVsdFByb3BzIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsImdyaWQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaW1nQ29udGFpbmVyIiwiaGVpZ2h0Iiwid2lkdGgiLCJpbWciLCJjbGFzc2VzcyIsImxvZ28iLCJjb250YWluZXIiLCJpbWFnZSIsImNsYXNzZXMiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJ1c2VyIiwiT3JkZXJDb250ZXh0Iiwib3JkZXIiLCJ1c2VTdGF0ZSIsInNldE1lbnVFbnRyaWVzIiwib3BlbiIsInNldE9wZW4iLCJjb2xvckljb25Vc2VyIiwiZ2V0RGVwdG9zIiwiYXBvbGxvQ2xpZW50IiwiaW5pdGlhbGl6ZUFwb2xsb0NsaWVudCIsImdldERlcGFydG1lbnRzIiwibUVudHJpZXMiLCJ1c2VFZmZlY3QiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImxvZ29JbWFnZSIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsT0FBTyxDQUFDQyxTQUFSLEdBQW9CO0FBQ2xCQyxhQUFXLEVBQUVDLGlEQUFTLENBQUNDO0FBREwsQ0FBcEI7QUFJQUosT0FBTyxDQUFDSyxZQUFSLEdBQXVCO0FBQ3JCSCxhQUFXLEVBQUU7QUFEUSxDQUF2QjtBQUlBLElBQU1JLFNBQVMsR0FBR0MscUVBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLFdBQU8sRUFBRSxNQURMO0FBRUpDLGtCQUFjLEVBQUUs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QixPO1VBQ05NLFM7OztLQURNTixPO0FBbUR2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjA0NzU1YWNlN2JiMmRmM2YxMDg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgbG9nb0ltYWdlIGZyb20gJ0AvYXNzZXRzL2ltYWdlcy9sb2dvLnN2Zyc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgT3JkZXJDb250ZXh0IGZyb20gJ0AvY29udGV4dC9PcmRlckNvbnRleHQnO1xyXG5pbXBvcnQgeyBpbml0aWFsaXplQXBvbGxvQ2xpZW50IH0gZnJvbSAnQC9saWIvYXBvbGxvLWNsaWVudCc7XHJcbmltcG9ydCB7IGdldERlcGFydG1lbnRzIH0gZnJvbSAnQC9hY3Rpb25zL2ZldGNoLWRlcGFydG1lbnRzJztcclxuaW1wb3J0IElEZXBhcnRtZW50IGZyb20gJ0AvbW9kZWxzL0lEZXBhcnRtZW50JztcclxuaW1wb3J0IHtHcmlkLCBCYWRnZSwgQXBwQmFyLCBCdXR0b24sIG1ha2VTdHlsZXMsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgTG9jYWxNYWxsSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG9jYWxNYWxsJztcclxuaW1wb3J0IEFjY291bnRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BY2NvdW50Q2lyY2xlJztcclxuaW1wb3J0IERyYXdlckRlcHRvcyBmcm9tICcuL0RyYXdlckRlcHRvcHMnXHJcbmltcG9ydCBLZXlib2FyZEFycm93RG93bkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dEb3duJztcclxuXHJcbk9tbmliYXIucHJvcFR5cGVzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBQcm9wVHlwZXMuYXJyYXlcclxufTtcclxuXHJcbk9tbmliYXIuZGVmYXVsdFByb3BzID0ge1xyXG4gIG1lbnVFbnRyaWVzOiBbXVxyXG59O1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgZ3JpZDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICB9LFxyXG4gIGltZ0NvbnRhaW5lcjp7XHJcbiAgICBoZWlnaHQ6IFwiNTBweFwiLFxyXG4gICAgd2lkdGggOiBcIjEycHhcIlxyXG4gIH0sXHJcbiAgaW1nOntcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICB3aWR0aCA6IFwiMTAwJVwiXHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IGNsYXNzZXNzID0ge1xyXG4gIGxvZ286IHtcclxuICAgIGNvbnRhaW5lcjogYFxyXG4gICAgICBmbGV4XHJcbiAgICAgIGZsZXgtcm93XHJcbiAgICAgIGZsZXgtbm93cmFwXHJcbiAgICAgIGgtMTJcclxuICAgICAganVzdGlmeS1zdGFydFxyXG4gICAgICB3LTEvM1xyXG4gICAgYCxcclxuICAgIGltYWdlOiBgXHJcbiAgICAgIG1heC1oLWZ1bGxcclxuICAgICAgbWF4LXctZnVsbFxyXG4gICAgYCxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT21uaWJhcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgY29uc3QgW21lbnVFbnRyaWVzLCBzZXRNZW51RW50cmllc10gPSB1c2VTdGF0ZTxJRGVwYXJ0bWVudFtdPigpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IGNvbG9ySWNvblVzZXIgPSB1c2VyID8gXCJwcmltYXJ5XCIgOiBcImRlZmF1bHRcIlxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBnZXREZXB0b3MoKXtcclxuICAgIGNvbnN0IGFwb2xsb0NsaWVudCA9IGluaXRpYWxpemVBcG9sbG9DbGllbnQoKTtcclxuICAgIGNvbnN0IG1FbnRyaWVzID0gYXdhaXQgZ2V0RGVwYXJ0bWVudHMoYXBvbGxvQ2xpZW50KTtcclxuICAgIHNldE1lbnVFbnRyaWVzKG1FbnRyaWVzKVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICBnZXREZXB0b3MoKVxyXG4gIH0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QXBwQmFyIHBvc2l0aW9uPVwic3RhdGljXCIgc3R5bGU9e3tcclxuICAgICAgYmFja2dyb3VuZDogXCJ3aGl0ZVwiLFxyXG4gICAgICBwYWRkaW5nOiBcIjEwcHggMjBweFwiXHJcbiAgICB9fT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezF9PlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSA+XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWdDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlc3MubG9nby5pbWFnZX0gc3JjPXtsb2dvSW1hZ2V9IGFsdD1cIkxvZ29cIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fSBjbGFzc05hbWU9e2NsYXNzZXMuZ3JpZH0gPlxyXG4gICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggb25DbGljaz17KCk9PntzZXRPcGVuKHRydWUpfX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwicHJpbWFyeVwiPkRFUEFSVEFNRU5UT1M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93RG93bkljb24gZm9udFNpemU9XCJsYXJnZVwiIGNvbG9yPVwicHJpbWFyeVwiLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPERyYXdlckRlcHRvcyBvcGVuPXtvcGVufSBzZXRPcGVuPXtzZXRPcGVufSBkZXBhcnRtZW50cz17bWVudUVudHJpZXN9Lz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWQgaXRlbSB4cz17MX0gY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWR9ID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGhyZWY9e3VzZXIgPyAnL29yZGVyJyA6ICcvYXV0aCd9PlxyXG4gICAgICAgICAgICA8QmFkZ2UgYmFkZ2VDb250ZW50PXtvcmRlci5sZW5ndGh9IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgIDxMb2NhbE1hbGxJY29uIC8+XHJcbiAgICAgICAgICAgIDwvQmFkZ2U+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9IGNsYXNzTmFtZT17Y2xhc3Nlcy5ncmlkfSA+XHJcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBjb2xvcj17Y29sb3JJY29uVXNlcn0gaHJlZj17dXNlciA/ICcvdXNlci9vcmRlcnMnIDogJy9hdXRoJ30+XHJcbiAgICAgICAgICAgIDxBY2NvdW50Q2lyY2xlSWNvbiAvPlxyXG4gICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9BcHBCYXI+XHJcbiAgKTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==