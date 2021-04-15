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
              console.log(values);
              _context.next = 3;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: "/addresses",
                body: values
              });

            case 3:
              data = _context.sent;
              console.log("DATA");
              console.log(data);

            case 6:
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
      lineNumber: 19,
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
        noInt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().required(),
        noExt: yup__WEBPACK_IMPORTED_MODULE_7__["number"](),
        cp: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().required()
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Estado",
          name: "estado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbImFkZHJlc3MiLCJoYW5kbGVTdWJtaXQiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwibXlGZXRjaCIsIm1ldGhvZCIsInBhdGgiLCJib2R5IiwiZGF0YSIsImVzdGFkbyIsImRlbGVnYWNpb24iLCJjb2xvbmlhIiwiY2FsbGUiLCJub0ludCIsIm5vRXh0IiwiY3AiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsT0FBVCxHQUFtQjtBQUVmLE1BQU1DLFlBQVk7QUFBQSxrUkFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQURpQjtBQUFBLHFCQUVFRyw4REFBTyxDQUFDO0FBQUNDLHNCQUFNLEVBQUUsTUFBVDtBQUFpQkMsb0JBQUksY0FBckI7QUFBcUNDLG9CQUFJLEVBQUVOO0FBQTNDLGVBQUQsQ0FGVDs7QUFBQTtBQUVYTyxrQkFGVztBQUdqQk4scUJBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVo7QUFDQUQscUJBQU8sQ0FBQ0MsR0FBUixDQUFZSyxJQUFaOztBQUppQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFaUixZQUFZO0FBQUE7QUFBQTtBQUFBLEtBQWxCOztBQU9BLHNCQUNJLHFFQUFDLDJEQUFEO0FBQVcsWUFBUSxFQUFDLElBQXBCO0FBQUEsNEJBQ0kscUVBQUMsNERBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsV0FBSyxFQUFDLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQyw2Q0FBRDtBQUNJLG1CQUFhLEVBQUk7QUFDYlMsY0FBTSxFQUFFLEVBREs7QUFFYkMsa0JBQVUsRUFBRSxFQUZDO0FBR2JDLGVBQU8sRUFBRSxFQUhJO0FBSWJDLGFBQUssRUFBRSxFQUpNO0FBS2JDLGFBQUssRUFBRSxDQUxNO0FBTWJDLGFBQUssRUFBRSxDQU5NO0FBT2JDLFVBQUUsRUFBRTtBQVBTLE9BRHJCO0FBVUksY0FBUSxFQUFJLGtCQUFDZCxNQUFEO0FBQUEsZUFBVUQsWUFBWSxDQUFDQyxNQUFELENBQXRCO0FBQUEsT0FWaEI7QUFXSSxzQkFBZ0IsRUFDWmUsMENBQUEsR0FBYUMsS0FBYixDQUFtQjtBQUNmUixjQUFNLEVBQUVPLDBDQUFBLEdBQWFFLFFBQWIsRUFETztBQUVmUixrQkFBVSxFQUFFTSwwQ0FBQSxHQUFhRSxRQUFiLEVBRkc7QUFHZlAsZUFBTyxFQUFFSywwQ0FBQSxHQUFhRSxRQUFiLEVBSE07QUFJZk4sYUFBSyxFQUFFSSwwQ0FBQSxHQUFhRSxRQUFiLEVBSlE7QUFLZkwsYUFBSyxFQUFFRywwQ0FBQSxHQUFhRSxRQUFiLEVBTFE7QUFNZkosYUFBSyxFQUFFRSwwQ0FBQSxFQU5RO0FBT2ZELFVBQUUsRUFBRUMsMENBQUEsR0FBYUUsUUFBYjtBQVBXLE9BQW5CLENBWlI7QUFBQSw2QkF1QkkscUVBQUMsMkNBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxRQUFmO0FBQXdCLGNBQUksRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBRUkscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsZUFBZjtBQUE0QixjQUFJLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixlQUdJLHFFQUFDLGtFQUFEO0FBQVMsZUFBSyxFQUFDLFNBQWY7QUFBeUIsY0FBSSxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFJSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxPQUFmO0FBQXVCLGNBQUksRUFBQztBQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpKLGVBS0kscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsY0FBZjtBQUE4QixjQUFJLEVBQUM7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQU1JLHFFQUFDLGtFQUFEO0FBQVMsZUFBSyxFQUFDLGNBQWY7QUFBOEIsY0FBSSxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkosZUFPSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxrQkFBZjtBQUErQixjQUFJLEVBQUM7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQSixlQVFJLHFFQUFDLHdEQUFEO0FBQVEsbUJBQVMsTUFBakI7QUFBa0IsY0FBSSxFQUFDLFFBQXZCO0FBQWdDLGlCQUFPLEVBQUMsV0FBeEM7QUFBb0QsZUFBSyxFQUFDLFNBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUF5Q0g7O0FBRWNuQixzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2FkZHJlc3MuMmEwNDZkOWIzZWIyYTk3MzA3MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IE15SW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dHMvTXlJbnB1dCdcclxuaW1wb3J0IHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCBteUZldGNoIGZyb20gJy4uLy4uL3V0aWxzL215RmV0Y2gnXHJcblxyXG5mdW5jdGlvbiBhZGRyZXNzKCkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogYC9hZGRyZXNzZXNgLCBib2R5OiB2YWx1ZXN9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiREFUQVwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5ESVJFQ0NJw5NOPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub0ludDogMCxcclxuICAgICAgICAgICAgICAgICAgICBub0V4dDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjcDogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHsodmFsdWVzKT0+aGFuZGxlU3VibWl0KHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFkbzogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0ludDogWXVwLm51bWJlcigpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRXh0OiBZdXAubnVtYmVyKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwOiBZdXAubnVtYmVyKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJFc3RhZG9cIiBuYW1lPVwiZXN0YWRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkRlbGVnYWNpw7NuXCIgbmFtZT1cImRlbGVnYWNpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiQ29sb25pYVwiIG5hbWU9XCJjb2xvbmlhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkNhbGxlXCIgbmFtZT1cImNhbGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIk5vLiBJbnRlcmlvclwiIG5hbWU9XCJub0ludFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJOby4gRXh0ZXJpb3JcIiBuYW1lPVwibm9FeHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiQ8OzZGlnbyBQb3N0YWxcIiBuYW1lPVwiY3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNBVkVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZHJlc3NcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==