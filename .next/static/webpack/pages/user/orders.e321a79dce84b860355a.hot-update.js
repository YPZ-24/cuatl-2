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
                gutterBottom: true,
                variant: "subtitle2",
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
                  children: "ARTICULO"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                  children: "COLOR"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
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
                    children: v.color
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 78,
                    columnNumber: 45
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                    children: v.size
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 45
                  }, _this)]
                }, void 0, true, {
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
        }, "Variant-".concat(v.id), false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRlcnMuanMiXSwibmFtZXMiOlsib3JkZXJzIiwidXNlQ29udGV4dCIsIkF1dGhDb250ZXh0IiwiZ2V0VG9rZW4iLCJ1c2VTdGF0ZSIsInVzZXJPcmRlcnMiLCJzZXRVc2VyT3JkZXJzIiwiY29uc29sZSIsImxvZyIsImdldFVzZXJPcmRlcnMiLCJ0b2tlbiIsImZldGNoIiwiQVBJX0RPTUFJTiIsIm1ldGhvZCIsImhlYWRlcnMiLCJqc29uIiwicmVzcG9uc2UiLCJ1c2VFZmZlY3QiLCJtYXAiLCJvIiwiY3JlYXRlZEF0Iiwic3RhdHVzIiwidG90YWwiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImRlbGl2ZXJ5X3N0YXR1cyIsInRvVXBwZXJDYXNlIiwidmFyaWFudHMiLCJ2IiwibmFtZSIsImNvbG9yIiwic2l6ZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQUEsb0JBRU9DLHdEQUFVLENBQUNDLDREQUFELENBRmpCO0FBQUEsTUFFTkMsUUFGTSxlQUVOQSxRQUZNOztBQUFBLGtCQUdzQkMsc0RBQVEsQ0FBQyxFQUFELENBSDlCO0FBQUEsTUFHUEMsVUFITztBQUFBLE1BR0tDLGFBSEw7O0FBSWRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlILFVBQVo7O0FBTGMsV0FPQ0ksYUFQRDtBQUFBO0FBQUE7O0FBQUE7QUFBQSx3UkFPZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUN3Qk4sUUFBUSxFQURoQzs7QUFBQTtBQUNVTyxtQkFEVjtBQUFBO0FBQUEscUJBRWtDQyxLQUFLLFdBQUlDLDBEQUFKLGNBQXlCO0FBQ3hEQyxzQkFBTSxFQUFFLEtBRGdEO0FBRXhEQyx1QkFB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REFBRDtBQUFBLDBDQUNJLHFFQUFDLDJEQUFEO0FBQUEsOEJBQ0tBLENBQUMsQ0FBQ0M7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURKLGVBSUkscUVBQUMsMkRBQUQ7QUFBQSw4QkFDS0QsQ0FBQyxDQUFDRTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBSkosZUFPSSxxRUFBQywyREFBRDtBQUFBLDhCQUNLRixDQUFDLENBQUNHO0FBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRFk7QUFBQSxlQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESiw2QkFBa0NILENBQUMsQ0FBQ0ksRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF0Qko7QUFBQSx5QkFBMEJiLENBQUMsQ0FBQ2EsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURXO0FBQUEsS0FBZjtBQUZSLG1CQURKO0FBa0VIOztHQXpGUWhDLE07O0FBMkZNQSxxRUFBZjtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvb3JkZXJzLmUzMjFhNzlkY2U4NGI4NjAzNTVhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQVBJX0RPTUFJTiB9IGZyb20gJ0AvY29uZmlnL2dsb2JhbHMnO1xyXG5pbXBvcnQgQXV0aENvbnRleHQgZnJvbSAnQC9jb250ZXh0L0F1dGhDb250ZXh0JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uLCBBY2NvcmRpb25TdW1tYXJ5LCBUeXBvZ3JhcGh5LCBBY2NvcmRpb25EZXRhaWxzLCBHcmlkLCBEaXZpZGVyLCBUYWJsZSwgVGFibGVIZWFkLCBUYWJsZUJvZHksIFRhYmxlUm93LCBUYWJsZUNlbGwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJ1xyXG5cclxuXHJcbmZ1bmN0aW9uIG9yZGVycygpIHtcclxuXHJcbiAgICBjb25zdCB7IGdldFRva2VuIH0gPSB1c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICAgIGNvbnN0IFt1c2VyT3JkZXJzLCBzZXRVc2VyT3JkZXJzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc29sZS5sb2coXCJVU0VSIE9SREVSU1wiKVxyXG4gICAgY29uc29sZS5sb2codXNlck9yZGVycylcclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRVc2VyT3JkZXJzKCl7XHJcbiAgICAgICAgY29uc3QgdG9rZW4gPSBhd2FpdCBnZXRUb2tlbigpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgKGF3YWl0IGZldGNoKGAke0FQSV9ET01BSU59L29yZGVyc2AsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KSkuanNvbigpXHJcbiAgICAgICAgICBzZXRVc2VyT3JkZXJzKHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBnZXRVc2VyT3JkZXJzKClcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlck9yZGVycy5tYXAoKG8pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvbiAga2V5PXtgT3JkZXItJHtvLmlkfWB9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnkgZXhwYW5kSWNvbj17PEV4cGFuZE1vcmVJY29uIC8+fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwib3ZlcmxpbmVcIiA+e28uY3JlYXRlZEF0fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwic3VidGl0bGUxXCIgPntvLnN0YXR1c308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMlwiID57by50b3RhbH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezN9IHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIj57by5kZWxpdmVyeV9zdGF0dXMudG9VcHBlckNhc2UoKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvblN1bW1hcnk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscyBrZXk9e2BWYXJpYW50LSR7di5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFSVElDVUxPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ09MT1JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQU1Bw5FPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7by52YXJpYW50cy5tYXAoKHYpPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3YubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5jb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5zaXplfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG9yZGVyc1xyXG5cclxuXHJcbi8qXHJcbntcclxuICAgICAgICAgICAgICAgIHVzZXJPcmRlcnMubWFwKChvKT0+KFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgT3JkZXItJHtvLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e28uY3JlYXRlZEF0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvLmRlbGl2ZXJ5X3N0YXR1c308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57by5wYWdhZGF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e28udG90YWx9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge28udmFyaWFudHMubWFwKCh2KT0+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BWYXJpYW50LSR7di5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57di5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57di5jb2xvcn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Yuc2l6ZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoci8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuXHJcbiovXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=