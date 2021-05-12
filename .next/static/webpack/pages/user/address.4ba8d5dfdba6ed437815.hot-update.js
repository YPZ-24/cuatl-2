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

            case 3:
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
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Typography"], {
      variant: "h5",
      align: "center",
      children: "DIRECCI\xD3N"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Formik"], {
      initialValues: {
        estado: '',
        delegacion: '',
        colonia: '',
        calle: '',
        noInt: '',
        noExt: 0,
        cp: 0
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
        noExt: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1, 'El No. Ext. no es válido'),
        cp: yup__WEBPACK_IMPORTED_MODULE_7__["number"]('Debe ser un número').min(1, 'El C.P. no es válido').required('Debes agregar un C.P.')
      }),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(formik__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Estado",
          name: "estado"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Delegaci\xF3n",
          name: "delegacion"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Colonia",
          name: "colonia"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "Calle",
          name: "calle"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Interior",
          name: "noInt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "No. Exterior",
          name: "noExt"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_inputs_MyInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
          label: "C\xF3digo Postal",
          name: "cp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
          fullWidth: true,
          type: "submit",
          variant: "contained",
          color: "primary",
          children: "SAVE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlci9hZGRyZXNzLmpzIl0sIm5hbWVzIjpbInN0cmlwZVByb21pc2UiLCJsb2FkU3RyaXBlIiwiU1RSSVBFX1BVQkxJU0hFRF9LRVkiLCJhZGRyZXNzIiwidXNlQ29udGV4dCIsIk9yZGVyQ29udGV4dCIsIm9yZGVyIiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJlc3RhZG8iLCJkZWxlZ2FjaW9uIiwiY29sb25pYSIsImNhbGxlIiwibm9JbnQiLCJub0V4dCIsImNwIiwiWXVwIiwic2hhcGUiLCJyZXF1aXJlZCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsYUFBYSxHQUFHQyxxRUFBVSxDQUFDQyxxRUFBRCxDQUFoQzs7QUFFQSxTQUFTQyxPQUFULEdBQW1CO0FBQUE7O0FBQUEsb0JBRUdDLHdEQUFVLENBQUNDLDZEQUFELENBRmI7QUFBQSxNQUVQQyxLQUZPLGVBRVBBLEtBRk87O0FBQUEsa0JBR1NDLHNEQUFRLENBQUMsS0FBRCxDQUhqQjtBQUFBLE1BR1JDLElBSFE7QUFBQSxNQUdGQyxPQUhFOztBQUtmLE1BQU1DLFlBQVk7QUFBQSwwVEFBRyxpQkFBT0MsTUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2pCRixxQkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ1FHLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBRixxQkFBTyxDQUFDLEtBQUQsQ0FBUDs7QUFYaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBWkMsWUFBWTtBQUFBO0FBQUE7QUFBQSxL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QUFBQTtBQXZCSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwQ0g7O0dBN0RRcEIsTzs7QUErRE1BLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3VzZXIvYWRkcmVzcy40YmE4ZDVkZmRiYTZlZDQzNzgxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0Zvcm1paywgRm9ybX0gZnJvbSAnZm9ybWlrJ1xyXG5pbXBvcnQgTXlJbnB1dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0cy9NeUlucHV0J1xyXG5pbXBvcnQge0NvbnRhaW5lciwgVHlwb2dyYXBoeSwgQnV0dG9ufSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuaW1wb3J0ICogYXMgWXVwIGZyb20gJ3l1cCdcclxuaW1wb3J0IG15RmV0Y2ggZnJvbSAnLi4vLi4vdXRpbHMvbXlGZXRjaCdcclxuaW1wb3J0IE9yZGVyQ29udGV4dCBmcm9tICdAL2NvbnRleHQvT3JkZXJDb250ZXh0JztcclxuaW1wb3J0IHsgU1RSSVBFX1BVQkxJU0hFRF9LRVkgfSBmcm9tICdAL2NvbmZpZy9nbG9iYWxzJztcclxuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcclxuaW1wb3J0IE15QmFja2Ryb3AgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NeUJhY2tkcm9wJ1xyXG5cclxuY29uc3Qgc3RyaXBlUHJvbWlzZSA9IGxvYWRTdHJpcGUoU1RSSVBFX1BVQkxJU0hFRF9LRVkpO1xyXG5cclxuZnVuY3Rpb24gYWRkcmVzcygpIHtcclxuXHJcbiAgICBjb25zdCB7IG9yZGVyIH0gPSB1c2VDb250ZXh0KE9yZGVyQ29udGV4dCk7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAodmFsdWVzKT0+e1xyXG4gICAgICAgIHNldE9wZW4odHJ1ZSlcclxuICAgICAgICAvKlxyXG4gICAgICAgIGlmKCF2YWx1ZXMubm9FeHQpIHZhbHVlcy5ub0V4dCA9IDBcclxuICAgICAgICBjb25zdCBzdHJpcGUgPSBhd2FpdCBzdHJpcGVQcm9taXNlO1xyXG4gICAgICAgIGNvbnN0IGFkZHJlc3MgPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogYC9hZGRyZXNzZXNgLCBib2R5OiB2YWx1ZXN9KVxyXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBteUZldGNoKHttZXRob2Q6ICdQT1NUJywgcGF0aDogJy9vcmRlcnMnLCBib2R5OiB7b3JkZXIsIGFkZHJlc3M6IGFkZHJlc3MuaWR9fSlcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzdHJpcGUucmVkaXJlY3RUb0NoZWNrb3V0KHtcclxuICAgICAgICAgIHNlc3Npb25JZDogc2Vzc2lvbi5pZFxyXG4gICAgICAgIH0pOyovXHJcbiAgICAgICAgY29uc29sZS5sb2codmFsdWVzKVxyXG4gICAgICAgIHNldE9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwieHNcIj5cclxuICAgICAgICAgICAgPE15QmFja2Ryb3Agb3Blbj17b3Blbn0gLz5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg1XCIgYWxpZ249XCJjZW50ZXJcIj5ESVJFQ0NJw5NOPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8Rm9ybWlrXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsVmFsdWVzID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBlc3RhZG86ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9uaWE6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxlOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBub0ludDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9FeHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgY3A6IDAsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb25TdWJtaXQgPSB7KHZhbHVlcyk9PmhhbmRsZVN1Ym1pdCh2YWx1ZXMpfVxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvblNjaGVtYSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBZdXAub2JqZWN0KCkuc2hhcGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlc3RhZG86IFl1cC5zdHJpbmcoJ0RlYmUgc2VyIHVuIHRleHRvJykucmVxdWlyZWQoJ0RlYmVzIGFncmVnYXIgdW4gZXN0YWRvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGVnYWNpb246IFl1cC5zdHJpbmcoJ0RlYmUgc2VyIHVuIHRleHRvJykucmVxdWlyZWQoJ0RlYmVzIGFncmVnYXIgdW5hIGRlbGVnYWNpb24nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb25pYTogWXVwLnN0cmluZygnRGViZSBzZXIgdW4gdGV4dG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1bmEgY29sb25pYScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsZTogWXVwLnN0cmluZygnRGViZSBzZXIgdW4gdGV4dG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1bmEgY2FsbGUnKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9JbnQ6IFl1cC5udW1iZXIoKS5taW4oMCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vRXh0OiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEsICdFbCBOby4gRXh0LiBubyBlcyB2w6FsaWRvJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNwOiBZdXAubnVtYmVyKCdEZWJlIHNlciB1biBuw7ptZXJvJykubWluKDEsICdFbCBDLlAuIG5vIGVzIHbDoWxpZG8nKS5yZXF1aXJlZCgnRGViZXMgYWdyZWdhciB1biBDLlAuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxGb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiRXN0YWRvXCIgbmFtZT1cImVzdGFkb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJEZWxlZ2FjacOzblwiIG5hbWU9XCJkZWxlZ2FjaW9uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkNvbG9uaWFcIiBuYW1lPVwiY29sb25pYVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJDYWxsZVwiIG5hbWU9XCJjYWxsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPE15SW5wdXQgbGFiZWw9XCJOby4gSW50ZXJpb3JcIiBuYW1lPVwibm9JbnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNeUlucHV0IGxhYmVsPVwiTm8uIEV4dGVyaW9yXCIgbmFtZT1cIm5vRXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8TXlJbnB1dCBsYWJlbD1cIkPDs2RpZ28gUG9zdGFsXCIgbmFtZT1cImNwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGZ1bGxXaWR0aCB0eXBlPVwic3VibWl0XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTQVZFXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRyZXNzXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=