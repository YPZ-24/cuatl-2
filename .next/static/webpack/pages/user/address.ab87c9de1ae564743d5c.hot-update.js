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
/* harmony import */ var _context_OrderContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/context/OrderContext */ "./context/OrderContext.tsx");
/* harmony import */ var _config_globals__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/config/globals */ "./config/globals.ts");
/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @stripe/stripe-js */ "./node_modules/@stripe/stripe-js/dist/stripe.esm.js");




var _jsxFileName = "C:\\Users\\DELL\\Desktop\\cuatl-2\\pages\\user\\address.js",
    _s = $RefreshSig$();










var stripePromise = Object(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_11__["loadStripe"])(_config_globals__WEBPACK_IMPORTED_MODULE_10__["STRIPE_PUBLISHED_KEY"]);

function address() {
  _s();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_context_OrderContext__WEBPACK_IMPORTED_MODULE_9__["default"]),
      order = _useContext.order;

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(values) {
      var stripe, address, session;
      return C_Users_DELL_Desktop_cuatl_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!values.noExt) values.noExt = 0;
              _context.next = 3;
              return stripePromise;

            case 3:
              stripe = _context.sent;
              _context.next = 6;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: "/addresses",
                body: values
              });

            case 6:
              address = _context.sent;
              _context.next = 9;
              return Object(_utils_myFetch__WEBPACK_IMPORTED_MODULE_8__["default"])({
                method: 'POST',
                path: '/orders',
                body: {
                  order: order,
                  address: address.id
                }
              });

            case 9:
              session = _context.sent;
              console.log("SESION");
              console.log(session);
              /*const result = await stripe.redirectToCheckout({
                sessionId: session.id
              });*/

            case 12:
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
      lineNumber: 32,
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
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

_s(address, "qRlCoFB/WXjHo7zuM59IyyE31/E=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJhZGRyZXNzIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwibm9FeHQiLCJzdHJpcGUiLCJteUZldGNoIiwibWV0aG9kIiwicGF0aCIsImJvZHkiLCJpZCIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwiZXN0YWRvIiwiZGVsZWdhY2lvbiIsImNvbG9uaWEiLCJjYWxsZSIsIm5vSW50IiwiY3AiLCJZdXAiLCJzaGFwZSIsInJlcXVpcmVkIiwibWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHFFQUFVLENBQUNDLHFFQUFELENBQWhDOztBQUVBLFNBQVNDLE9BQVQsR0FBbUI7QUFBQTs7QUFBQSxvQkFFR0Msd0RBQVUsQ0FBQ0MsNkRBQUQsQ0FGYjtBQUFBLE1BRVBDLEtBRk8sZUFFUEEsS0FGTzs7QUFJZixNQUFNQyxZQUFZO0FBQUEsa1JBQUcsaUJBQU9DLE1BQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCLGtCQUFHLENBQUNBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQkQsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FBZjtBQUREO0FBQUEscUJBRUlULGFBRko7O0FBQUE7QUFFWFUsb0JBRlc7QUFBQTtBQUFBLHFCQUlLQyw4REFBTyxDQUFDO0FBQUNDLHNCQUFNLEVBQUUsTUFBVDtBQUFpQkMsb0JBQUksY0FBckI7QUFBcUNDLG9CQUFJLEVBQUVOO0FBQTNDLGVBQUQsQ0FKWjs7QUFBQTtBQUlYTCxxQkFKVztBQUFBO0FBQUEscUJBS0tR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QUFDLFdBQXhDO0FBQW9ELGVBQUssRUFBQyxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBeUNIOztHQTFEUXhCLE87O0FBNERNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2FkZHJlc3MuYWI4N2M5ZGUxYWU1NjQ3NDNkNWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybX0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgTXlJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0cy9NeUlucHV0J1xyXG5pbXBvcnQge0NvbnRhaW5lciwgVHlwb2dyYXBoeSwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IG15RmV0Y2ggZnJvbSAnLi4vLi4vdXRpbHMvbXlGZXRjaCdcclxuaW1wb3J0IE9yZGVyQ29udGV4dCBmcm9tICdAL2NvbnRleHQvT3JkZXJDb250ZXh0JztcclxuaW1wb3J0IHsgU1RSSVBFX1BVQkxJU0hFRF9LRVkgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFNUUklQRV9QVUJMSVNIRURfS0VZKTtcclxuXHJcbmZ1bmN0aW9uIGFkZHJlc3MoKSB7XHJcblxyXG4gICAgY29uc3QgeyBvcmRlciB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpPT57XHJcbiAgICAgICAgaWYoIXZhbHVlcy5ub0V4dCkgdmFsdWVzLm5vRXh0ID0gMFxyXG4gICAgICAgIGNvbnN0IHN0cmlwZSA9IGF3YWl0IHN0cmlwZVByb21pc2U7XHJcblxyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogYC9hZGRyZXNzZXNgLCBib2R5OiB2YWx1ZXN9KVxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogJy9vcmRlcnMnLCBib2R5OiB7b3JkZXIsIGFkZHJlc3M6IGFkZHJlc3MuaWR9fSlcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNFU0lPTlwiKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHNlc3Npb24pXHJcbiAgICAgICAgLypjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcclxuICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbi5pZFxyXG4gICAgICAgIH0pOyovXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5ESVJFQ0NJw5NOPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub0ludDogMCxcclxuICAgICAgICAgICAgICAgICAgICBub0V4dDogMCxcclxuICAgICAgICAgICAgICAgICAgICBjcDogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHsodmFsdWVzKT0+aGFuZGxlU3VibWl0KHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFkbzogWXVwLnN0cmluZygpLnJlcXVpcmVkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGU6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0ludDogWXVwLm51bWJlcigpLm1pbigxKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0V4dDogWXVwLm51bWJlcigpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjcDogWXVwLm51bWJlcigpLm1pbigxKS5yZXF1aXJlZCgpLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybT5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkVzdGFkb1wiIG5hbWU9XCJlc3RhZG9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiRGVsZWdhY2nDs25cIiBuYW1lPVwiZGVsZWdhY2lvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJDb2xvbmlhXCIgbmFtZT1cImNvbG9uaWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiQ2FsbGVcIiBuYW1lPVwiY2FsbGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiTm8uIEludGVyaW9yXCIgbmFtZT1cIm5vSW50XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIk5vLiBFeHRlcmlvclwiIG5hbWU9XCJub0V4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJDw7NkaWdvIFBvc3RhbFwiIG5hbWU9XCJjcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBmdWxsV2lkdGggdHlwZT1cInN1Ym1pdFwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU0FWRVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICA8L0Zvcm1paz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkcmVzc1xyXG4iXSwic291cmNlUm9vdCI6IiJ9