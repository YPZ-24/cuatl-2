webpackHotUpdate_N_E("pages/user/address",{

/***/ "./pages/user/address.js":
/*!*******************************!*\
  !*** ./pages/user/address.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputs/MyInput */ "./components/inputs/MyInput.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _utils_myFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/myFetch */ "./utils/myFetch.js");



var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\user\\address.js";







function address() {
  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
      var data;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!values.noExt) values.noExt = 0;
              console.log(values);
              _context.next = 4;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: "/addresses",
                body: values
              });

            case 4:
              data = _context.sent;
              console.log("DATA");
              console.log(data);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    maxWidth: "xs",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h5",
      align: "center",
      children: "DIRECCI\xD3N"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: {
        estado: '',
        delegacion: '',
        colonia: '',
        calle: '',
        noInt: 0,
        noExt: 0,
        cp: 0
      },
      onSubmit: function onSubmit(values) {
        return handleSubmit(values);
      },
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
        estado: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required(),
        delegacion: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required(),
        colonia: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required(),
        calle: yup__WEBPACK_IMPORTED_MODULE_7__["string"]().required(),
        noInt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().min(1).required(),
        noExt: yup__WEBPACK_IMPORTED_MODULE_7__["number"](),
        cp: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().min(1).required()
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Estado",
          name: "estado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 9
  }, this);
}

/* harmony default export */ __webpack_exports__["default"] = (address);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJub0V4dCIsImNvbnNvbGUiLCJsb2ciLCJteUZldGNoIiwibWV0aG9kIiwicGF0aCIsImJvZHkiLCJkYXRhIiwiZXN0YWRvIiwiZGVsZWdhY2lvbiIsImNvbG9uaWEiLCJjYWxsZSIsIm5vSW50IiwiY3AiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUVmLE1BQU1DLFlBQVk7QUFBQSxrUkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakIsa0JBQUcsQ0FBQ0EsTUFBTSxDQUFDQyxLQUFYLEVBQWtCRCxNQUFNLENBQUNDLEtBQVAsR0FBZSxDQUFmO0FBQ2xCQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFGaUI7QUFBQSxxQkFHRUksOERBQU8sQ0FBQztBQUFDQyxzQkFBTSxFQUFFLE1BQVQ7QUFBaUJDLG9CQUFJLGNBQXJCO0FBQXFDQyxvQkFBSSxFQUFFUDtBQUEzQyxlQUFELENBSFQ7O0FBQUE7QUFHWFEsa0JBSFc7QUFJakJOLHFCQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaO0FBQ0FELHFCQUFPLENBQUNDLEdBQVIsQ0FBWUssSUFBWjs7QUFMaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWlQsWUFBWTtBQUFBO0FBQUE7QUFBQSxLQUFsQjs7QUFRQSxzQkFDSSxxRUFBQywyREFBRDtBQUFXLFlBQVEsRUFBQyxJQUFwQjtBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQVksYUFBTyxFQUFDLElBQXBCO0FBQXlCLFdBQUssRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUkscUVBQUMsNkNBQUQ7QUFDSSxtQkFBYSxFQUFJO0FBQ2JVLGNBQU0sRUFBRSxFQURLO0FBRWJDLGtCQUFVLEVBQUUsRUFGQztBQUdiQyxlQUFPLEVBQUUsRUFISTtBQUliQyxhQUFLLEVBQUUsRUFKTTtBQUtiQyxhQUFLLEVBQUUsQ0FMTTtBQU1iWixhQUFLLEVBQUUsQ0FOTTtBQU9iYSxVQUFFLEVBQUU7QUFQUyxPQURyQjtBQVVJLGNBQVEsRUFBSSxrQkFBQ2QsTUFBRDtBQUFBLGVBQVVELFlBQVksQ0FBQ0MsTUFBRCxDQUF0QjtBQUFBLE9BVmhCO0FBV0ksc0JBQWdCLEVBQ1plLDBDQUFBLEdBQWFDLEtBQWIsQ0FBbUI7QUFDZlAsY0FBTSxFQUFFTSwwQ0FBQSxHQUFhRSxRQUFiLEVBRE87QUFFZlAsa0JBQVUsRUFBRUssMENBQUEsR0FBYUUsUUFBYixFQUZHO0FBR2ZOLGVBQU8sRUFBRUksMENBQUEsR0FBYUUsUUFBYixFQUhNO0FBSWZMLGFBQUssRUFBRUcsMENBQUEsR0FBYUUsUUFBYixFQUpRO0FBS2ZKLGFBQUssRUFBRUUsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkQsUUFBcEIsRUFMUTtBQU1maEIsYUFBSyxFQUFFYywwQ0FBQSxFQU5RO0FBT2ZELFVBQUUsRUFBRUMsMENBQUEsR0FBYUcsR0FBYixDQUFpQixDQUFqQixFQUFvQkQsUUFBcEI7QUFQVyxPQUFuQixDQVpSO0FBQUEsNkJBdUJJLHFFQUFDLDJDQUFEO0FBQUEsZ0NBQ0kscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsUUFBZjtBQUF3QixjQUFJLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJLHFFQUFDLGtFQUFEO0FBQVMsZUFBSyxFQUFDLGVBQWY7QUFBNEIsY0FBSSxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxTQUFmO0FBQXlCLGNBQUksRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUkscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsT0FBZjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLHFFQUFDLGtFQUFEO0FBQVMsZUFBSyxFQUFDLGNBQWY7QUFBOEIsY0FBSSxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxjQUFmO0FBQThCLGNBQUksRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0kscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsa0JBQWY7QUFBK0IsY0FBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFRSSxxRUFBQyx3REFBRDtBQUFRLG1CQUFTLE1BQWpCO0FBQWtCLGNBQUksRUFBQyxRQUF2QjtBQUFnQyxpQkFBTyxFQUFDLFdBQXhDO0FBQW9ELGVBQUssRUFBQyxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIOztBQUVjbkIsc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdXNlci9hZGRyZXNzLjdmNDg4MGYyYWM5NDQ0ZDI0MWZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Rm9ybWlrLCBGb3JtfSBmcm9tICdmb3JtaWsnXHJcbmltcG9ydCBNeUlucHV0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaW5wdXRzL015SW5wdXQnXHJcbmltcG9ydCB7Q29udGFpbmVyLCBUeXBvZ3JhcGh5LCBCdXR0b259IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5pbXBvcnQgKiBhcyBZdXAgZnJvbSAneXVwJ1xyXG5pbXBvcnQgbXlGZXRjaCBmcm9tICcuLi8uLi91dGlscy9teUZldGNoJ1xyXG5cclxuZnVuY3Rpb24gYWRkcmVzcygpIHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzKT0+e1xyXG4gICAgICAgIGlmKCF2YWx1ZXMubm9FeHQpIHZhbHVlcy5ub0V4dCA9IDBcclxuICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IG15RmV0Y2goe21ldGhvZDogJ1BPU1QnLCBwYXRoOiBgL2FkZHJlc3Nlc2AsIGJvZHk6IHZhbHVlc30pXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJEQVRBXCIpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPkRJUkVDQ0nDk048L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkbzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhY2lvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb25pYTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vSW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vRXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNwOiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0ID0geyh2YWx1ZXMpPT5oYW5kbGVTdWJtaXQodmFsdWVzKX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhY2lvbjogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vSW50OiBZdXAubnVtYmVyKCkubWluKDEpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRXh0OiBZdXAubnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwOiBZdXAubnVtYmVyKCkubWluKDEpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiRXN0YWRvXCIgbmFtZT1cImVzdGFkb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJEZWxlZ2FjacOzblwiIG5hbWU9XCJkZWxlZ2FjaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkNvbG9uaWFcIiBuYW1lPVwiY29sb25pYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJDYWxsZVwiIG5hbWU9XCJjYWxsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJOby4gSW50ZXJpb3JcIiBuYW1lPVwibm9JbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiTm8uIEV4dGVyaW9yXCIgbmFtZT1cIm5vRXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkPDs2RpZ28gUG9zdGFsXCIgbmFtZT1cImNwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTQVZFXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRyZXNzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=