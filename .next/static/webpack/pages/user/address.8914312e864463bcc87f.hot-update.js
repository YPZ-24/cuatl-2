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
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var _components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/inputs/MyInput */ "./components/inputs/MyInput.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _utils_myFetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/myFetch */ "./utils/myFetch.js");
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");
/* harmony import */ var _components_MyBackdrop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/MyBackdrop */ "./components/MyBackdrop.tsx");




var _jsxFileName = "C:\\Users\\DELL\\Desktop\\A\\cuatl-2\\pages\\user\\address.js",
    _s = $RefreshSig$();











var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__["loadStripe"])(_config_globals__WEBPACK_IMPORTED_MODULE_10__["STRIPE_PUBLISHED_KEY"]);

function address() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      order = _useContext.order;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      open = _useState[0],
      setOpen = _useState[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
      var stripe, address, session, result;
      return C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setOpen(true);
              if (!values.noExt) values.noExt = 0;
              _context.next = 4;
              return stripePromise;

            case 4:
              stripe = _context.sent;
              _context.next = 7;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: "/addresses",
                body: values
              });

            case 7:
              address = _context.sent;
              _context.next = 10;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: '/orders',
                body: {
                  order: order,
                  address: address.id
                }
              });

            case 10:
              session = _context.sent;
              _context.next = 13;
              return stripe.redirectToCheckout({
                sessionId: session.id
              });

            case 13:
              result = _context.sent;
              setOpen(false);

            case 15:
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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MyBackdrop__WEBPACK_IMPORTED_MODULE_12__["default"], {
      open: open
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h5",
      align: "center",
      children: "DIRECCI\xD3N"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
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
        estado: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar tu estado'),
        delegacion: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar tu delegacion'),
        colonia: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar tu colonia'),
        calle: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar tu calle'),
        noInt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1, 'Tu No. Int. no es válido'),
        noExt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1, 'Tu No. Ext. no es válido'),
        cp: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1, 'Tu C.P. no es válido').required('Debes agregar un C.P.')
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Estado",
          name: "estado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(address, "vxGag+Tux3o4b9hsDSnaBCn03fE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJhZGRyZXNzIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsIm5vRXh0Iiwic3RyaXBlIiwibXlGZXRjaCIsIm1ldGhvZCIsInBhdGgiLCJib2R5IiwiaWQiLCJzZXNzaW9uIiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwicmVzdWx0IiwiZXN0YWRvIiwiZGVsZWdhY2lvbiIsImNvbG9uaWEiLCJjYWxsZSIsIm5vSW50IiwiY3AiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQUNDLHFFQUFELENBQWhDOztBQUVBLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFFR0Msd0RBQVUsQ0FBQ0MsNkRBQUQsQ0FGYjtBQUFBLE1BRVBDLEtBRk8sZUFFUEEsS0FGTzs7QUFBQSxrQkFHU0Msc0RBQVEsQ0FBQyxLQUFELENBSGpCO0FBQUEsTUFHUkMsSUFIUTtBQUFBLE1BR0ZDLE9BSEU7O0FBS2YsTUFBTUMsWUFBWTtBQUFBLDBUQUFHLGlCQUFPQyxNQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNqQkYscUJBQU8sQ0FBQyxJQUFELENBQVA7QUFDQSxrQkFBRyxDQUFDRSxNQUFNLENBQUNDLEtBQVgsRUFBa0JELE1BQU0sQ0FBQ0MsS0FBUCxHQUFlLENBQWY7QUFGRDtBQUFBLHFCQUdJWixhQUhKOztB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LGVBQUssRUFBQyxTQUFmO0FBQXlCLGNBQUksRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBSUkscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsT0FBZjtBQUF1QixjQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKSixlQUtJLHFFQUFDLGtFQUFEO0FBQVMsZUFBSyxFQUFDLGNBQWY7QUFBOEIsY0FBSSxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEosZUFNSSxxRUFBQyxrRUFBRDtBQUFTLGVBQUssRUFBQyxjQUFmO0FBQThCLGNBQUksRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5KLGVBT0kscUVBQUMsa0VBQUQ7QUFBUyxlQUFLLEVBQUMsa0JBQWY7QUFBK0IsY0FBSSxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEosZUFRSSxxRUFBQyx3REFBRDtBQUFRLG1CQUFTLE1BQWpCO0FBQWtCLGNBQUksRUFBQyxRQUF2QjtBQUFnQyxpQkFBTyxFQUFDLFdBQXhDO0FBQW9ELGVBQUssRUFBQyxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQTNEUTVCLE87O0FBNkRNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2FkZHJlc3MuODkxNDMxMmU4NjQ0NjNiY2M4N2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IE15SW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dHMvTXlJbnB1dCdcclxuaW1wb3J0IHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCBteUZldGNoIGZyb20gJy4uLy4uL3V0aWxzL215RmV0Y2gnXHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcbmltcG9ydCB7IFNUUklQRV9QVUJMSVNIRURfS0VZIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCBNeUJhY2tkcm9wIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlCYWNrZHJvcCdcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFNUUklQRV9QVUJMSVNIRURfS0VZKTtcclxuXHJcbmZ1bmN0aW9uIGFkZHJlc3MoKSB7XHJcblxyXG4gICAgY29uc3QgeyBvcmRlciB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHZhbHVlcyk9PntcclxuICAgICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICAgICAgaWYoIXZhbHVlcy5ub0V4dCkgdmFsdWVzLm5vRXh0ID0gMFxyXG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XHJcbiAgICAgICAgY29uc3QgYWRkcmVzcyA9IGF3YWl0IG15RmV0Y2goe21ldGhvZDogJ1BPU1QnLCBwYXRoOiBgL2FkZHJlc3Nlc2AsIGJvZHk6IHZhbHVlc30pXHJcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IG15RmV0Y2goe21ldGhvZDogJ1BPU1QnLCBwYXRoOiAnL29yZGVycycsIGJvZHk6IHtvcmRlciwgYWRkcmVzczogYWRkcmVzcy5pZH19KVxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN0cmlwZS5yZWRpcmVjdFRvQ2hlY2tvdXQoe1xyXG4gICAgICAgICAgc2Vzc2lvbklkOiBzZXNzaW9uLmlkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJ4c1wiPlxyXG4gICAgICAgICAgICA8TXlCYWNrZHJvcCBvcGVuPXtvcGVufSAvPlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDVcIiBhbGlnbj1cImNlbnRlclwiPkRJUkVDQ0nDk048L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgICAgICAgIGluaXRpYWxWYWx1ZXMgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGVzdGFkbzogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZWdhY2lvbjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb25pYTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vSW50OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vRXh0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGNwOiAwLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9uU3VibWl0ID0geyh2YWx1ZXMpPT5oYW5kbGVTdWJtaXQodmFsdWVzKX1cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgWXVwLm9iamVjdCgpLnNoYXBlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXN0YWRvOiBZdXAuc3RyaW5nKCdEZWJlIHNlciB1biB0ZXh0bycpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHR1IGVzdGFkbycpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxlZ2FjaW9uOiBZdXAuc3RyaW5nKCdEZWJlIHNlciB1biB0ZXh0bycpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHR1IGRlbGVnYWNpb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb25pYTogWXVwLnN0cmluZygnRGViZSBzZXIgdW4gdGV4dG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB0dSBjb2xvbmlhJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlOiBZdXAuc3RyaW5nKCdEZWJlIHNlciB1biB0ZXh0bycpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHR1IGNhbGxlJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vSW50OiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEsICdUdSBOby4gSW50LiBubyBlcyB2w6FsaWRvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRXh0OiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEsICdUdSBOby4gRXh0LiBubyBlcyB2w6FsaWRvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwOiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEsICdUdSBDLlAuIG5vIGVzIHbDoWxpZG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1biBDLlAuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiRXN0YWRvXCIgbmFtZT1cImVzdGFkb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJEZWxlZ2FjacOzblwiIG5hbWU9XCJkZWxlZ2FjaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkNvbG9uaWFcIiBuYW1lPVwiY29sb25pYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJDYWxsZVwiIG5hbWU9XCJjYWxsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJOby4gSW50ZXJpb3JcIiBuYW1lPVwibm9JbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiTm8uIEV4dGVyaW9yXCIgbmFtZT1cIm5vRXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkPDs2RpZ28gUG9zdGFsXCIgbmFtZT1cImNwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTQVZFXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRyZXNzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=