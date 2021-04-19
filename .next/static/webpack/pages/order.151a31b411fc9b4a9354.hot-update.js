webpackHotUpdate_N_E("pages/order",{

/***/ "./components/tables/OrderTable.js":
/*!*****************************************!*\
  !*** ./components/tables/OrderTable.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _buttons_ButtonDelete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../buttons/ButtonDelete */ "./components/buttons/ButtonDelete.js");


var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\components\\tables\\OrderTable.js",
    _this = undefined;





var OrderTable = function OrderTable(_ref) {
  var order = _ref.order,
      removeProduct = _ref.removeProduct;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableContainer"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      size: "small",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableHead"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "QUITAR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRODUCTO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "COLOR"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "TAMA\xD1O"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "PRECIO"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "CANTIDAD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
            component: "th",
            children: "FINAL"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableBody"], {
        children: order.map(function (orderItem, itemNumber) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableRow"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_buttons_ButtonDelete__WEBPACK_IMPORTED_MODULE_3__["default"], {
                handlerAccept: function handlerAccept() {
                  return removeProduct(itemNumber);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.variant.color
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.variant.size
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.product.price
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TableCell"], {
              children: orderItem.product.price * orderItem.quantity
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 17
            }, _this)]
          }, itemNumber, true, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, _this);
};

_c = OrderTable;
OrderTable.propTypes = {
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
OrderTable.defaultProps = {
  order: []
};
/* harmony default export */ __webpack_exports__["default"] = (OrderTable);

var _c;

$RefreshReg$(_c, "OrderTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90YWJsZXMvT3JkZXJUYWJsZS5qcyJdLCJuYW1lcyI6WyJPcmRlclRhYmxlIiwib3JkZXIiLCJyZW1vdmVQcm9kdWN0IiwibWFwIiwib3JkZXJJdGVtIiwiaXRlbU51bWJlciIsInByb2R1Y3QiLCJuYW1lIiwidmFyaWFudCIsImNvbG9yIiwic2l6ZSIsInByaWNlIiwicXVhbnRpdHkiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE2QjtBQUFBLE1BQTFCQyxLQUEwQixRQUExQkEsS0FBMEI7QUFBQSxNQUFuQkMsYUFBbUIsUUFBbkJBLGFBQW1CO0FBRTlDLHNCQUNFLHFFQUFDLGdFQUFEO0FBQUEsMkJBQ0UscUVBQUMsdURBQUQ7QUFBTyxVQUFJLEVBQUMsT0FBWjtBQUFBLDhCQUNFLHFFQUFDLDJEQUFEO0FBQUEsK0JBQ0UscUVBQUMsMERBQUQ7QUFBQSxrQ0FDRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFJRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkYsZUFPRSxxRUFBQywyREFBRDtBQUFXLHFCQUFTLEVBQUcsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBWUUscUVBQUMsMkRBQUQ7QUFBQSxrQkFDR0QsS0FBSyxDQUFDRSxHQUFOLENBQVUsVUFBQ0MsU0FBRCxFQUFZQyxVQUFaO0FBQUEsOEJBQ1AscUVBQUMsMERBQUQ7QUFBQSxvQ0FDRSxxRUFBQywyREFBRDtBQUFBLHFDQUNFLHFFQUFDLDZEQUFEO0FBQWMsNkJBQWEsRUFBRTtBQUFBLHlCQUFJSCxhQUFhLENBQUNHLFVBQUQsQ0FBakI7QUFBQTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlELFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlILFNBQVMsQ0FBQ0ksT0FBVixDQUFrQkM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlMLFNBQVMsQ0FBQ0ksT0FBVixDQUFrQkU7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFORixlQU9FLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlOLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQks7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlQLFNBQVMsQ0FBQ1E7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFSRixlQVNFLHFFQUFDLDJEQUFEO0FBQUEsd0JBQVlSLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQkssS0FBbEIsR0FBd0JQLFNBQVMsQ0FBQ1E7QUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFURjtBQUFBLGFBQWVQLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFETztBQUFBLFNBQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0NELENBbENEOztLQUFNTCxVO0FBb0NOQSxVQUFVLENBQUNhLFNBQVgsR0FBdUI7QUFDckJaLE9BQUssRUFBRWEsaURBQVMsQ0FBQ0M7QUFESSxDQUF2QjtBQUlBZixVQUFVLENBQUNnQixZQUFYLEdBQTBCO0FBQ3hCZixPQUFLLEVBQUU7QUFEaUIsQ0FBMUI7QUFJZUQseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvb3JkZXIuMTUxYTMxYjQxMWZjOWI0YTkzNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7VGFibGVDb250YWluZXIsIFRhYmxlLCBUYWJsZUhlYWQsIFRhYmxlUm93LCBUYWJsZUJvZHksIFRhYmxlQ2VsbCwgSWNvbkJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCBCdXR0b25EZWxldGUgZnJvbSAnLi4vYnV0dG9ucy9CdXR0b25EZWxldGUnXHJcblxyXG5jb25zdCBPcmRlclRhYmxlID0gKHsgb3JkZXIsIHJlbW92ZVByb2R1Y3R9KSA9PiB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVDb250YWluZXI+XHJcbiAgICAgIDxUYWJsZSBzaXplPVwic21hbGxcIj5cclxuICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5RVUlUQVI8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+UFJPRFVDVE88L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+Q09MT1I8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+VEFNQcORTzwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICA8VGFibGVDZWxsIGNvbXBvbmVudCA9IFwidGhcIj5QUkVDSU88L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+Q0FOVElEQUQ8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb21wb25lbnQgPSBcInRoXCI+RklOQUw8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgIHtvcmRlci5tYXAoKG9yZGVySXRlbSwgaXRlbU51bWJlcikgPT4gKFxyXG4gICAgICAgICAgICAgIDxUYWJsZVJvdyBrZXk9e2l0ZW1OdW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbkRlbGV0ZSBoYW5kbGVyQWNjZXB0PXsoKT0+cmVtb3ZlUHJvZHVjdChpdGVtTnVtYmVyKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnByb2R1Y3QubmFtZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e29yZGVySXRlbS52YXJpYW50LmNvbG9yfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnZhcmlhbnQuc2l6ZX08L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGw+e29yZGVySXRlbS5wcm9kdWN0LnByaWNlfTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnF1YW50aXR5fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbD57b3JkZXJJdGVtLnByb2R1Y3QucHJpY2Uqb3JkZXJJdGVtLnF1YW50aXR5fTwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICA8L1RhYmxlPlxyXG4gICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuT3JkZXJUYWJsZS5wcm9wVHlwZXMgPSB7XHJcbiAgb3JkZXI6IFByb3BUeXBlcy5hcnJheVxyXG59O1xyXG5cclxuT3JkZXJUYWJsZS5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgb3JkZXI6IFtdXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPcmRlclRhYmxlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9