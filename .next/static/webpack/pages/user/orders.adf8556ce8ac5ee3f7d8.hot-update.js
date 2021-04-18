webpackHotUpdate_N_E("pages/user/orders",{

/***/ "./pages/user/orders.js":
/*!******************************!*\
  !*** ./pages/user/orders.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/AuthContext */ "./context/AuthContext.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "./node_modules/@material-ui/icons/ExpandMore.js");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\user\\orders.js",
    _s = $RefreshSig$();







function orders() {
  _s();

  var _this = this;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      getToken = _useContext.getToken;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      userOrders = _useState[0],
      setUserOrders = _useState[1];

  console.log("USER ORDERS");
  console.log(userOrders);

  function getUserOrders() {
    return _getUserOrders.apply(this, arguments);
  }

  function _getUserOrders() {
    _getUserOrders = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token, response;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return getToken();

            case 2:
              token = _context.sent;
              _context.next = 5;
              return fetch("".concat(_config_globals__WEBPACK_IMPORTED_MODULE_4__["API_DOMAIN"], "/orders"), {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': "Bearer ".concat(token)
                }
              });

            case 5:
              _context.next = 7;
              return _context.sent.json();

            case 7:
              response = _context.sent;
              setUserOrders(response);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _getUserOrders.apply(this, arguments);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getUserOrders();
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: userOrders.map(function (o) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Accordion"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AccordionSummary"], {
          expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 55
          }, _this),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
            container: true,
            spacing: 2,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              xs: 8,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                gutterBottom: true,
                variant: "overline",
                children: o.createdAt
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                gutterBottom: true,
                variant: "subtitle1",
                children: o.status
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 29
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                variant: "subtitle1",
                children: o.total
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 29
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 27
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              xs: 1,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
                orientation: "vertical"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 27
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
              item: true,
              xs: 3,
              style: {
                display: "flex",
                alignItems: "center"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                variant: "h5",
                children: o.delivery_status.toUpperCase()
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 29
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 27
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AccordionDetails"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Table"], {
            size: "small",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableHead"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                  align: "center",
                  children: "ARTICULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                  align: "center",
                  children: "COLOR"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                  align: "center",
                  children: "TAMA\xD1O"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 33
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableBody"], {
              children: o.variants.map(function (v) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                    children: v.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                    align: "center",
                    children: v.color
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                    align: "center",
                    children: v.size
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 45
                  }, _this)]
                }, "Variant-".concat(v.id), true, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 41
                }, _this);
              })
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 33
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }, _this)]
      }, "Order-".concat(o.id), true, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false);
}

_s(orders, "4sXCDC7s85shBMo9U+fYye/iwZs=");

/* harmony default export */ __webpack_exports__["default"] = (orders);
/*
{
                userOrders.map((o)=>(
                    <div key={`Order-${o.id}`}>
                        <div>
                            <p>{o.createdAt}</p>
                            <p>{o.delivery_status}</p>
                            <p>{o.pagada}</p>
                            <p>{o.total}</p>
                        </div>
                        {o.variants.map((v)=>(
                            <div key={`Variant-${v.id}`}>
                                <p>{v.name}</p>
                                <p>{v.color}</p>
                                <p>{v.size}</p>
                            </div>
                        ))}
                        <hr/>
                    </div>
                ))
            }



*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRlcnMuanMiXSwibmFtZXMiOlsib3JkZXJzIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZ2V0VG9rZW4iLCJ1c2VTdGF0ZSIsInVzZXJPcmRlcnMiLCJzZXRVc2VyT3JkZXJzIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJPcmRlcnMiLCJ0b2tlbiIsImZldGNoIiwiQVBJX0RPTUFJTiIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJtYXAiLCJvIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwidG90YWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImRlbGl2ZXJ5X3N0YXR1cyIsInRvVXBwZXJDYXNlIiwidmFyaWFudHMiLCJ2IiwibmFtZSIsImNvbG9yIiwic2l6ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsb0JBRU9DLHdEQUFVLENBQUNDLDREQUFELENBRmpCO0FBQUEsTUFFTkMsUUFGTSxlQUVOQSxRQUZNOztBQUFBLGtCQUdzQkMsc0RBQVEsQ0FBQyxFQUFELENBSDlCO0FBQUEsTUFHUEMsVUFITztBQUFBLE1BR0tDLGFBSEw7O0FBSWRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7O0FBTGMsV0FPQ0ksYUFQRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3UkFPZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3Qk4sUUFBUSxFQURoQzs7QUFBQTtBQUNVTyxtQkFEVjtBQUFBO0FBQUEscUJBRWtDQyxLQUFLLFdBQUlDLDBEQUFKLGNBQXlCO0FBQ3hEQyxzQkFBTSxFQUFFLEtBRGdEO0FBRXhEQyx1QkFB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QUYsQ0FBV1QsR0FBWCxDQUFlLFVBQUNVLENBQUQ7QUFBQSxvQ0FDWixxRUFBQywwREFBRDtBQUFBLDBDQUNJLHFFQUFDLDJEQUFEO0FBQUEsOEJBQ0tBLENBQUMsQ0FBQ0M7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUkscUVBQUMsMkRBQUQ7QUFBVyx5QkFBSyxFQUFDLFFBQWpCO0FBQUEsOEJBQ0tELENBQUMsQ0FBQ0U7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKLGVBT0kscUVBQUMsMkRBQUQ7QUFBVyx5QkFBSyxFQUFDLFFBQWpCO0FBQUEsOEJBQ0tGLENBQUMsQ0FBQ0c7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQVBKO0FBQUEscUNBQTBCSCxDQUFDLENBQUNJLEVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFk7QUFBQSxlQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBLHlCQUEwQmIsQ0FBQyxDQUFDYSxFQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFc7QUFBQSxLQUFmO0FBRlIsbUJBREo7QUErREg7O0dBdEZRaEMsTTs7QUF3Rk1BLHFFQUFmO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9vcmRlcnMuYWRmODU1NmNlOGFjNWVlM2Y3ZDguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBBUElfRE9NQUlOIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCBBdXRoQ29udGV4dCBmcm9tICdAL2NvbnRleHQvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb24sIEFjY29yZGlvblN1bW1hcnksIFR5cG9ncmFwaHksIEFjY29yZGlvbkRldGFpbHMsIEdyaWQsIERpdmlkZXIsIFRhYmxlLCBUYWJsZUhlYWQsIFRhYmxlQm9keSwgVGFibGVSb3csIFRhYmxlQ2VsbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnXHJcblxyXG5cclxuZnVuY3Rpb24gb3JkZXJzKCkge1xyXG5cclxuICAgIGNvbnN0IHsgZ2V0VG9rZW4gfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgY29uc3QgW3VzZXJPcmRlcnMsIHNldFVzZXJPcmRlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zb2xlLmxvZyhcIlVTRVIgT1JERVJTXCIpXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyT3JkZXJzKVxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJPcmRlcnMoKXtcclxuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKCk7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCAoYXdhaXQgZmV0Y2goYCR7QVBJX0RPTUFJTn0vb3JkZXJzYCwge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pKS5qc29uKClcclxuICAgICAgICAgIHNldFVzZXJPcmRlcnMocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGdldFVzZXJPcmRlcnMoKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyT3JkZXJzLm1hcCgobyk9PihcclxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uICBrZXk9e2BPcmRlci0ke28uaWR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uU3VtbWFyeSBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJvdmVybGluZVwiID57by5jcmVhdGVkQXR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e28uc3RhdHVzfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIiA+e28udG90YWx9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG9yaWVudGF0aW9uPVwidmVydGljYWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXszfSBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCI+e28uZGVsaXZlcnlfc3RhdHVzLnRvVXBwZXJDYXNlKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbkRldGFpbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGUgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUlRJQ1VMT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFNQcORT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge28udmFyaWFudHMubWFwKCh2KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17YFZhcmlhbnQtJHt2LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Yuc2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25EZXRhaWxzPiAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlcnNcclxuXHJcblxyXG4vKlxyXG57XHJcbiAgICAgICAgICAgICAgICB1c2VyT3JkZXJzLm1hcCgobyk9PihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YE9yZGVyLSR7by5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvLmNyZWF0ZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57by5kZWxpdmVyeV9zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e28ucGFnYWRhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvLnZhcmlhbnRzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgVmFyaWFudC0ke3YuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3YubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3YuY29sb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2LnNpemV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4qL1xyXG4iXSwic291cmNlUm9vdCI6IiJ9