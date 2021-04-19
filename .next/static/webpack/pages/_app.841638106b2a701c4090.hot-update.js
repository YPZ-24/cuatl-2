webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbars/DrawerDeptops.js":
/*!*********************************************!*\
  !*** ./components/navbars/DrawerDeptops.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");

var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\navbars\\DrawerDeptops.js";



function DrawerDeptops(_ref) {
  var _this = this;

  var open = _ref.open,
      setOpen = _ref.setOpen,
      departments = _ref.departments;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      open: open,
      onClose: function onClose() {
        setOpen(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["List"], {
        children: departments ? departments.map(function (d) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
              href: "/store/products?department=".concat(d.slug),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
                button: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                  variant: "h6",
                  children: d.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 15,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 14,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 29
            }, _this), d.categories.map(function (c) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                  href: "/store/products?department=".concat(d.slug, "&category=").concat(c.slug),
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
                    button: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                      style: {
                        paddingLeft: "20px"
                      },
                      variant: "subtitle1",
                      children: c.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 23,
                      columnNumber: 49
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 22,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 21,
                  columnNumber: 41
                }, _this), c.subcategories.map(function (sc) {
                  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Link"], {
                    href: "/store/products?department=".concat(d.slug, "&category=").concat(c.slug, "&subcategory=").concat(sc.slug),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
                      button: true,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
                        style: {
                          paddingLeft: "30px"
                        },
                        variant: "subtitle2",
                        children: sc.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 32,
                        columnNumber: 57
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 31,
                      columnNumber: 53
                    }, _this)
                  }, sc.slug, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 49
                  }, _this);
                })]
              }, c.slug, true, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 37
              }, _this);
            }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Divider"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, _this)]
          }, d.slug, true, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 25
          }, _this);
        }) : null
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = DrawerDeptops;
/* harmony default export */ __webpack_exports__["default"] = (DrawerDeptops);

var _c;

$RefreshReg$(_c, "DrawerDeptops");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXJzL0RyYXdlckRlcHRvcHMuanMiXSwibmFtZXMiOlsiRHJhd2VyRGVwdG9wcyIsIm9wZW4iLCJzZXRPcGVuIiwiZGVwYXJ0bWVudHMiLCJtYXAiLCJkIiwic2x1ZyIsIm5hbWUiLCJjYXRlZ29yaWVzIiwiYyIsInBhZGRpbmdMZWZ0Iiwic3ViY2F0ZWdvcmllcyIsInNjIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGFBQVQsT0FBcUQ7QUFBQTs7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBdkJDLE9BQXVCLFFBQXZCQSxPQUF1QjtBQUFBLE1BQWRDLFdBQWMsUUFBZEEsV0FBYztBQUNqRCxzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHdEQUFEO0FBQVEsVUFBSSxFQUFFRixJQUFkO0FBQW9CLGFBQU8sRUFBRSxtQkFBSTtBQUFDQyxlQUFPLENBQUMsS0FBRCxDQUFQO0FBQWUsT0FBakQ7QUFBQSw2QkFDSSxxRUFBQyxzREFBRDtBQUFBLGtCQUVJQyxXQUFXLEdBQ1hBLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQixVQUFDQyxDQUFEO0FBQUEsOEJBQ1oscUVBQUMsOENBQUQ7QUFBQSxvQ0FDSSxxRUFBQyxzREFBRDtBQUFNLGtCQUFJLHVDQUFnQ0EsQ0FBQyxDQUFDQyxJQUFsQyxDQUFWO0FBQUEscUNBQ0kscUVBQUMsMERBQUQ7QUFBVSxzQkFBTSxNQUFoQjtBQUFBLHVDQUNJLHFFQUFDLDREQUFEO0FBQVkseUJBQU8sRUFBQyxJQUFwQjtBQUFBLDRCQUEwQkQsQ0FBQyxDQUFDRTtBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosRUFPUUYsQ0FBQyxDQUFDRyxVQUFGLENBQWFKLEdBQWIsQ0FBaUIsVUFBQ0ssQ0FBRDtBQUFBLGtDQUNiLHFFQUFDLDhDQUFEO0FBQUEsd0NBQ0kscUVBQUMsc0RBQUQ7QUFBTSxzQkFBSSx1Q0FBZ0NKLENBQUMsQ0FBQ0MsSUFBbEMsdUJBQW1ERyxDQUFDLENBQUNILElBQXJELENBQVY7QUFBQSx5Q0FDSSxxRUFBQywwREFBRDtBQUFVLDBCQUFNLE1BQWhCO0FBQUEsMkNBQ0kscUVBQUMsNERBQUQ7QUFBWSwyQkFBSyxFQUFFO0FBQ2ZJLG1DQUFXLEVBQUU7QUFERSx1QkFBbkI7QUFFRyw2QkFBTyxFQUFDLFdBRlg7QUFBQSxnQ0FFd0JELENBQUMsQ0FBQ0Y7QUFGMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLEVBU1FFLENBQUMsQ0FBQ0UsYUFBRixDQUFnQlAsR0FBaEIsQ0FBb0IsVUFBQ1EsRUFBRDtBQUFBLHNDQUNoQixxRUFBQyxzREFBRDtBQUFvQix3QkFBSSx1Q0FBZ0NQLENBQUMsQ0FBQ0MsSUFBbEMsdUJBQW1ERyxDQUFDLENBQUNILElBQXJELDBCQUF5RU0sRUFBRSxDQUFDTixJQUE1RSxDQUF4QjtBQUFBLDJDQUNJLHFFQUFDLDBEQUFEO0FBQVUsNEJBQU0sTUFBaEI7QUFBQSw2Q0FDSSxxRUFBQyw0REFBRDtBQUFZLDZCQUFLLEVBQUU7QUFDZkkscUNBQVcsRUFBRTtBQURFLHlCQUFuQjtBQUVHLCtCQUFPLEVBQUMsV0FGWDtBQUFBLGtDQUV3QkUsRUFBRSxDQUFDTDtBQUYzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLHFCQUFXSyxFQUFFLENBQUNOLElBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEZ0I7QUFBQSxpQkFBcEIsQ0FUUjtBQUFBLGlCQUFlRyxDQUFDLENBQUNILElBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRGE7QUFBQSxhQUFqQixDQVBSLGVBOEJJLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUJKO0FBQUEsYUFBZUQsQ0FBQyxDQUFDQyxJQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBaEIsQ0FEVyxHQW1DVjtBQXJDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQThDSDs7S0EvQ1FOLGE7QUFpRE1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuODQxNjM4MTA2YjJhNzAxYzQwOTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge0ZyYWdtZW50fSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtEcmF3ZXIsIExpc3QsIExpc3RJdGVtLCBMaXN0SXRlbVRleHQsIExpbmssIERpdmlkZXIsIFR5cG9ncmFwaHl9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuZnVuY3Rpb24gRHJhd2VyRGVwdG9wcyh7b3Blbiwgc2V0T3BlbiwgZGVwYXJ0bWVudHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEcmF3ZXIgb3Blbj17b3Blbn0gb25DbG9zZT17KCk9PntzZXRPcGVuKGZhbHNlKX19PlxyXG4gICAgICAgICAgICAgICAgPExpc3Q+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVwYXJ0bWVudHMgPyBcclxuICAgICAgICAgICAgICAgICAgICBkZXBhcnRtZW50cy5tYXAoKGQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17ZC5zbHVnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc3RvcmUvcHJvZHVjdHM/ZGVwYXJ0bWVudD0ke2Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57ZC5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQuY2F0ZWdvcmllcy5tYXAoKGMpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGcmFnbWVudCBrZXk9e2Muc2x1Z30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3N0b3JlL3Byb2R1Y3RzP2RlcGFydG1lbnQ9JHtkLnNsdWd9JmNhdGVnb3J5PSR7Yy5zbHVnfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj57Yy5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3ViY2F0ZWdvcmllcy5tYXAoKHNjKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e3NjLnNsdWd9IGhyZWY9e2Avc3RvcmUvcHJvZHVjdHM/ZGVwYXJ0bWVudD0ke2Quc2x1Z30mY2F0ZWdvcnk9JHtjLnNsdWd9JnN1YmNhdGVnb3J5PSR7c2Muc2x1Z31gfSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjMwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHZhcmlhbnQ9XCJzdWJ0aXRsZTJcIj57c2MubmFtZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKSAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDpudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEcmF3ZXJEZXB0b3BzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=