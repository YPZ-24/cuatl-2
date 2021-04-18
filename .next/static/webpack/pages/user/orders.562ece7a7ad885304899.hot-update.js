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
/* harmony import */ var _utils_format_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/utils/format-price */ "./utils/format-price.ts");





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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
      container: true,
      spacing: 5,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
          variant: "h4",
          align: "center",
          children: "MIS COMPRAS"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
        item: true,
        xs: 12,
        children: userOrders.map(function (o) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Accordion"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["AccordionSummary"], {
              expandIcon: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 63
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
                    children: new Date(o.createdAt).toLocaleString()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                    gutterBottom: true,
                    variant: "subtitle1",
                    children: o.status
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 37
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                    variant: "subtitle1",
                    children: Object(_utils_format_price__WEBPACK_IMPORTED_MODULE_8__["default"])('MXN', o.total)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 47,
                    columnNumber: 37
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  xs: 1,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Divider"], {
                    orientation: "vertical"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 33
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
                  item: true,
                  xs: 3,
                  style: {
                    display: "flex",
                    alignItems: "center"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
                    variant: "h6",
                    children: o.delivery_status.toUpperCase()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 57,
                    columnNumber: 37
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 33
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 33
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
                      lineNumber: 67,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                      align: "center",
                      children: "COLOR"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 70,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                      align: "center",
                      children: "TAMA\xD1O"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 73,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 41
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableBody"], {
                  children: o.variants.map(function (v) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableRow"], {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                        children: v.name
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 81,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                        align: "center",
                        children: v.color
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["TableCell"], {
                        align: "center",
                        children: v.size
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 87,
                        columnNumber: 53
                      }, _this)]
                    }, "Variant-".concat(v.id), true, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 49
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 41
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 33
            }, _this)]
          }, "Order-".concat(o.id), true, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 29
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
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

/***/ }),

/***/ "./utils/format-price.ts":
/*!*******************************!*\
  !*** ./utils/format-price.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/**
 * This function is used to format prices to make them look like:
 * US 300.90, MX 1589.90 or GB 12.00
 *
 * Currency codes (ISO 4217 currency codes) are passed as arguments depending on
 * i18n global context.
 */
var formatPrice = function formatPrice(currencyCode, price) {
  //: force two decimals
  var priceWithDecimals = parseFloat(String(price)).toFixed(2);
  return "".concat(currencyCode.toUpperCase(), " ").concat(priceWithDecimals);
};

/* harmony default export */ __webpack_exports__["default"] = (formatPrice);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9vcmRlcnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2Zvcm1hdC1wcmljZS50cyJdLCJuYW1lcyI6WyJvcmRlcnMiLCJ1c2VDb250ZXh0IiwiQXV0aENvbnRleHQiLCJnZXRUb2tlbiIsInVzZVN0YXRlIiwidXNlck9yZGVycyIsInNldFVzZXJPcmRlcnMiLCJjb25zb2xlIiwibG9nIiwiZ2V0VXNlck9yZGVycyIsInRva2VuIiwiZmV0Y2giLCJBUElfRE9NQUlOIiwibWV0aG9kIiwiaGVhZGVycyIsImpzb24iLCJyZXNwb25zZSIsInVzZUVmZmVjdCIsIm1hcCIsIm8iLCJEYXRlIiwiY3JlYXRlZEF0IiwidG9Mb2NhbGVTdHJpbmciLCJzdGF0dXMiLCJmb3JtYXRQcmljZSIsInRvdGFsIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJkZWxpdmVyeV9zdGF0dXMiLCJ0b1VwcGVyQ2FzZSIsInZhcmlhbnRzIiwidiIsIm5hbWUiLCJjb2xvciIsInNpemUiLCJpZCIsImN1cnJlbmN5Q29kZSIsInByaWNlIiwicHJpY2VXaXRoRGVjaW1hbHMiLCJwYXJzZUZsb2F0IiwiU3RyaW5nIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLG9CQUVPQyx3REFBVSxDQUFDQyw0REFBRCxDQUZqQjtBQUFBLE1BRU5DLFFBRk0sZUFFTkEsUUFGTTs7QUFBQSxrQkFHc0JDLHNEQUFRLENBQUMsRUFBRCxDQUg5QjtBQUFBLE1BR1BDLFVBSE87QUFBQSxNQUdLQyxhQUhMOztBQUlkQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxVQUFaOztBQUxjLFdBT0NJLGFBUEQ7QUFBQTtBQUFBOztBQUFB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QWY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdEJKO0FBQUEsNkJBQTBCaEIsQ0FBQyxDQUFDZ0IsRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVztBQUFBLFNBQWY7QUFGUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFzRUg7O0dBN0ZRbkMsTTs7QUErRk1BLHFFQUFmO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xJQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTXdCLFdBQXFFLEdBQUcsU0FBeEVBLFdBQXdFLENBQUNZLFlBQUQsRUFBZUMsS0FBZixFQUF5QjtBQUNyRztBQUNBLE1BQU1DLGlCQUFpQixHQUFHQyxVQUFVLENBQUNDLE1BQU0sQ0FBQ0gsS0FBRCxDQUFQLENBQVYsQ0FBMEJJLE9BQTFCLENBQWtDLENBQWxDLENBQTFCO0FBRUEsbUJBQVVMLFlBQVksQ0FBQ1AsV0FBYixFQUFWLGNBQXdDUyxpQkFBeEM7QUFDRCxDQUxEOztBQU9lZCwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL29yZGVycy41NjJlY2U3YTdhZDg4NTMwNDg5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEFQSV9ET01BSU4gfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IEF1dGhDb250ZXh0IGZyb20gJ0AvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcbmltcG9ydCB7IEFjY29yZGlvbiwgQWNjb3JkaW9uU3VtbWFyeSwgVHlwb2dyYXBoeSwgQWNjb3JkaW9uRGV0YWlscywgR3JpZCwgRGl2aWRlciwgVGFibGUsIFRhYmxlSGVhZCwgVGFibGVCb2R5LCBUYWJsZVJvdywgVGFibGVDZWxsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBFeHBhbmRNb3JlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRXhwYW5kTW9yZSdcclxuaW1wb3J0IGZvcm1hdFByaWNlIGZyb20gJ0AvdXRpbHMvZm9ybWF0LXByaWNlJztcclxuXHJcblxyXG5mdW5jdGlvbiBvcmRlcnMoKSB7XHJcblxyXG4gICAgY29uc3QgeyBnZXRUb2tlbiB9ID0gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbiAgICBjb25zdCBbdXNlck9yZGVycywgc2V0VXNlck9yZGVyc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnNvbGUubG9nKFwiVVNFUiBPUkRFUlNcIilcclxuICAgIGNvbnNvbGUubG9nKHVzZXJPcmRlcnMpXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlck9yZGVycygpe1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgZ2V0VG9rZW4oKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IChhd2FpdCBmZXRjaChgJHtBUElfRE9NQUlOfS9vcmRlcnNgLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSkpLmpzb24oKVxyXG4gICAgICAgICAgc2V0VXNlck9yZGVycyhyZXNwb25zZSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgZ2V0VXNlck9yZGVycygpXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXs1fT5cclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfT5cclxuICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBhbGlnbj1cImNlbnRlclwiPk1JUyBDT01QUkFTPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlck9yZGVycy5tYXAoKG8pPT4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uICBrZXk9e2BPcmRlci0ke28uaWR9YH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBY2NvcmRpb25TdW1tYXJ5IGV4cGFuZEljb249ezxFeHBhbmRNb3JlSWNvbiAvPn0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJvdmVybGluZVwiID57bmV3IERhdGUoby5jcmVhdGVkQXQpLnRvTG9jYWxlU3RyaW5nKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cInN1YnRpdGxlMVwiID57by5zdGF0dXN9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCIgPntmb3JtYXRQcmljZSgnTVhOJyxvLnRvdGFsKX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17M30gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e28uZGVsaXZlcnlfc3RhdHVzLnRvVXBwZXJDYXNlKCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwgYWxpZ249XCJjZW50ZXJcIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBUlRJQ1VMT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBhbGlnbj1cImNlbnRlclwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTE9SXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFNQcORT1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvLnZhcmlhbnRzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93IGtleT17YFZhcmlhbnQtJHt2LmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7di5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2LmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsIGFsaWduPVwiY2VudGVyXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt2LnNpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uRGV0YWlscz4gICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBvcmRlcnNcclxuXHJcblxyXG4vKlxyXG57XHJcbiAgICAgICAgICAgICAgICB1c2VyT3JkZXJzLm1hcCgobyk9PihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17YE9yZGVyLSR7by5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvLmNyZWF0ZWRBdH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57by5kZWxpdmVyeV9zdGF0dXN9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e28ucGFnYWRhfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntvLnRvdGFsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtvLnZhcmlhbnRzLm1hcCgodik9PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgVmFyaWFudC0ke3YuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3YubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3YuY29sb3J9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt2LnNpemV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4qL1xyXG4iLCIvKipcclxuICogVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGZvcm1hdCBwcmljZXMgdG8gbWFrZSB0aGVtIGxvb2sgbGlrZTpcclxuICogVVMgMzAwLjkwLCBNWCAxNTg5LjkwIG9yIEdCIDEyLjAwXHJcbiAqXHJcbiAqIEN1cnJlbmN5IGNvZGVzIChJU08gNDIxNyBjdXJyZW5jeSBjb2RlcykgYXJlIHBhc3NlZCBhcyBhcmd1bWVudHMgZGVwZW5kaW5nIG9uXHJcbiAqIGkxOG4gZ2xvYmFsIGNvbnRleHQuXHJcbiAqL1xyXG5jb25zdCBmb3JtYXRQcmljZTogKGN1cnJlbmN5Q29kZTogc3RyaW5nLCBwcmljZTogbnVtYmVyIHwgc3RyaW5nKSA9PiBzdHJpbmcgPSAoY3VycmVuY3lDb2RlLCBwcmljZSkgPT4ge1xyXG4gIC8vOiBmb3JjZSB0d28gZGVjaW1hbHNcclxuICBjb25zdCBwcmljZVdpdGhEZWNpbWFscyA9IHBhcnNlRmxvYXQoU3RyaW5nKHByaWNlKSkudG9GaXhlZCgyKTtcclxuXHJcbiAgcmV0dXJuIGAke2N1cnJlbmN5Q29kZS50b1VwcGVyQ2FzZSgpfSAke3ByaWNlV2l0aERlY2ltYWxzfWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmb3JtYXRQcmljZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==