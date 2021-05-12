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
      return C_Users_DELL_Desktop_A_cuatl_2_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setOpen(true);
              if (!values.noExt) values.noExt = 0;
              if (!values.noInt) values.noInt = 0;
              /*
              if(!values.noExt) values.noExt = 0
              const stripe = await stripePromise;
              const address = await myFetch({method: 'POST', path: `/addresses`, body: values})
              const session = await myFetch({method: 'POST', path: '/orders', body: {order, address: address.id}})
              const result = await stripe.redirectToCheckout({
                sessionId: session.id
              });*/

              console.log(values);
              setOpen(false);

            case 5:
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
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h5",
      align: "center",
      children: "DIRECCI\xD3N"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: {
        estado: '',
        delegacion: '',
        colonia: '',
        calle: '',
        noInt: '',
        noExt: '',
        cp: ''
      },
      onSubmit: function onSubmit(values) {
        return handleSubmit(values);
      },
      validationSchema: yup__WEBPACK_IMPORTED_MODULE_7__["object"]().shape({
        estado: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar un estado'),
        delegacion: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar una delegacion'),
        colonia: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar una colonia'),
        calle: yup__WEBPACK_IMPORTED_MODULE_7__["string"]('Debe ser un texto').required('Debes agregar una calle'),
        noInt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]().min(0),
        noExt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(0),
        cp: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1).required('Debes agregar un C.P.')
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Estado",
          name: "estado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJhZGRyZXNzIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsIm5vRXh0Iiwibm9JbnQiLCJjb25zb2xlIiwibG9nIiwiZXN0YWRvIiwiZGVsZWdhY2lvbiIsImNvbG9uaWEiLCJjYWxsZSIsImNwIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxxRUFBVSxDQUFDQyxxRUFBRCxDQUFoQzs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsb0JBRUdDLHdEQUFVLENBQUNDLDZEQUFELENBRmI7QUFBQSxNQUVQQyxLQUZPLGVBRVBBLEtBRk87O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUtmLE1BQU1DLFlBQVk7QUFBQSwwVEFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCRixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBLGtCQUFHLENBQUNFLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQkQsTUFBTSxDQUFDQyxLQUFQLEdBQWUsQ0FBZjtBQUNsQixrQkFBRyxDQUFDRCxNQUFNLENBQUNFLEtBQVgsRUFBa0JGLE1BQU0sQ0FBQ0UsS0FBUCxHQUFlLENBQWY7QUFDbEI7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFD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QyxRQUF2QjtBQUFnQyxpQkFBTyxFQUFDLFdBQXhDO0FBQW9ELGVBQUssRUFBQyxTQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF2Qko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBMENIOztHQS9EUXBCLE87O0FBaUVNQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2VyL2FkZHJlc3MuMjViMDhkZjM5ZDkyMzM0MjE5YmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHQsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtGb3JtaWssIEZvcm19IGZyb20gJ2Zvcm1paydcclxuaW1wb3J0IE15SW5wdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pbnB1dHMvTXlJbnB1dCdcclxuaW1wb3J0IHtDb250YWluZXIsIFR5cG9ncmFwaHksIEJ1dHRvbn0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tICd5dXAnXHJcbmltcG9ydCBteUZldGNoIGZyb20gJy4uLy4uL3V0aWxzL215RmV0Y2gnXHJcbmltcG9ydCBPcmRlckNvbnRleHQgZnJvbSAnQC9jb250ZXh0L09yZGVyQ29udGV4dCc7XHJcbmltcG9ydCB7IFNUUklQRV9QVUJMSVNIRURfS0VZIH0gZnJvbSAnQC9jb25maWcvZ2xvYmFscyc7XHJcbmltcG9ydCB7IGxvYWRTdHJpcGUgfSBmcm9tICdAc3RyaXBlL3N0cmlwZS1qcyc7XHJcbmltcG9ydCBNeUJhY2tkcm9wIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTXlCYWNrZHJvcCdcclxuXHJcbmNvbnN0IHN0cmlwZVByb21pc2UgPSBsb2FkU3RyaXBlKFNUUklQRV9QVUJMSVNIRURfS0VZKTtcclxuXHJcbmZ1bmN0aW9uIGFkZHJlc3MoKSB7XHJcblxyXG4gICAgY29uc3QgeyBvcmRlciB9ID0gdXNlQ29udGV4dChPcmRlckNvbnRleHQpO1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHZhbHVlcyk9PntcclxuICAgICAgICBzZXRPcGVuKHRydWUpXHJcbiAgICAgICAgaWYoIXZhbHVlcy5ub0V4dCkgdmFsdWVzLm5vRXh0ID0gMFxyXG4gICAgICAgIGlmKCF2YWx1ZXMubm9JbnQpIHZhbHVlcy5ub0ludCA9IDBcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmKCF2YWx1ZXMubm9FeHQpIHZhbHVlcy5ub0V4dCA9IDBcclxuICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBzdHJpcGVQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogYC9hZGRyZXNzZXNgLCBib2R5OiB2YWx1ZXN9KVxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogJy9vcmRlcnMnLCBib2R5OiB7b3JkZXIsIGFkZHJlc3M6IGFkZHJlc3MuaWR9fSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcclxuICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbi5pZFxyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPE15QmFja2Ryb3Agb3Blbj17b3Blbn0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5ESVJFQ0NJw5NOPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub0ludDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9FeHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNwOiAnJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdCA9IHsodmFsdWVzKT0+aGFuZGxlU3VibWl0KHZhbHVlcyl9XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uU2NoZW1hID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVzdGFkbzogWXVwLnN0cmluZygnRGViZSBzZXIgdW4gdGV4dG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1biBlc3RhZG8nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZWdhY2lvbjogWXVwLnN0cmluZygnRGViZSBzZXIgdW4gdGV4dG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1bmEgZGVsZWdhY2lvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvbmlhOiBZdXAuc3RyaW5nKCdEZWJlIHNlciB1biB0ZXh0bycpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHVuYSBjb2xvbmlhJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxlOiBZdXAuc3RyaW5nKCdEZWJlIHNlciB1biB0ZXh0bycpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHVuYSBjYWxsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub0ludDogWXVwLm51bWJlcigpLm1pbigwKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9FeHQ6IFl1cC5udW1iZXIoJ0RlYmUgc2VyIHVuIG7Dum1lcm8nKS5taW4oMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwOiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEpLnJlcXVpcmVkKCdEZWJlcyBhZ3JlZ2FyIHVuIEMuUC4nKSxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJFc3RhZG9cIiBuYW1lPVwiZXN0YWRvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkRlbGVnYWNpw7NuXCIgbmFtZT1cImRlbGVnYWNpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiQ29sb25pYVwiIG5hbWU9XCJjb2xvbmlhXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkNhbGxlXCIgbmFtZT1cImNhbGxlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIk5vLiBJbnRlcmlvclwiIG5hbWU9XCJub0ludFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJOby4gRXh0ZXJpb3JcIiBuYW1lPVwibm9FeHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiQ8OzZGlnbyBQb3N0YWxcIiBuYW1lPVwiY3BcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gZnVsbFdpZHRoIHR5cGU9XCJzdWJtaXRcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNBVkVcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgPC9Gb3JtaWs+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZHJlc3NcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==